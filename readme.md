# README

## Scripts

### npm run dev
For development, you can use ```npm run dev``` command. It will generate the dist folder. In dist folder you can see compiled css, js and html files on the fly. Also assets will be moved and this dist folder will be served at ```localhost:3000```.

### npm run build
If you want to update the test address, you can run ```npm run build``` command. This command does basically the same thing with the ```npm run dev``` command, except js will be minified, means this command is for production.

### npm run deploy
Running ```npm run deploy``` will push the dist folder to ```gh-pages``` branch. So this command will automaticly update the test address.
**Note:** So basically, if you want to update test address; first ```run npm run build```, then run ```npm run deploy```.

### npm run clean
This command basically removes the ```dist``` folder. 

## Folder Structure

- dist / ```Output files```
- src/ ```Source files```
  - assets/ ```Static files```
    - fonts/ ```Font files```
    - images/ ```Images```
    - json/ ```Json files```
    - media/ ```Media files (e.g: videos)```
  - js/ ```All JS files```
    - components/ ```Partial JS files```
    - utils/ ```Utility JS files```
    - app.js ```Main JS file```
  - scss/ ```All SCSS files```
    - abstracts/ ```Mixins & Functions```
    - components/ ```Repeatable components```
    - core/ ```Core configs, typography, color etc.```
    - layout/ ```Layout elements```
    - pages/ ```Page spesific classes```
    - sections/ ```Section spesific classes```
    - vendor/ ```External CSS resources```
  - template/ ```Twig files to generate HTML outputs```
    - components/ ```HTML reusable components```
    - data/ ```Page datas as Json```
    - includes/ ```Main elements of HTML document```
    - layouts/ ```Layout elements of HTML document```
    - sections/ ```All sections```
    - ...Pages ```index, other-page, 404 etc.```
- .babelrc ```Babel config file```
- .browserlistrc ```Autoprefixer config file```
- .gitignore ```Gitignore file```
- gulpfile.js ```Gulp config file```
- package.json ```App config file```

## Features

- ES6
- SASS
- BEM
- ResetCSS
- Metatags
- Fonts
- Images & Static Files
- Bootstrap
- Data Passing / Reusable HTML'S with Twig
	- Generative Html
	- Reusable Components
		- Card component
		- Cookie banner component
- Layout Structure
	- More than one layout
	- Layout Elements
		- Header
		- Main
		- Sidebar
		- Footer

## Styleguide Checklist

- [x] Color palette
- [x] Typography
- [x] Grid structure
- [x] Buttons
- [x] Components
- [ ] Icons
- [ ] Form Elements