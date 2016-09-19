/* eslint-env mocha */
// @flow
import test from 'tape';
import actionTypeCreator from './action-type-creator';

test('throws on duplicates', assert => {
  const createMultipleOfSame = () => {
    actionTypeCreator('a', 'a');
    actionTypeCreator('a', 'a');
  };
  assert.throws(createMultipleOfSame, /Duplicate/);
  assert.end();
});
test('throws on too few params', assert => {
  assert.throws(() => actionTypeCreator(), /forceName/);
  assert.throws(() => actionTypeCreator('a'), /actionName/);
  assert.end();
});
