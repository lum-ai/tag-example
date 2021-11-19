// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
    return {
        verbose: true,
        rootDir: "./",
        roots: [
            "<rootDir>/src"
        ],
        collectCoverageFrom: [
            "src/**/*.{js,jsx,ts,tsx}",
            "!src/**/*.d.ts"
        ],
        setupFiles: [
            "<rootDir>/setup.tests.js",
            "react-app-polyfill/jsdom",
        ],
        setupFilesAfterEnv: [],
        testMatch: [
            "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
            "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
        ],
        testEnvironment: "jsdom",
        testRunner: "<rootDir>/node_modules/jest-circus/runner.js",
        transform: {
            "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/config/jest/babelTransform.js",
            "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
            "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
        },
        transformIgnorePatterns: [
            "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
            "^.+\\.module\\.(css|sass|scss)$"
        ],
        modulePaths: ["src"],
        moduleDirectories: ["node_modules"],
        moduleNameMapper: {
            "^.+\\.(css|less|scss)$": "babel-jest",
            "^Layouts(.*)$": "<rootDir>/src/components/_layouts/$1",
            "^Modules(.*)$": "<rootDir>/src/components/_modules/$1",
            "^Pages(.*)$": "<rootDir>/src/components/_pages/$1",
        },
        moduleFileExtensions: [
            "web.js",
            "js",
            "web.ts",
            "ts",
            "web.tsx",
            "tsx",
            "json",
            "web.jsx",
            "jsx",
            "node"
        ],
        watchPlugins: [
            "jest-watch-typeahead/filename",
            "jest-watch-typeahead/testname"
        ],
        resetMocks: true
    };
};