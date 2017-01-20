module.exports = {
  entry: './js/app.jsx',
  output: {
    path: __dirname,
    filename: './main/app.min.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: "js/components/Main.jsx",
      Nav: "js/components/Nav.jsx", 
      Weather: "js/components/Weather.jsx",
      WeatherForm: "js/components/WeatherForm.jsx",
      WeatherResults: "js/components/WeatherResults.jsx",
      About: "js/components/About.jsx",
      Examples: "js/components/Examples.jsx",
      OpenWeatherMap: "js/api/OpenWeatherMap.jsx"
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};
