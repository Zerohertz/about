import * as fs from "fs";
import * as path from "path";
import * as https from "https";

// Import payloads that have keywords
import educations from "../src/payloads/educations";
import experiences from "../src/payloads/experiences";
import projects from "../src/payloads/projects";

// Import keyword replacement function
import getReplacedKeyword from "../src/components/global/keywords";

// Configuration
const OUTPUT_DIR = path.join(__dirname, "../public/icons/keywords");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Extract all keywords from payload files that contain keywords
 * @returns Array of unique keywords
 */
function extractKeywords(): string[] {
  const keywords = new Set<string>();
  const payloads = [educations, experiences, projects];

  for (const payload of payloads) {
    if (payload.list) {
      for (const item of payload.list) {
        if (item.keywords) {
          for (const keyword of item.keywords) {
            keywords.add(keyword);
          }
        }
      }
    }
  }

  return Array.from(keywords).sort();
}

/**
 * Download SVG from shields.io for a given keyword
 * @param keyword Keyword to create badge for
 * @returns SVG content
 */
function downloadKeywordSvg(keyword: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const replacedKeyword = getReplacedKeyword(keyword);
    const url = `https://img.shields.io/badge/${keyword}-black?style=flat&logo=${replacedKeyword}`;

    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
          return;
        }

        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          resolve(data);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

/**
 * Main function to download all keyword SVGs
 */
async function main(): Promise<void> {
  console.log("Extracting keywords from payload files...");
  const keywords = extractKeywords();
  console.log(`Found ${keywords.length} unique keywords:`);
  keywords.forEach((keyword) => console.log(`  - ${keyword}`));

  console.log("\nDownloading SVGs from shields.io...");
  let downloadedCount = 0;
  let changedCount = 0;

  for (const keyword of keywords) {
    try {
      const svgContent = await downloadKeywordSvg(keyword);
      const fileName = `${keyword.replace(/\s+/g, "-").toLowerCase()}.svg`;
      const filePath = path.join(OUTPUT_DIR, fileName);

      // Check if file exists and content has changed
      let hasChanged = true;
      if (fs.existsSync(filePath)) {
        const existingContent = fs.readFileSync(filePath, "utf-8");
        hasChanged = existingContent !== svgContent;
      }

      if (hasChanged) {
        fs.writeFileSync(filePath, svgContent);
        console.log(`  ✓ ${fileName} (updated)`);
        changedCount++;
      } else {
        console.log(`  - ${fileName} (unchanged)`);
      }

      downloadedCount++;
    } catch (error) {
      console.error(`  ✗ Failed to download ${keyword}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  console.log(`\nDownload complete: ${downloadedCount}/${keywords.length} successful`);
  console.log(`Changed: ${changedCount} files`);

  // Always exit with 0 (success)
  process.exit(0);
}

// Run main function
main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
