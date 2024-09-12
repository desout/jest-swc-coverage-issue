import dependency from './dependency';

export function onTestEventCallback() {
  console.log("onTestEventCallback");
}
export class TestClass {
  constructor() {
    dependency.on('test', onTestEventCallback)
  }

  triggerEvent() {
    dependency.fire('test');
  }
}

