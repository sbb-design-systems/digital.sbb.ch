const { designTokensByCategory, designTokensByPath, designTokensByType, sortByKey, groupedTokens, getNamedGroupedTokens } = require('../../../../assets/helpers/tokenHelper.js');
const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const layoutTokens = designTokensByPath(tokens, 'layout');
const baseGridColumns = layoutTokens.filter((token) => token.attributes.group === 'base-grid-columns');

module.exports = async function() {
    return baseGridColumns;
};