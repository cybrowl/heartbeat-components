import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({
        postcss: {
            plugins: [tailwind, autoprefixer]
        }
    }),

    kit: {
        adapter: adapter(),
        vite: {
            resolve: {
                alias: {
                    $lib: path.resolve('./src/lib'),
                    $components: path.resolve('./src/lib/components')
                }
            }
        }
    }
};

export default config;
