const { designTokensByCategory, designTokensByPath, designTokensByType, sortByKey, groupedTokens, getNamedGroupedTokens } = require('../../../../assets/helpers/tokenHelper.js');
const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const sizeTokens = designTokensByPath(tokens, 'size');
const sizeTokensElement = sizeTokens.filter((token) => token.attributes.type === 'element');

module.exports = async function() {
    return sizeTokensElement;
};