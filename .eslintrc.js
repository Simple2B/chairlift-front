module.exports = {
    root: true,
    env: {
        node: true,
    },
    globals: {
        Promise: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        // project: ['./tsconfig.eslint.json'],
    },
    rules: {
        '@typescript-eslint/no-var-requires': 0,
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
};
