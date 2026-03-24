/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        // Nouvelle palette : joyeuse, familiale, magazine 2025
        primary:   { DEFAULT: '#FF6B35', light: '#FF8C5A', dark: '#E55520' },
        secondary: { DEFAULT: '#4ECDC4', light: '#72D9D3', dark: '#33B5AC' },
        accent:    { DEFAULT: '#FFE66D', light: '#FFED8A', dark: '#F5D83A' },
        bleu:      { DEFAULT: '#A8DADC', light: '#C2E8EA', dark: '#82C4C7' },
        success:   { DEFAULT: '#06D6A0', light: '#2EDEB0', dark: '#04B080' },
        texte:     { DEFAULT: '#1A1A2E', muted: '#4A4A6A', light: '#7A7A9A' },
        fond:      { DEFAULT: '#FFFFFF', alt: '#F7F9FC', card: '#FFFFFF' },

        // Aliases rétrocompatibles (composants existants)
        terracotta: { DEFAULT: '#FF6B35', light: '#FF8C5A', dark: '#E55520' },
        sable:      { DEFAULT: '#F7F9FC', light: '#FFFFFF', dark: '#E8ECF2' },
        sage:       { DEFAULT: '#4ECDC4', light: '#72D9D3', dark: '#33B5AC' },
        creme:      '#FFFFFF',
        brun: {
          DEFAULT: '#1A1A2E',
          light:   '#2E2E4E',
          muted:   '#4A4A6A',
          deep:    '#3D2B1F',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.texte.DEFAULT'),
            fontFamily: theme('fontFamily.body').join(', '),
            fontSize: '1.125rem',
            lineHeight: '1.85',
            maxWidth: '720px',
            h1: { fontFamily: theme('fontFamily.display').join(', '), color: theme('colors.texte.DEFAULT'), fontSize: '2.25rem' },
            h2: { fontFamily: theme('fontFamily.display').join(', '), color: theme('colors.texte.DEFAULT'), fontSize: '1.5rem', marginTop: '3rem' },
            h3: { fontFamily: theme('fontFamily.display').join(', '), color: theme('colors.texte.muted'), fontSize: '1.2rem', marginTop: '2rem' },
            p: { lineHeight: '1.85' },
            a:  { color: theme('colors.primary.DEFAULT'), '&:hover': { color: theme('colors.primary.dark') } },
            strong: { color: theme('colors.texte.DEFAULT') },
            blockquote: {
              borderLeftColor: theme('colors.primary.DEFAULT'),
              borderLeftWidth: '4px',
              color: theme('colors.texte.muted'),
              fontStyle: 'normal',
              paddingLeft: '1.25rem',
            },
          },
        },
      }),
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 2px 12px rgba(26,26,46,0.08)',
        'card-hover': '0 8px 24px rgba(26,26,46,0.14)',
      },
      animation: {
        'fade-in':  'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
