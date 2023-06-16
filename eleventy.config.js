module.exports = function (eleventyConfig) {
  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
  });
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");
  return {
    dir: {
      input: 'src',
      output: '_site'
    }
  };
};