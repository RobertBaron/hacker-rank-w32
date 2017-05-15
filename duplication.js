const assert = require('assert');

const getT = (s) => {
  return s.map(function(binary){
    return binary === 0 ? 1 : 0;
  });
};

const buildS = (s) => {

  if (!s) {
    return buildS([0]);
  }

  if (s.length > 1000) {
    return s.join('');
  }

  // Expanded
  const sExpanded = s.concat(getT(s));
  return buildS(sExpanded);
};

const duplication = (value) => {
  return s[value];
};

const s = buildS();

assert.equal(duplication(2), 1);
assert.equal(duplication(5), 0);
assert.equal(duplication(7), 1);