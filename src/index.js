export const letIn = (...fns) => () => {
  const letParams = [];
  for (let i = 0; i < fns.length - 1; i += 1) {
    letParams.push(fns[i].apply(null, letParams));
  }
  return fns[fns.length - 1].apply(null, letParams);
};

export const letInRun = (...fns) => letIn.apply(null, fns)();

export default {
  letIn,
  letInRun
}
