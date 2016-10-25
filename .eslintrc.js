module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "mocha": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": 1,
        "indent": [
            2, 4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "strict": 0
    }
};
