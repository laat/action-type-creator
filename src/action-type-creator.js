// @flow
const actions = {};

export default (forceName: string, actionName: string) => {
  if (!forceName) {
    throw new Error('IllegalArgument: you must set forceName');
  }
  if (!actionName) {
    throw new Error('IllegalArgument: you must set actionName');
  }
  const actionType = `@@${forceName}/${actionName}`;
  if (actions.hasOwnProperty(actionType)) {
    throw new Error(`Duplicate action created [${actionType}]`);
  }
  actions[actionType] = true;
  return actionType;
};
