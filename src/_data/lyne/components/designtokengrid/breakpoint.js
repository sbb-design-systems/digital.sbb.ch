const { designTokensByCategory, designTokensByPath, designTokensByType, sortByKey, groupedTokens, getNamedGroupedTokens } = require('../../../../assets/helpers/tokenHelper.js');
const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const breakpointTokens = designTokensByPath(tokens, 'breakpoint');

module.exports = async function() {
    return breakpointTokens;
};