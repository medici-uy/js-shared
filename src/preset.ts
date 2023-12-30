import { definePreset } from '@pandacss/dev';

import { rem } from './helpers.js';

export const preset = definePreset({
  presets: ['@pandacss/preset-base'],
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          primaryTextOnColor: {
            value: '{colors.white}',
          },
          secondaryTextOnColor: {
            value: 'oklch(90% 0 0)',
          },
          primaryText: {
            value: {
              base: 'oklch(17% 0 0)',
              _dark: 'oklch(95% 0 0)',
            },
          },
          secondaryText: {
            value: {
              base: 'oklch(42% 0 0)',
              _dark: 'oklch(85% 0 0)',
            },
          },
          tertiaryText: {
            value: {
              base: 'oklch(56% 0 0)',
              _dark: 'oklch(70% 0 0)',
            },
          },
          bg: {
            value: {
              base: '{colors.white}',
              _dark: 'oklch(10.5% 0.02 252)',
            },
          },
        },
        sizes: {
          thickness: {
            sm: { value: `${rem.f1_16}rem` },
            md: { value: `${rem.f2_16}rem` },
            lg: { value: `${rem.f4_16}rem` },
            xl: { value: `${rem.f6_16}rem` },
          },
        },
        spacing: {
          generalSideMargin: {
            value: { base: '{spacing.sm}', md: '{spacing.3xl}' },
          },
          extendedSideMargin: {
            value: { base: '{spacing.sm}', md: '{spacing.md}' },
          },
        },
      },
      tokens: {
        colors: {
          white: { value: 'oklch(100% 0 0)' },
          black: { value: 'oklch(0% 0 0)' },
        },
        sizes: {
          mainContentMaxWidth: {
            xs: { value: '18rem' },
            sm: { value: '25rem' },
            md: { value: '35rem' },
            lg: { value: '62rem' },
            xl: { value: '80rem' },
          },
        },
        spacing: {
          '2xs': { value: '0.2rem' },
          xs: { value: '0.4rem' },
          sm: { value: '0.7rem' },
          md: { value: '1rem' },
          lg: { value: '1.5rem' },
          xl: { value: '2rem' },
          '2xl': { value: '2.5rem' },
          '3xl': { value: '3rem' },
          '4xl': { value: '4rem' },
          '5xl': { value: '6rem' },
        },
        fontSizes: {
          '3xs': { value: '0.5rem' },
          '2xs': { value: '0.7rem' },
          xs: { value: '0.8rem' },
          sm: { value: '0.9rem' },
          md: { value: '1rem' },
          lg: { value: '1.2rem' },
          xl: { value: '1.7rem' },
          '2xl': { value: '2.2rem' },
        },
        radii: {
          xs: { value: '0.2rem' },
          sm: { value: '0.3rem' },
          md: { value: '0.6rem' },
          lg: { value: '1.2rem' },
          full: { value: '100rem' },
        },
      },
      breakpoints: {
        sm: '40em',
        md: '60em',
        lg: '70em',
      },
    },
  },
  utilities: {
    extend: {
      truncate: {
        className: 'truncate',
        values: { type: 'boolean' },
        transform: (value) => {
          if (!value) return {};

          return {
            overflowX: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          };
        },
      },
      accentUnderline: {
        className: 'accent-underline',
        values: { type: 'string' },
        transform: (value) => {
          return {
            textDecorationThickness: value,
            textDecorationLine: 'underline',
            textDecorationColor: 'token(colors.accent)',
          };
        },
      },
    },
  },
});
