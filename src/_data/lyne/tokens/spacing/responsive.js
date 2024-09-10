const { designTokensByCategory, designTokensByPath, designTokensByType, sortByKey, groupedTokens, getNamedGroupedTokens } = require('../../../../assets/helpers/tokenHelper.js');
const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const spacingTokens = designTokensByPath(tokens, 'spacing');
const spacingTokensResponsive = spacingTokens.filter((token) => token.attributes.type === 'responsive');

module.exports = async function() {
    return spacingTokensResponsive;
};