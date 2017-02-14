export const letIn = (...fns) => () => {
  const results = fns.reduce((letParams, fn) => { letParams.push(fn.apply(null, letParams)); return letParams; }, []);
  return results[results.length - 1];
};

export const letInRun = (...fns) => letIn.apply(null, fns)();

export default {
  letIn,
  letInRun
}
