const { designTokensByCategory, designTokensByPath, designTokensByType, sortByKey, groupedTokens, getNamedGroupedTokens } = require('../../../../assets/helpers/tokenHelper.js');
const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const spacingTokens = designTokensByPath(tokens, 'spacing');
const spacingTokensFixed = spacingTokens.filter((token) => token.attributes.type === 'fixed');

module.exports = async function() {
    return spacingTokensFixed;
};