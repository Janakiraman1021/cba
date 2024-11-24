export default [
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: require("eslint-plugin-react"),
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: require("globals"),
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];
