const { designTokensByCategory, designTokensByPath, designTokensByType, sortByKey, groupedTokens, getNamedGroupedTokens } = require('../../../../assets/helpers/tokenHelper.js');
const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const layoutTokens = designTokensByPath(tokens, 'layout');
const baseGridGutterResponsive = layoutTokens.filter((token) => token.attributes.subitem === 'gutter');

module.exports = async function() {
    return baseGridGutterResponsive;
};