/**
 * Design tokens taken directly from the ByteSpace Figma file.
 * Every colour, radius and font below matches a value used in the design,
 * so components use names like `bg-brand` instead of raw hex codes.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#003BE2', // primary blue (hero, CTA, prices, links)
          grid: '#1E52E5', // lighter blue used for the background grid lines
        },
        lime: {
          DEFAULT: '#D4FB20', // accent (buttons, chips, badges)
          dark: '#C3E80F', // hover state for lime buttons
          bright: '#CBFC01', // hero half-circle and small badges
        },
        ink: {
          DEFAULT: '#242528', // main text
          heading: '#040819', // section headings
          body: '#4B4C53', // body copy
          soft: '#4F4F4F', // card meta text
          muted: '#82868E', // secondary text, placeholders
        },
        surface: {
          DEFAULT: '#F5F5F6', // chips, logo strip, pills
          alt: '#FAFAFA', // soft section backgrounds
        },
        line: {
          DEFAULT: '#CED0D3', // card borders, dividers
          input: '#E5E6E8', // form field borders
        },
      },
      fontFamily: {
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        card: '24px',
        panel: '16px',
        media: '12px',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        float: '0 12px 32px -8px rgba(3, 8, 24, 0.18)',
        card: '0 1px 2px rgba(3, 8, 24, 0.04)',
      },
    },
  },
  plugins: [],
};
