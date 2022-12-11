module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    // 错误："error"   警告："warn"   关闭： "off"
    // 错误：2         警告：1        关闭： 0
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 关闭组件命名规则
    'vue/multi-word-component-names': 0,
    'no-unused-vars': 1
  }
}
