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
              base: '{colors.base.primaryText}',
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
            '1': {
              value: {
                base: 'oklch(89% 0.05 263)',
                _dark: 'oklch(19% 0.07 253)',
              },
            },
            '2': {
              value: {
                base: 'oklch(69% 0.16 263)',
                _dark: 'oklch(37% 0.18 263)',
              },
            },
            '3': {
              value: {
                base: '{colors.base.primary.3}',
                _dark: 'oklch(60% 0.23 263)',
              },
            },
            '4': {
              value: {
                base: 'oklch(37% 0.18 263)',
                _dark: 'oklch(69% 0.16 263)',
              },
            },
            '5': {
              value: {
                base: 'oklch(19% 0.07 253)',
                _dark: 'oklch(89% 0.05 263)',
              },
            },
          },
          accent: {
            value: {
              base: 'oklch(86.4% 0.2 90)',
              _dark: 'oklch(76% 0.15 298)',
            },
          },
          red: {
            '1': {
              value: {
                base: 'oklch(89% 0.06 28)',
                _dark: 'oklch(24% 0.06 28)',
              },
            },
            '2': {
              value: {
                base: 'oklch(70% 0.14 28)',
                _dark: 'oklch(43% 0.15 28)',
              },
            },
            '3': {
              value: {
                base: 'oklch(58% 0.22 28)',
                _dark: 'oklch(60% 0.18 28)',
              },
            },
            '4': {
              value: {
                base: 'oklch(40% 0.15 28)',
                _dark: 'oklch(71% 0.14 28)',
              },
            },
            '5': {
              value: {
                base: 'oklch(20% 0.06 28)',
                _dark: 'oklch(89% 0.06 28)',
              },
            },
          },
          yellow: {
            '1': {
              value: {
                base: 'oklch(96% 0.07 98)',
                _dark: 'oklch(32% 0.06 98)',
              },
            },
            '2': {
              value: {
                base: 'oklch(91% 0.15 98)',
                _dark: 'oklch(62% 0.14 98)',
              },
            },
            '3': {
              value: { base: 'oklch(85% 0.2 98)', _dark: 'oklch(87% 0.18 98)' },
            },
            '4': {
              value: {
                base: 'oklch(59% 0.14 98)',
                _dark: 'oklch(92% 0.15 98)',
              },
            },
            '5': {
              value: {
                base: 'oklch(28% 0.06 98)',
                _dark: 'oklch(96% 0.07 98)',
              },
            },
          },
          green: {
            '1': {
              value: {
                base: 'oklch(95% 0.06 140)',
                _dark: 'oklch(30% 0.07 140)',
              },
            },
            '2': {
              value: {
                base: 'oklch(86% 0.17 140)',
                _dark: 'oklch(57% 0.16 140)',
              },
            },
            '3': {
              value: {
                base: 'oklch(79% 0.24 140)',
                _dark: 'oklch(81% 0.2 140)',
              },
            },
            '4': {
              value: {
                base: 'oklch(54% 0.16 140)',
                _dark: 'oklch(87% 0.17 140)',
              },
            },
            '5': {
              value: {
                base: 'oklch(26% 0.07 140)',
                _dark: 'oklch(95% 0.06 140)',
              },
            },
          },
          gray: {
            '1': {
              value: {
                base: '{colors.base.gray.1}',
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
            value: { base: '{colors.gray.1}', _dark: '{colors.gray.1}' },
          },
          icon: {
            value: {
              base: '{colors.primaryText}',
              _dark: '{colors.primaryText}',
            },
          },
          input: {
            value: { base: 'oklch(96% 0 0)', _dark: 'oklch(10.5% 0.021 252)' },
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
        borders: {
          divider: {
            value: {
              width: '{borderWidths.md}',
              color: '{colors.divider}',
              style: 'solid',
            },
          },
        },
      },
      tokens: {
        colors: {
          white: { value: 'oklch(100% 0 0)' },
          black: { value: 'oklch(0% 0 0)' },
          base: {
            primary: { '3': { value: 'oklch(53% 0.27 263)' } },
            gray: { '1': { value: 'oklch(92% 0.004 286)' } },
            primaryText: { value: 'oklch(17% 0 0)' },
          },
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
          '3xl': { value: '3rem' },
        },
        radii: {
          xs: { value: '0.2rem' },
          sm: { value: '0.3rem' },
          md: { value: '0.6rem' },
          lg: { value: '1.2rem' },
          full: { value: '100rem' },
        },
        borderWidths: {
          xs: { value: `${rem.f1_16}rem` },
          sm: { value: `${rem.f1p5_16}rem` },
          md: { value: `${rem.f2_16}rem` },
          lg: { value: `${rem.f4_16}rem` },
          xl: { value: `${rem.f6_16}rem` },
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
        values: 'borderWidths',
        transform: (value, { token }) => {
          return {
            textDecorationThickness: value,
            textDecorationLine: 'underline',
            textDecorationColor: token('colors.accent'),
          };
        },
      },
    },
  },
});
