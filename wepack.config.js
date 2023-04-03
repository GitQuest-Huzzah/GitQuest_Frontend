const path = require("path");

module.exports = {
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
				type: "asset/resource",
			},
			{
				test: /\.css$/,
				loader: "css-loader",
				options: {
					modules: true,
					importLoaders: 1,
					sourceMap: true,
				},
			},
		],
	},
	devtool: "inline-source-map",
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
};
