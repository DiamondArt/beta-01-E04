const testLoop = ($, test, name, stmt) => test(`${name} is not used`)
  .value($(stmt).length)
  .equal(0, `Use recursion instead of ${name}`)

module.exports = ({ describe, test, $ }) => [
  describe('BONUS', [
    testLoop($, test, 'for', 'ForStatement'),
    testLoop($, test, 'for..of', 'ForOfStatement'),
    testLoop($, test, 'for..in', 'ForinStatement'),
    testLoop($, test, 'while', 'WhileStatement'),
  ]),
]
