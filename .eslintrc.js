module.exports = {
   root: true,
   env: {
      node: true
   },
   extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/prettier'
   ],
   parserOptions: {
      parser: 'babel-eslint'
   },
   rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'prefer-const': 'off',
      '@typescript-eslint/member-delimiter-style': 'off',
      'no-useless-escape': 'off',
      '@typescript-eslint/camelcase': 'off',
      eqeqeq: 'off'
   },
   overrides: [
      {
         files: [
            '**/__tests__/*.{j,t}s?(x)',
            '**/tests/unit/**/*.spec.{j,t}s?(x)'
         ],
         env: {
            jest: true
         }
      }
   ]
}
