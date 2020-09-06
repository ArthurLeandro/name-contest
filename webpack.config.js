const path = require("path");
module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve('public'),
		filename: "bundle.js"
	},
	module: {
		rules: [{
			rest: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
			},
		}, ],
	},
};