const EleventyFetch = require("@11ty/eleventy-fetch");
const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

// helpers
const designTokensByCategory = (json, category) => json.filter((token) => token.attributes.category === category);
const designTokensByPath = (json, path) => json.filter((token) => token.path.indexOf(path) !== -1);
const designTokensByType = (json, type) => json.filter((token) => token.attributes.type === type);

const sortByKey = (items, sortKey) => {
  items.sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];
    let result = 0;

    if (valueA > valueB) {
      result = 1;
    } else if (valueA < valueB) {
      result = -1;
    }

    return result;
  });

  return items;
};

/*
const addUnitToTokenValue = (_token, unit) => {
  const token = _token;

  token.value = `${token.value}${unit}`;

  return token;
};
*/
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

const getNamedGroupedTokens = (_tokens) => {
  const keys = Object.keys(_tokens);
  const finalTokens = {};

  keys.forEach((key) => {
    const tokenGroup = _tokens[key];
    const tokensObject = {};

    tokenGroup.forEach((token) => {
      tokensObject[token.name] = token.value;
    });

    finalTokens[key] = tokensObject;
  });

  return finalTokens;
};

// animation
const easingAnimationTokens = designTokensByCategory(tokens, 'animation');
const durationAnimationTokens = designTokensByCategory(tokens, 'time');

// border
const borderTokens = designTokensByPath(tokens, 'border');
const widthTokens = borderTokens.filter((token) => token.attributes.type === 'width');
const radiusTokens = borderTokens.filter((token) => token.attributes.type === 'radius');

//color
const colorTokens = designTokensByCategory(tokens, 'color');

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
const fontFamilyTypoTokens = typoTokens.filter((token) => token.attributes.type === 'fontFamily');
const letterSpacingTypoTokens = typoTokens.filter((token) => token.attributes.type === 'letterSpacing');
const lineHeightTypoTokens = typoTokens.filter((token) => token.attributes.type === 'lineHeight');

// size
const sizeTokens = designTokensByPath(tokens, 'size');
const sizeTokensElement = sizeTokens.filter((token) => token.attributes.type === 'element');
const sizeTokensUIicon = sizeTokens.filter((token) => token.attributes.type === 'icon');

// shadow
const shadowTokens = designTokensByPath(tokens, 'shadow');
const _groupedTokens = groupedTokens(shadowTokens, 'group');
const namedTokenGroups = getNamedGroupedTokens(_groupedTokens);

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
      fontFamilyTypoTokens: data => {
        return fontFamilyTypoTokens;
      },
      letterSpacingTypoTokens: data => {
        return letterSpacingTypoTokens;
      },
      lineHeightTypoTokens: data => {
        return lineHeightTypoTokens;
      },
      sizeTokensElement: data => {
        return sizeTokensElement;
      },
      sizeTokensUIicon: data => {
        return sizeTokensUIicon;
      },
      shadowTokens: data => {
        return namedTokenGroups;
      },
      colorTokens: data => {
        return colorTokens;
      }
    }
  };