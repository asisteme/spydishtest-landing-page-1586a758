/** @type {import(&#39;tailwindcss&#39;).Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'spy-bg': '#f1f1f6',
        'spy-blue': '#4c4c96',
        'spy-purple': '#323261'
      }
    }
  },
  plugins: []
}
