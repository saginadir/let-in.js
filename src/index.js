export const letInLazy = (...fns) => () => {
  const results = fns.reduce((letParams, fn) => { letParams.push(fn.apply(null, letParams)); return letParams; }, []);
  return results[results.length - 1];
};

export const letIn = (...fns) => letIn.apply(null, fns)();

export default {
  letIn,
  letInLazy
}
