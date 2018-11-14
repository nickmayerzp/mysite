var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',


        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 8090

    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },{
                test: /\.css$/,
                loader:[ 'style-loader', 'css-loader' ]
            }
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader'
            // },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files

        ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
}

