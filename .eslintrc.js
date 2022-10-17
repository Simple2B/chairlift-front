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
                '@typescript-eslint/no-empty-interface': [
                    'error',
                    {
                        allowSingleExtends: false,
                    },
                ],
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname, // project: ['./tsconfig.eslint.json'],
    },
    // rules: {
    //     '@typescript-eslint/no-var-requires': 0,
    // },
    rules: {
        'no-unused-vars': [
            1,
            {
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:storybook/recommended',
    ],
};
