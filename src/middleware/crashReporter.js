export default store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err);
    console.debug('State:', JSON.stringify(store.getState()));
    console.debug('Action:', JSON.stringify(action));
    throw err
  }
}
