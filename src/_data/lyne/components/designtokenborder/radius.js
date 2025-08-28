const { designTokensByCategory, designTokensByPath, designTokensByType, sortByKey, groupedTokens, getNamedGroupedTokens } = require('../../../../assets/helpers/tokenHelper.js');
const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const borderTokens = designTokensByPath(tokens, 'border');
const radiusTokens = borderTokens.filter((token) => token.attributes.type === 'radius');

module.exports = async function() {
    return radiusTokens;
};