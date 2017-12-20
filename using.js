const { exec } = require('child_process');
const pkg = require('./package.json');
const deps = pkg.dependencies;

function getFromNodeModule(pkgName){
  return `node_modules/${pkgName}/src/`;
}

function solveJSONPropstoArr(obj) {
    let values = [];
    for (var key in obj) {
        values.push(key);
    }
    return values;
}

let arrayOfDeps = solveJSONPropstoArr(deps).map((elem) => {
    return getFromNodeModule(elem)
});

exec(`babel --presets metal -d build/amdTestee/ ${arrayOfDeps} --no-babelrc`);