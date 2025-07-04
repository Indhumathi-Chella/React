const delayLogger = (store) => (next) => (action) => {
  if (action.type.startsWith("users/")) {
    setTimeout(() => {
      console.log("Dispatched:", action);
    }, 1000);
  }
  return next(action);
};

export default delayLogger;
