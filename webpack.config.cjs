const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/main.jsx', // 👈 importante si usas React

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'], // para importar sin extensión
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader', // transpila React
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devServer: {
    static: './dist',
    open: true,
    port: 3000,
  },
};