const HtmlWebpackPlugin = require("html-webpack-plugin");

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const path = require("path");
module.exports ={

    resolve: {
        fallback: {
            "assert": require.resolve("assert/"),
            "buffer": require.resolve("buffer/"),
            "events": require.resolve("events/"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "process": require.resolve("process/browser"),
            "punycode": require.resolve("punycode/"),
            "querystring": require.resolve("querystring-es3/"),
            "stream": require.resolve("stream-browserify"),
            "string_decoder": require.resolve("string_decoder/"),
            "timers": require.resolve("timers-browserify"),
            "tty": require.resolve("tty-browserify"),
            "url": require.resolve("url/"),
            "util": require.resolve("util/"),
            "vm": require.resolve("vm-browserify"),
            fs: false,
            "module": require.resolve("module"),
          },
      },
    entry: "./frontend/main.js",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                test: /\.sol$/,
                use: 'solc-loader',
                test: /\.json$/,
                type: 'javascript/auto',
                use: 'json-loader',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    plugins: [new HtmlWebpackPlugin({
        template: './frontend/index.html',

        filename: 'index.html',

        title: 'Webpack App',

        meta: {
          viewport: 'width=device-width, initial-scale=1.0',
        },
    }), new NodePolyfillPlugin()],
    mode: "development",
};
