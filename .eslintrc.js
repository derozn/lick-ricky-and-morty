module.exports = {
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    },
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },
  extends: ['eslint-config-airbnb', 'eslint-config-airbnb/hooks', 'eslint-config-prettier'],
  plugins: ['@typescript-eslint', 'jest', 'import', 'prettier', 'jsx-a11y', 'react', 'react-hooks'],
  env: {
    'jest/globals': true,
    es6: true,
  },
  rules: {
    'react/jsx-uses-react': 'off', // This rule and the one below allows the linter to not complain that React is not in scope (React 17+ doesn't require it!)
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }], // Allow JSX to be used with TSX extensions =)
    'react/jsx-props-no-spreading': 'off', // Allow for props to be spread ...
    'react/prop-types': ['off', {}], // Why use PropTypes when we have the power of TypeScript
    'no-use-before-define': 'off', // This rule (and the TS one below) conflict each other so favour the TS one.
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': [
      // Allow imports without extensions to resolve to the list specified below.
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-undef': 'off', // @typescript-eslint does a better job.
  },
};
