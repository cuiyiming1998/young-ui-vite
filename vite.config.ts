import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const rollupOptions = {
	external: ['vue', 'vue-router'],
	output: {
		globals: {
			vue: 'vue'
		}
	}
}

export default defineConfig({
	// plugins: [vue()]
	plugins: [vue(), vueJsx({})],
	build: {
		rollupOptions,
		minify: false,
		lib: {
			entry: './src/entry.ts',
			name: 'YoungUI',
			fileName: 'young-ui',
			// 导出模块格式
			formats: ['es', 'umd', 'iife']
		}
	}
})
