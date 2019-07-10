const withSass = require("@zeit/next-sass");
// const withLess = require("@zeit/next-less");

// require("dotenv").config();
// const path = require("path");
// const Dotenv = require("dotenv-webpack");

module.exports = withSass({
	webpack: config => {
		config.plugins = config.plugins || [];

		config.plugins = [
			...config.plugins

			// new Dotenv({
			// 	path: path.join(__dirname, ".env"),
			// 	systemvars: true
			// })
		];

		return config;
	}
});
