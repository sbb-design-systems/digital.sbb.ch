const { designTokensByCategory, designTokensByPath, designTokensByType, sortByKey, groupedTokens, getNamedGroupedTokens } = require('../../../../assets/helpers/tokenHelper.js');
const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');
const easingAnimationTokens = designTokensByCategory(tokens, 'animation');

module.exports = async function() {
    return easingAnimationTokens;
};