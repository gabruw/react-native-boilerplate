module.exports = function (api) {
    api.cache(true);

    return {
        presets: [
            ['@babel/preset-env', { targets: { node: 'current' } }],
            'babel-preset-expo',
            'module:metro-react-native-babel-preset',
            '@babel/preset-typescript'
        ],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src'],
                    extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json']
                }
            ],
            [
                'module:react-native-dotenv',
                {
                    safe: false,
                    path: '.env',
                    verbose: false,
                    moduleName: '@env',
                    envName: 'NODE_ENV',
                    allowUndefined: false
                }
            ]
        ],
        env: {
            production: {
                plugins: ['react-native-paper/babel', 'transform-remove-console']
            }
        }
    };
};
