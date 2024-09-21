import { definePreset } from '@pandacss/dev';

import { rem } from './helpers.js';

export const preset = definePreset({
  name: 'medici',
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
            value: 'light-dark(oklch(17% 0 0), oklch(95% 0 0))',
          },
          secondaryText: {
            value: 'light-dark(oklch(42% 0 0), oklch(85% 0 0))',
          },
          tertiaryText: {
            value: 'light-dark(oklch(56% 0 0), oklch(70% 0 0))',
          },
          bg: {
            value: 'light-dark({colors.white}, oklch(17.5% 0.012 254))',
          },
          primary: {
            '1': {
              value: 'light-dark(oklch(89% 0.05 263), oklch(25% 0.10 263))',
            },
            '2': {
              value: 'light-dark(oklch(69% 0.16 263), oklch(37% 0.18 263))',
            },
            '3': {
              value: 'light-dark(oklch(53% 0.27 263), oklch(60% 0.23 263))',
            },
            '4': {
              value: 'light-dark(oklch(37% 0.18 263), oklch(69% 0.16 263))',
            },
            '5': {
              value: 'light-dark(oklch(25% 0.10 263), oklch(89% 0.05 263))',
            },
          },
          accent: {
            value: 'light-dark(oklch(86.4% 0.2 90), oklch(76% 0.15 298))',
          },
          red: {
            '1': {
              value: 'light-dark(oklch(89% 0.06 28), oklch(24% 0.06 28))',
            },
            '2': {
              value: 'light-dark(oklch(70% 0.14 28), oklch(43% 0.15 28))',
            },
            '3': {
              value: 'light-dark(oklch(58% 0.22 28), oklch(60% 0.18 28))',
            },
            '4': {
              value: 'light-dark(oklch(40% 0.15 28), oklch(71% 0.14 28))',
            },
            '5': {
              value: 'light-dark(oklch(20% 0.06 28), oklch(89% 0.06 28))',
            },
          },
          yellow: {
            '1': {
              value: 'light-dark(oklch(96% 0.07 98), oklch(32% 0.06 98))',
            },
            '2': {
              value: 'light-dark(oklch(91% 0.15 98), oklch(62% 0.14 98))',
            },
            '3': {
              value: 'light-dark(oklch(85% 0.2 98), oklch(87% 0.18 98))',
            },
            '4': {
              value: 'light-dark(oklch(59% 0.14 98), oklch(92% 0.15 98))',
            },
            '5': {
              value: 'light-dark(oklch(28% 0.06 98), oklch(96% 0.07 98))',
            },
          },
          green: {
            '1': {
              value: 'light-dark(oklch(95% 0.06 140), oklch(30% 0.07 140))',
            },
            '2': {
              value: 'light-dark(oklch(86% 0.17 140), oklch(57% 0.16 140))',
            },
            '3': {
              value: 'light-dark(oklch(79% 0.24 140), oklch(81% 0.2 140))',
            },
            '4': {
              value: 'light-dark(oklch(54% 0.16 140), oklch(87% 0.17 140))',
            },
            '5': {
              value: 'light-dark(oklch(26% 0.07 140), oklch(95% 0.06 140))',
            },
          },
          gray: {
            '1': {
              value: 'light-dark(oklch(92% 0.004 286), oklch(24% 0.006 286))',
            },
            '2': {
              value: 'light-dark(oklch(75% 0.014 286), oklch(43% 0.016 286))',
            },
            '3': {
              value: 'light-dark(oklch(58% 0.025 286), oklch(60% 0.025 286))',
            },
            '4': {
              value: 'light-dark(oklch(41% 0.016 286), oklch(76% 0.014 286))',
            },
            '5': {
              value: 'light-dark(oklch(21% 0.006 286), oklch(92% 0.004 286))',
            },
          },
          divider: {
            value: '{colors.gray.1}',
          },
          icon: {
            value: '{colors.primaryText}',
          },
          input: {
            value: 'light-dark(oklch(96% 0 0), oklch(10% 0.02 252))',
          },
          backdropBg: {
            value: 'light-dark(oklch(0% 0 0 / 0.3), oklch(50% 0 0 / 0.3))',
          },
          overBg: {
            value: '{colors.bg/80}',
          },
          secondaryBg: {
            value: '{colors.input/80}',
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
            value: '{borderWidths.md} solid {colors.divider}',
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
        blurs: {
          sm: { value: '0.1rem' },
          md: { value: '0.3rem' },
          lg: { value: '0.6rem' },
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
