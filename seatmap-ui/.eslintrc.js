// https://eslint.org/docs/user-guide/configuring
module.exports = {
  // 指定校验的ECMAScript的版本及特性
  "parserOptions": {
    "ecmaVersion": 7, // ECMAScript版本，7为ES7
    "sourceType": "module", //默认script，如果代码是ECMAScript模块，设置为module
    "ecmaFeatures": { // 使用额外的语言特性
        "jsx": true // 启用JSX
    }
  },
  // 当访问未定义的变量时，no-undef 规则将发出警告
  // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
  },
  // 当访问未定义的变量时，no-undef 规则将发出警告
  // 脚本在执行期间访问的额外的全局变量
  "globals": {
    "document": true,
    "navigator": true,
    "window": true,
    "node": true
  },
  // Enable eslint recommened extends library
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  // 定义自己的规则
  "rules": {
    "comma-dangle": ["error", "never"], // 要求或禁止末尾逗号：不允许逗号
    "indent": ["error", 2], // JavaScript代码强制使用一致的缩进：4格缩进
    "no-unused-expressions": ["error", {"allowTernary": true}]
  }
};