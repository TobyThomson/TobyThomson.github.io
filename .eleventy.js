module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/fonts");

  eleventyConfig.addFilter("groupByYear", function (projects) {
    const groups = {};
    for (const p of projects) {
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

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
    },
  };
};
