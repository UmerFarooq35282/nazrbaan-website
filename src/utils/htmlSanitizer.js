import DOMPurify from "dompurify";

/**
 * ✅ sanitizeAndFixUploads
 * Safely sanitize HTML and fix relative upload paths
 * Supports image, video, and iframe content
 *
 * @param {string} htmlString - raw HTML string (e.g., from backend)
 * @param {string} baseUrl - your file base URL (e.g., https://api.nazarbaan.com)
 * @returns {string} - safe & fixed HTML ready for rendering
 */
export function sanitizeAndFixUploads(htmlString = "", baseUrl) {
    if (!htmlString) return "";

    // 🧹 1. Configure DOMPurify to allow media tags safely
    DOMPurify.setConfig({
        USE_PROFILES: { html: true },
        ADD_TAGS: ["iframe", "video", "audio", "source"],
        ADD_ATTR: [
            "allow",
            "allowfullscreen",
            "frameborder",
            "scrolling",
            "autoplay",
            "controls",
            "loop",
            "muted",
            "playsinline",
        ],
    });

    // 🧼 2. Sanitize the HTML
    const cleanHTML = DOMPurify.sanitize(htmlString);

    // 🧩 3. Parse sanitized HTML using a temporary DOM
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = cleanHTML;

    // 🖼️ 4. Fix <img>, <video>, and <source> src attributes
    const mediaElements = tempDiv.querySelectorAll("img, video, source");
    mediaElements.forEach((el) => {
        const src = el.getAttribute("src");
        if (src && src.includes("uploads")) {
            const fixedSrc = src.replace(/^(\.\.\/)?uploads/, `${baseUrl}/uploads`);
            el.setAttribute("src", fixedSrc);
        }
    });

    // 🧭 5. Fix <a> href attributes (optional, if links contain uploads)
    const links = tempDiv.querySelectorAll("a[href]");
    links.forEach((a) => {
        const href = a.getAttribute("href");
        if (href && href.includes("uploads")) {
            const fixedHref = href.replace(/^(\.\.\/)?uploads/, `${baseUrl}/uploads`);
            a.setAttribute("href", fixedHref);
        }
    });

    // ✅ 6. Return final sanitized and fixed HTML
    return tempDiv.innerHTML;
}
