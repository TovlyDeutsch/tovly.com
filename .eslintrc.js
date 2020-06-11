module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'prettier/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  globals: {
    tw: true,
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ['graphqlTypes.ts'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
      ],
      // TODO consider disabling some of these rules once I have graphql type generation going
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
  ],
  rules: {
    'import/extensions': 'off',
    'linebreak-style': 'off',
    'react/no-unescaped-entities': 'off',
    'no-warning-comments': 'warn',
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    indent: ['error', 2],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
        printWidth: 120,
      },
    ],
  },
  plugins: ['prettier', '@typescript-eslint', 'react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
