import { runDependency, add } from './main'

jest.mock('./dependency', () => {
  return {
    default: () => { return 'dependency-mock'},
    __esModule: true, // this is needed unless "noInterop": true is specified in .swcrc. but with that specified every other import from node_modules stops working so test('add()',...) will start failing
  };
});

test('runDependency()',() => {
  expect(runDependency()).toBe('dependency-mock');
});

test('add()', () => {
  expect(add(1,2)).toBe(3);
})

