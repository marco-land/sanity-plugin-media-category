module.exports = {
  '**/*.{js,jsx}': ['eslint --ignore-pattern "dist/*"'],
  '**/*.{ts,tsx}': ['eslint --ignore-pattern "dist/*"', () => 'tsc --noEmit']
}
