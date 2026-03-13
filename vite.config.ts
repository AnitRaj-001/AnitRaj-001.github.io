import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/AnitRaj-001.github.io/'
    : '/',
  plugins: [react()]
})
