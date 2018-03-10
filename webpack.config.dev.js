import webpack                      from 'webpack';
import path                         from 'path';


export default{
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: false,
    entry: [
        'eventsource-polyfill', //necessary for hotreloading with IE
        'webpack-hot-middleware/client',
        './src/index' //entry point of the application
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist', 
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src'
    },
    plugins:[

    ],
    module: {
        loaders: [
            
        ]
    }
};