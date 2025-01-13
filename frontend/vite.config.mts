// import { defineConfig } from 'vite';
//
// export default defineConfig({
//     base: process.env.NODE_ENV === 'production' ? '/WebEngineering_Playground/' : '/',
//     build: {
//         rollupOptions: {
//             input: 'index.html',
//         },
//     },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0',  // Wichtig für Docker-Zugriff
        port: 5173,       // Standardport für Vite
        strictPort: true, // Fehler, wenn Port bereits belegt
    },
});