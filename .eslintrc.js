module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "settings": {
    "propWrapperFunctions": ["forbidExtraProps", "exact", "Object.freeze"],
    "import/resolver": {
      "node": {
        "paths": ["./src"]
      }
    }
  },
  "rules": {
    "no-mixed-operators": [2, { "allowSamePrecedence": true }],
    "react/no-did-mount-set-state": 0,
    // indents
    "indent": ["error", 4, {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1
    }],
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "max-len": ["error", 200],
    "quotes": 0,
    "no-console": ["error", {"allow": ["error"]}],
    "import/no-named-as-default": 0,
    "import/no-extraneous-dependencies": 0,
    "react/jsx-filename-extension": ["warn", {"extensions": [".js", ".jsx"]}],
    "new-cap": 0,
    "radix": ["error", "as-needed"],
    "object-curly-spacing": ["error", "never"],
    "object-curly-newline": ["error", { "consistent": true }],
    "arrow-parens": ["error", "always"],
    "import/prefer-default-export": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "import/imports-first": ["error", ""],
    "react/forbid-prop-types": "off",
    "jsx-a11y/aria-role": "off",
    "linebreak-style": "off",
    "no-use-before-define": "off",
    "react/no-typos": "off",
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ ],
      "specialLink": [ "to", "hrefLeft", "hrefRight" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],
    "no-else-return": ["off"],
    "react/jsx-key": "warn"
  }
};
