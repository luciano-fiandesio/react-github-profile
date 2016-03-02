# React Github Profile

Display a Github profile using React components.

Simple ReactJs project useful for exploring:

- basic Webpack setup
- simple React components
- es6
- interacting with a remote API (using jquery)
- Bootstrap integration

Please note that this repo has 2 branches. _master_ branch uses a simpler setup. Mainly, the directory structure has two folders, 
_src_ and _app_.

To run the application in the _master_ branch, type:
  
    npm install
    webpack-dev-server
    
The _branch_ named _HtmlWebpackPlugin_ uses the __HtmlWebpackPlugin__ to merge index.html with the bundled javascript. This allows to
have a simpler directory structure, containing only one folder, _app_.

To run the application in the _HtmlWebpackPlugin_ branch, type:

   npm install
   npm run start

Now, browse to 'http://localhost:8080'.
