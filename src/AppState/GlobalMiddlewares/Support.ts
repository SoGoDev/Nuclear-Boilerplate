export const logger = (store, next, action) => {
  console.group(action.type);
  console.info('dispatching', action);

  const result = next(action);

  console.log('next state', store.getState());
  console.log(action.type);
  console.groupEnd();
  return result
};
