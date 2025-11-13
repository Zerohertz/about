import * as fs from "fs";
import * as path from "path";
import * as https from "https";

// Import opensources payload and utilities
import openSources from "../src/payloads/opensources";
import { getLocalizedText, includes } from "../src/utils/MultiLanguage";
import { Language } from "../src/components/default/Language";

// Configuration
const OUTPUT_DIR = path.join(__dirname, "../public/icons/stars");
const COLORS_FILE = path.join(__dirname, "../src/styles/colors.module.scss");

/**
 * Extract primary color from colors.module.scss
 * @returns Primary color without '#' (e.g., "800a0a")
 */
function getPrimaryColor(): string {
  const content = fs.readFileSync(COLORS_FILE, "utf-8");
  const match = content.match(/\$primary:\s*#([0-9a-fA-F]{6})/);
  if (!match) {
    throw new Error("Could not find $primary color in colors.module.scss");
  }
  return match[1].toLowerCase();
}

const PRIMARY_COLOR = getPrimaryColor();

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Extract GitHub repositories from opensources payload
 * Following the same logic as Container.tsx:
 * - !item.startedAt
 * - includes(item.title, "/", language)
 * - item.href.includes("github.com")
 * @returns Array of repository names in format "owner/repo"
 */
function extractGitHubRepos(): string[] {
  const repos = new Set<string>();
  const language: Language = "en"; // Use English for consistency

  for (const item of openSources.list) {
    // Same condition as Container.tsx Left component
    if (!item.startedAt && item.title && item.href) {
      if (includes(item.title, "/", language) && item.href.includes("github.com")) {
        const repoName = getLocalizedText(item.title, language);
        if (repoName) {
          repos.add(repoName);
        }
      }
    }
  }

  return Array.from(repos).sort();
}

/**
 * Download SVG from shields.io for a given repository
 * @param repo Repository name in format "owner/repo"
 * @returns SVG content
 */
function downloadShieldSvg(repo: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = `https://img.shields.io/github/stars/${repo}?style=flat&logo=github&logoColor=000000&labelColor=808080&color=${PRIMARY_COLOR}&label=GitHub%20%F0%9F%8C%9F`;

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
 * Main function to download all GitHub Stars SVGs
 */
async function main(): Promise<void> {
  console.log("Extracting GitHub repositories from payload files...");
  const repos = extractGitHubRepos();
  console.log(`Found ${repos.length} repositories:`);
  repos.forEach((repo) => console.log(`  - ${repo}`));

  console.log("\nDownloading SVGs from shields.io...");
  let downloadedCount = 0;
  let changedCount = 0;

  for (const repo of repos) {
    try {
      const svgContent = await downloadShieldSvg(repo);

      // Skip if SVG contains error message
      if (svgContent.includes("Unable to select next GitHub token from pool")) {
        console.log(`  ⚠ ${repo}: GitHub token pool error, skipping`);
        continue;
      }

      const fileName = `${repo.replace("/", "-").replace(/\s+/g, "-").toLowerCase()}.svg`;
      const filePath = path.join(OUTPUT_DIR, fileName);

      // Check if file exists and content has changed
      let hasChanged = true;
      if (fs.existsSync(filePath)) {
        const existingContent = fs.readFileSync(filePath, "utf-8");
        hasChanged = existingContent !== svgContent;
      }

      if (hasChanged) {
        fs.writeFileSync(filePath, svgContent);
        console.log(`  ✓ ${fileName} (${hasChanged ? "updated" : "unchanged"})`);
        changedCount++;
      } else {
        console.log(`  - ${fileName} (unchanged)`);
      }

      downloadedCount++;
    } catch (error) {
      console.error(`  ✗ Failed to download ${repo}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  console.log(`\nDownload complete: ${downloadedCount}/${repos.length} successful`);
  console.log(`Changed: ${changedCount} files`);

  // Always exit with 0 (success)
  process.exit(0);
}

// Run main function
main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
