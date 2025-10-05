import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react()],base:'/farware-genesis-github-ready/',server:{port:5173}});
