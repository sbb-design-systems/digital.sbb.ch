const { designTokensByCategory, designTokensByPath, designTokensByType, sortByKey, groupedTokens, getNamedGroupedTokens } = require('../../../../assets/helpers/tokenHelper.js');
const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const shadowTokens = designTokensByPath(tokens, 'shadow');
const _groupedTokens = groupedTokens(shadowTokens, 'subitem');
const namedTokenGroups = getNamedGroupedTokens(_groupedTokens);

module.exports = async function() {
    return namedTokenGroups;
};