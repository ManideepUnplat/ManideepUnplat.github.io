module.exports = {
  projects: [
    {
      displayName: 'Unit Test',
      // The root of your source code, typically /src
      // `<rootDir>` is a token Jest substitutes
      roots: ['src'],

      // Jest transformations -- this adds support for TypeScript
      // using ts-jest
      transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.[t|j]s?$': 'babel-jest'
      },

      // Runs special logic, such as cleaning up components
      // when using React Testing Library and adds special
      // extended assertions to Jest
      setupFilesAfterEnv: [
        // '@testing-library/react/cleanup-after-each',
        // '@testing-library/jest-dom/extend-expect'
      ],

      // Test spec file resolution pattern
      // Matches parent folder `__tests__` and filename
      // should contain `test` or `spec`.
      testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

      // Module file extensions for importing
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
      // transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],
      moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss|ttf|woff|woff2)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/src/__mocks__/fileMock.js'
      }
    },
    {
      runner: 'jest-runner-eslint',
      displayName: 'Eslint',
      testMatch: [
        '<rootDir>/src/**/*.jsx',
        '<rootDir>/src/**/*.tsx',
        '<rootDir>/src/**/*.ts',
        '<rootDir>/src/**/*.js'
      ]
    }
  ]
};
