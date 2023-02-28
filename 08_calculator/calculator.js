const add = function(a, b) {
	return a+b;
};

const subtract = function(c, d) {
	return c-d;
};

const sum = function(e) {
  let f = 0;
  for (let i = 0; i < e.length; i++) {
    f += e[i];
  }
  return f;
};

const multiply = function(g) {
  let h = 1;
  for (let i = 0; i < g.length; i++) {
    h = h*g[i];
  }
  return h;
};

const power = function(i, j) {
	return i ** j;
};

const factorial = function(k) {
	let l = 1;
  for (let i = k; i >=1; i--) {
    l = l*i;
  }
  return l;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
