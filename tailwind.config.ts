import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: ['daisyui'],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'], // ここに好きなテーマ追加
    darkTheme: 'dark', // 自動切り替えしたくないなら手動管理前提でOK
  },
} as unknown as Config;

export default config;
