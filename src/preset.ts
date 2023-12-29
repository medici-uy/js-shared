import { definePreset } from '@pandacss/dev';

export const preset = definePreset({
  presets: ['@pandacss/preset-base'],
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          primaryTextOnColor: {
            value: '{colors.white}',
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
      },
      tokens: {
        colors: {
          white: { value: 'oklch(100% 0 0)' },
          black: { value: 'oklch(0% 0 0)' },
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
    },
  },
});
