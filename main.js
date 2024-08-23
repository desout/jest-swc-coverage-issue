import dependency from './dependency';
import lodash from 'lodash';

console.log(lodash); // => undefined when "noInterop": true is specified in .swcrc

export function add(a,b) {
  return lodash.add(a,b); // this fails when "noInterop": true is specified in .swcrc
}

export function main() {
  return 'main';
}

export function runDependency() {
  return dependency();
}

