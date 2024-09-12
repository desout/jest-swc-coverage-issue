import {TestClass} from './main'
import dependency from "./dependency";
let eventMap = {};
jest.mock('./dependency', () => {
  return {
    default: {
      on: jest.fn((eventNames, handler) => {
        eventNames.split(' ').forEach(eventName => {
          eventMap[eventName] = handler;
        });
      }),
      fire: jest.fn((eventName, data = {}, target = undefined) => {
        if (eventMap[eventName]) {
          eventMap[eventName]({
            detail: {
              ...data,
              ts: data.ts || Date.now(),
            },
            target,
          });
        }
      })
    },
    __esModule: true,
  };
});

test('runDependency()',() => {
  const testClass = new TestClass();

  testClass.triggerEvent();

  expect(dependency.fire).toHaveBeenCalledTimes(1)
});