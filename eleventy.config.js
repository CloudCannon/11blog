const svgContents = require("eleventy-plugin-svg-contents");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const embedYouTube = require("eleventy-plugin-youtube-embed");

module.exports = function(eleventyConfig) {
	eleventyConfig.addWatchTarget("./src/assets/style.css");
	eleventyConfig.addPassthroughCopy("./src/assets/");
	eleventyConfig.addPlugin(svgContents);
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(embedYouTube, {
		lite: true
	});

	eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);
	eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);

	return {
		dir: {
			input: "src",
			output: "_site"
		}
	}
};