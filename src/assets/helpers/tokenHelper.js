// helpers.js
const designTokensByCategory = (json, category) => json.filter((token) => token.attributes.category === category);
const designTokensByPath = (json, path) => json.filter((token) => token.path.indexOf(path) !== -1);
const designTokensByType = (json, type) => json.filter((token) => token.attributes.type === type);

const sortByKey = (items, sortKey) => {
  items.sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];
    let result = 0;

    if (valueA > valueB) {
      result = 1;
    } else if (valueA < valueB) {
      result = -1;
    }

    return result;
  });

  return items;
};

const groupedTokens = (tokens, attribute) => {
  const tokensByGroups = {};

  tokens.forEach((token) => {
    const currentGroupKeys = Object.keys(tokensByGroups);
    const tokenGroup = token.attributes[attribute];

    if (tokenGroup) {
      if (currentGroupKeys.indexOf(tokenGroup.toString()) === -1) {
        tokensByGroups[tokenGroup] = [token];
      } else {
        tokensByGroups[tokenGroup].push(token);
      }
    }
  });

  return tokensByGroups;
};

const getNamedGroupedTokens = (_tokens) => {
  const keys = Object.keys(_tokens);
  const finalTokens = {};

  keys.forEach((key) => {
    const tokenGroup = _tokens[key];
    const tokensObject = {};

    tokenGroup.forEach((token) => {
      tokensObject[token.name] = token.value;
    });

    finalTokens[key] = tokensObject;
  });

  return finalTokens;
};

module.exports = {
  designTokensByCategory,
  designTokensByPath,
  designTokensByType,
  sortByKey,
  groupedTokens,
  getNamedGroupedTokens,
};