const { designTokensByCategory, designTokensByPath, designTokensByType, sortByKey, groupedTokens, getNamedGroupedTokens } = require('../../../../assets/helpers/tokenHelper.js');
const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const sizeTokens = designTokensByPath(tokens, 'size');
const sizeTokensUIicon = sizeTokens.filter((token) => token.attributes.type === 'icon');

module.exports = async function() {
    return sizeTokensUIicon;
};