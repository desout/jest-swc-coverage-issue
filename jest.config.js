const fs = require('fs')

const config = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'))

module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { ...config}],
  },
  coverageThreshold: {
    '**/*.@(js|jsx)': {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  collectCoverageFrom: [
    "**/main.js"
  ]
}