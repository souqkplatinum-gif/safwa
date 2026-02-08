import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/safwa/', // ✅ أهم سطر في المشروع كله
  plugins: [react()],
});
