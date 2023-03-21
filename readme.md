# README

## Scripts

### your node version must be 14

nvm use 14

### install packages

npm install

### npm run dev

For development, you can use `npm run dev` command. It will generate the dist folder. In dist folder you can see compiled css, js and html files on the fly. Also assets will be moved and this dist folder will be served at `localhost:3000`.

### npm run build

If you want to update the test address, you can run `npm run build` command. This command does basically the same thing with the `npm run dev` command, except js will be minified, means this command is for production.
