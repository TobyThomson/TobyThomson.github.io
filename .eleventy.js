module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("src/projects/draft/**");

  eleventyConfig.addPassthroughCopy("src/fonts");

  eleventyConfig.addFilter("groupByYear", function (projects) {
    const groups = {};
    for (const p of projects || []) {
      const year = p.data.year || "Other";
      if (!groups[year]) groups[year] = [];
      groups[year].push(p);
    }
    return Object.keys(groups)
      .sort((a, b) => b - a)
      .map(year => ({ year, projects: groups[year] }));
  });
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

  eleventyConfig.addShortcode("figure", function (src, caption, alt) {
    const escape = (str) =>
      String(str).replace(/[&<>"']/g, (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c]));

    const altText = alt || String(caption).replace(/<[^>]+>/g, "");

    return `<figure class="figure">
  <img src="${escape(src)}" alt="${escape(altText)}">
  <figcaption>${caption}</figcaption>
</figure>`;
  });

  eleventyConfig.addShortcode("pdf", function (src, caption) {
    const escape = (str) =>
      String(str).replace(/[&<>"']/g, (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c]));

    const title = String(caption).replace(/<[^>]+>/g, "");
    const viewer = `${src}#navpanes=0&view=FitH`;

    return `<figure class="pdf-figure">
  <div class="pdf-frame">
    <iframe src="${escape(viewer)}" title="${escape(title)}" loading="lazy"></iframe>
  </div>
  <figcaption>${caption} <a href="${escape(src)}">Open in a new tab</a>.</figcaption>
</figure>`;
  });

  eleventyConfig.addShortcode("youtube", function (url, caption) {
    const escape = (str) =>
      String(str).replace(/[&<>"']/g, (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c]));

    const title = String(caption).replace(/<[^>]+>/g, "");
    const videoId = new URL(url).searchParams.get("v");
    const src = `https://www.youtube.com/embed/${videoId}`;

    return `<figure class="video-figure">
  <div class="video-frame">
    <iframe src="${escape(src)}" title="${escape(title)}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <figcaption>${caption}</figcaption>
</figure>`;
  });

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
    },
  };
};
