module.exports = {
    root: true,
    env: {
        node: true,
    },
    globals: {
        // Promise: 'readonly',
        React: 'readonly',
    },
    overrides: [
        {
            files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
            rules: {
                // example of overriding a rule
                'storybook/hierarchy-separator': 'error',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        // project: ['./tsconfig.eslint.json'],
    },
    // rules: {
    //     '@typescript-eslint/no-var-requires': 0,
    // },
    rules: {
        'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
};
