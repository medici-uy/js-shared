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
            value: 'oklch(95% 0 0)',
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
              _dark: 'oklch(17.5% 0.012 254)',
            },
          },
          primary: {
            '1': { value: { base: 'oklch(86.8% 0.06 264.5)', _dark: '' } },
            '2': { value: { base: 'oklch(61.5% 0.20 264.5)', _dark: '' } },
            '3': {
              value: {
                base: 'oklch(45.2% 0.30 264.5)',
                _dark: 'oklch(58.9% 0.23 264.5)',
              },
            },
            '4': { value: { base: 'oklch(31.2% 0.20 264.5)', _dark: '' } },
            '5': { value: { base: 'oklch(15.3% 0.09 264.5)', _dark: '' } },
          },
          accent: {
            value: {
              base: 'oklch(86.4% 0.2 90)',
              _dark: 'oklch(76% 0.15 298)',
            },
          },
          gray: {
            '1': {
              value: {
                base: 'oklch(92% 0.004 286)',
                _dark: 'oklch(24% 0.006 286)',
              },
            },
            '2': {
              value: {
                base: 'oklch(75% 0.014 286)',
                _dark: 'oklch(43% 0.016 286)',
              },
            },
            '3': {
              value: {
                base: 'oklch(58% 0.025 286)',
                _dark: 'oklch(60% 0.025 286)',
              },
            },
            '4': {
              value: {
                base: 'oklch(41% 0.016 286)',
                _dark: 'oklch(76% 0.014 286)',
              },
            },
            '5': {
              value: {
                base: 'oklch(21% 0.006 286)',
                _dark: 'oklch(92% 0.004 286)',
              },
            },
          },
          divider: {
            value: '{colors.gray.1}',
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
        durations: {
          short: { value: '50ms' },
          md: { value: '200ms' },
          long: { value: '500ms' },
        },
      },
      breakpoints: {
        sm: '40em',
        md: '60em',
        lg: '70em',
      },
    },
  },
  patterns: {
    extend: {
      clickableScale: {
        properties: {
          scale: { type: 'number' },
          shadow: { type: 'token', value: 'shadows' },
        },
        transform: (props) => {
          const shadow = props.shadow ?? 'none';

          return {
            '--scale': props.scale ?? 0.005,

            _hover: {
              transform: 'scale(calc(1 + var(--scale)))',
              boxShadow: shadow,
            },
            _active: {
              transform: 'scale(calc(1 - var(--scale)))',
              boxShadow: 'none',
            },
          };
        },
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
