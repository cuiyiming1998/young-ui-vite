/// <reference types="vitest" />
// test是vitest的扩展属性 vite原生定义中并没有这个属性
// 所以要加一个ts类型声明

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'

const rollupOptions = {
	external: ['vue', 'vue-router'],
	output: {
		globals: {
			vue: 'vue'
		},
    assetFileNames: `assets/style.css`,
	}
}

export default defineConfig({
	// plugins: [vue()]
	plugins: [
		vue(),
		vueJsx({}),
		Unocss()
	],
	resolve: {
		alias: {
			vue: 'vue/dist/vue.esm-bundler.js'
		}
	},
	build: {
		rollupOptions,
		minify: false,
    cssCodeSplit: true,
		lib: {
			entry: './src/entry.ts',
			name: 'YoungUI',
			fileName: 'young-ui',
			// 导出模块格式
			formats: ['es', 'umd', 'iife']
		}
	},
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})
