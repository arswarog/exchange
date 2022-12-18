module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 6,
        ecmaFeatures: {
            modules: true,
        },
    },
    plugins: [
        'import',
        'react',
        'react-hooks',
        '@typescript-eslint',
        'etc',
        'no-only-tests',
    ],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: [
        '.eslintrc.cjs',
        'steps.d.ts',
        'node_modules',
        'dist',
        '.next',
        'website/.docusaurus',
        'website/build',
        'website/node_modules',
        'website/static',
    ],

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
            },
            typescript: {
                alwaysTryTypes: true,
            },
        },
        react: {
            version: 'detect',
        },
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        'max-params': ['error', 5],
        'no-console': 'warn',
        'no-warning-comments': ['error', {terms: ['fixme'], location: 'anywhere'}],
        'no-unused-vars': ['warn', {vars: 'all', args: 'none', ignoreRestSiblings: true}],
        'space-before-blocks': 'error',
        'padding-line-between-statements': [
            'error',
            {blankLine: 'always', prev: '*', next: ['break', 'continue', 'return']},
            {blankLine: 'always', prev: ['const', 'let'], next: '*'},
            {blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let']},
            // example of directive - "use strict"
            {blankLine: 'always', prev: 'directive', next: '*'},
            {blankLine: 'any', prev: 'directive', next: 'directive'},
            {blankLine: 'always', prev: 'block-like', next: '*'},
            {blankLine: 'always', prev: '*', next: 'block-like'},
        ],
        'import/order': [
            'error',
            {
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: 'src/**',
                        group: 'internal',
                    },
                ],
                pathGroupsExcludedImportTypes: ["react"],
                'newlines-between': 'always',
                groups: ['builtin', 'external', 'internal', 'parent', ['sibling', 'index']],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'react/no-direct-mutation-state': 'error',
        'react/no-deprecated': 'error',
        'react/no-unsafe': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-curly-brace-presence': ['error', 'never'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        quotes: ['error', 'single', {avoidEscape: true}],
        'quote-props': ['warn', 'as-needed'],
        '@typescript-eslint/no-explicit-any': ['warn', {ignoreRestArgs: true}],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'signature',

                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',

                    'public-instance-field',
                    'protected-instance-field',
                    'private-instance-field',

                    'constructor',

                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',

                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',
                ],
            },
        ],
        // https://github.com/cartant/eslint-plugin-etc
        'etc/prefer-interface': ['warn', {allowLocal: true}],
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-ignore': 'allow-with-description',
                'ts-nocheck': 'allow-with-description',
                'ts-check': false,
                'ts-expect-error': false,
            },
        ],
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: true,
                types: {
                    object: false,
                    '{}': false,
                },
            },
        ],
    },
    overrides: [
        {
            files: ['*.{spec,test}.{js,jsx,ts,tsx}'],
            rules: {
                'no-only-tests/no-only-tests': [
                    'error',
                    {
                        block: ['test', 'it', 'assert', 'Scenario'],
                        focus: ['only'],
                    },
                ],
            },
        },
        {
            files: ['*.{js,jsx}'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
