const performArthimatic = (expression) => {
  console.log(expression);
  let isList = expression.includes("[");
  if (isList) {
    expression = expression.replace("[", "");
    expression = expression.replace("]", "");
    expression = expression.split(",");
    return expression.reduce(
      (previous, current) => parseFloat(previous) + parseFloat(current),
      0
    );
  } else {
    if (expression.includes("+")) {
      return addNum(expression);
    } else if (expression.includes("-")) {
      return subNum(expression);
    } else if (expression.includes("*")) {
      return mulNum(expression);
    } else if (expression.includes("/")) {
      return divNum(expression);
    } else if (expression.includes("%")) {
      return modNum(expression);
    }
  }
};
const addNum = (expression) => {
  expression = expression.split("+");
  return expression.reduce(
    (previous, current) => parseFloat(previous) + parseFloat(current),
    0
  );
};
const subNum = (expression) => {
  expression = expression.split("-");
  return expression.reduce(
    (previous, current) => parseFloat(previous) - parseFloat(current),
    0
  );
};
const divNum = (expression) => {
  expression = expression.split("/");
  return parseFloat(expression[0]) / parseFloat(expression[1]);
};
const mulNum = (expression) => {
  expression = expression.split("*");
  return parseFloat(expression[0]) * parseFloat(expression[1]);
};
const modNum = (expression) => {
  expression = expression.split("%");
  return parseFloat(expression[0]) % parseFloat(expression[1]);
};
const calculate = (expression) => {
  return performArthimatic(expression);
};

export default calculate;
