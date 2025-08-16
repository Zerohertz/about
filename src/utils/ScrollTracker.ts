import { useEffect } from "react";

let isLanguageChanging = false;

export const pauseScrollTracker = () => {
  isLanguageChanging = true;
  setTimeout(() => {
    isLanguageChanging = false;
  }, 1000); // Pause for 1 second during language change
};

export const useScrollTracker = () => {
  useEffect(() => {
    let currentActiveSection = "";

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let activeId = "";

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section-id") || entry.target.id;
            if (id && entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              activeId = id;
            }
          }
        });

        // Update URL only if we have a new active section with significant visibility
        // and we're not in the middle of a language change
        if (activeId && maxRatio > 0.3 && activeId !== currentActiveSection && !isLanguageChanging) {
          currentActiveSection = activeId;
          const currentHash = window.location.hash.slice(1);
          if (currentHash !== activeId) {
            window.history.replaceState(null, "", `#${activeId}`);
          }
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i * 0.1), // 0, 0.1, 0.2, ..., 1.0
        rootMargin: "-20% 0px -20% 0px", // More conservative margin
      },
    );

    // Find all section containers (div elements containing h2[id])
    const observeElements = () => {
      const h2Elements = document.querySelectorAll("h2[id]");
      h2Elements.forEach((h2) => {
        // Find the parent div container of each h2
        const sectionContainer = h2.closest("div");
        if (sectionContainer) {
          // Set the section container's id to match the h2's id
          sectionContainer.setAttribute("data-section-id", h2.id);
          observer.observe(sectionContainer);
        }
      });
    };

    // Initial observation
    observeElements();

    // Re-observe when content changes (for dynamic content)
    const timeoutId = setTimeout(observeElements, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);
};
