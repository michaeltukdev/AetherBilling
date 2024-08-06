/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
      },
      fontSize: {
        '15': '15px',
      },
      colors: {
        'background': 'var(--color-background)',
        'surface': 'var(--color-surface)',
        'surface-accent': 'var(--color-surface-accent)',
        'border': 'var(--color-border)',
        'input-border': 'var(--color-input-border)',
        'accent': {
          light: 'var(--color-accent-light)',
          DEFAULT: 'var(--color-accent)',
        },
        'text': {
          light: 'var(--color-text-light)',
          medium: 'var(--color-text-medium)',
          dark: 'var(--color-text-dark)',
        },
      },
    },
  },
  plugins: [],
}