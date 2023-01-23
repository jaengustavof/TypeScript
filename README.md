# TypeScript

## Basic Configuration
npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowjs true --noImplicitAny true


## Create script
Inside package.json:

"tsNode": "cd src && ts-node index.ts"


## Run script
In console:    

npm run tsNode 


## Create nodemon file in root
nodemon.json

{
    "watch": ["src"],
    "ext": ".ts, .js",
    "ignore": [],
    "exec": "ts-node ./src/index.ts"
}

add script in package.json
"start": "nodemon"

npm run start


## Transpile TS to JS
Add script to package.json

"transpilation": "tsc"

npm run transpilation


## Install rimraf
npm i --save-dev rimraf

add script to package.json
"build:prod": "rimraf ./build && tsc",
"start:prod": "npm run build:prod && node build/index.js"