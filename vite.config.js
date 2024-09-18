import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Asegúrate de que esté usando @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
  base: '/tres/', // Aquí especificas el nombre de tu repositorio
});
