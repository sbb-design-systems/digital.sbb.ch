const EleventyFetch = require("@11ty/eleventy-fetch");
const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');


// helpers

const designTokensByCategory = (json, category) =>
  json.filter((token) => token.attributes.category === category);
const designTokensByPath = (json, path) => json.filter((token) => token.path.indexOf(path) !== -1);
const designTokensByType = (json, type) => json.filter((token) => token.attributes.type === type);
const addUnitToTokenValue = (_token, unit) => {
  const token = _token;

  token.value = `${token.value}${unit}`;

  return token;
};
const groupedTokens = (tokens, attribute) => {
  const tokensByGroups = {};

  tokens.forEach((token) => {
    const currentGroupKeys = Object.keys(tokensByGroups);
    const tokenGroup = token.attributes[attribute];

    if (tokenGroup) {
      if (currentGroupKeys.indexOf(tokenGroup.toString()) === -1) {
        tokensByGroups[tokenGroup] = [token];
      } else {
        tokensByGroups[tokenGroup].push(token);
      }
    }
  });

  return tokensByGroups;
};

// animation
const easingAnimationTokens = designTokensByCategory(tokens, 'animation');
const durationAnimationTokens = designTokensByCategory(tokens, 'time');

// border
const borderTokens = designTokensByPath(tokens, 'border');
const widthTokens = borderTokens.filter((token) => token.attributes.type === 'width');
const radiusTokens = borderTokens.filter((token) => token.attributes.type === 'radius');

// grid
const breakpointTokens = designTokensByPath(tokens, 'breakpoint');
const layoutTokens = designTokensByPath(tokens, 'layout');
const baseGridColumns = layoutTokens.filter((token) => token.attributes.group === 'base-grid-columns');
const baseGridGutterResponsive = layoutTokens.filter((token) => token.attributes.group === 'base-grid-gutter-responsive');
const baseOffsetResponsive = layoutTokens.filter((token) => token.attributes.group === 'base-offset-responsive');

// spacings
const spacingTokens = designTokensByPath(tokens, 'spacing');
const spacingTokensFixed = spacingTokens.filter((token) => token.attributes.type === 'fixed');
const spacingTokensResponsive = spacingTokens.filter((token) => token.attributes.type === 'responsive');

// typo
const typoTokens = designTokensByCategory(tokens, 'typo');
const scaleTypoTokens = designTokensByType(tokens, 'scale');
const typeFaceTypoTokens = typoTokens.filter((token) => token.attributes.type === 'typeFace');
const letterSpacingTypoTokens = typoTokens.filter((token) => token.attributes.type === 'letterSpacing');
const lineHeightTypoTokens = typoTokens.filter((token) => token.attributes.type === 'lineHeight');
const remainingTypoTokens = typoTokens.filter(
  (token) => token.attributes.type === 'fontFamilyFallback'
);



module.exports = {
    eleventyComputed: {
        easingAnimationTokens: data => {
        return easingAnimationTokens;
      },
      durationAnimationTokens: data => {
        return durationAnimationTokens;
      },
      borderWidthTokens: data => {
        return widthTokens;
      },
      borderRadiusTokens: data => {
        return radiusTokens;
      },
      breakpointTokens: data => {
        return breakpointTokens;
      },
      baseGridColumns: data => {
        return baseGridColumns;
      },
      baseGridGutterResponsive: data => {
        return baseGridGutterResponsive;
      },
      baseOffsetResponsive: data => {
        return baseOffsetResponsive;
      },
      spacingTokensFixed: data => {
        return spacingTokensFixed;
      },
      spacingTokensResponsive: data => {
        return spacingTokensResponsive;
      },
      scaleTypoTokens: data => {
        return scaleTypoTokens;
      },
      typeFaceTypoTokens: data => {
        return typeFaceTypoTokens;
      },
      letterSpacingTypoTokens: data => {
        return letterSpacingTypoTokens;
      },
      lineHeightTypoTokens: data => {
        return lineHeightTypoTokens;
      },
      remainingTypoTokens: data => {
        return remainingTypoTokens;
      },
   
    }
  };