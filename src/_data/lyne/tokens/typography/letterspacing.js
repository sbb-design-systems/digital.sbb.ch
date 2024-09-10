const { designTokensByCategory, designTokensByPath, designTokensByType, sortByKey, groupedTokens, getNamedGroupedTokens } = require('../../../../assets/helpers/tokenHelper.js');
const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const typoTokens = designTokensByCategory(tokens, 'typo');
const letterSpacingTypoTokens = typoTokens.filter((token) => token.attributes.type === 'letterSpacing');

module.exports = async function() {
    return letterSpacingTypoTokens;
};