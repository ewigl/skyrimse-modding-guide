// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: "https://ewigl.github.io",
	base: "/skyrimse-modding-guide",
	integrations: [
		starlight({
			title: '《上古卷轴V: 天际 特别版》 Mod 指南',
			logo: {
				src: "./public/favicon.svg",
				replacesTitle: true
			},
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},

			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://www.github.com/ewigl/skyrimse-modding-guide' }],
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: '准备工作',
					items: [
						{ label: '基础知识', slug: 'novice/basics' },
						{ label: '游戏版本', slug: 'novice/game-version' },
						{ label: '安装游戏', slug: 'novice/installing-game' },
					],
				},
				{
					label: '起步阶段',
					items: [
						{ label: '安装 SKSE', slug: 'apprentice/installing-skse' },
						{ label: '安装 MO2', slug: 'apprentice/installing-mo2' },
						{ label: '安装 Mod', slug: 'apprentice/installing-mods' },
						{ label: '启用 成就', slug: 'apprentice/enabling-achievements' },
					],
				},
				{
					label: '成长阶段',
					items: [
						{ label: '分类 Mod', slug: 'adept/classifying-mods' },
						{ label: '排序 Mod', slug: 'adept/sorting-mods' },
					],
				},
				{
					label: '深入研究',
					items: [
						{ label: 'Bug 修复', slug: 'expert/bug-fixes' },
						// { label: '性能优化', slug: 'expert/performance' },
						// { label: '角色美化', slug: 'expert/characters' },
						// { label: '环境美化', slug: 'expert/environment' },
						// { label: '画质提升', slug: 'expert/graphics' },
						// { label: '战斗大修', slug: 'expert/combat' },
					],
				},
				// {
				// 	label: '参考文档',
				// 	autogenerate: { directory: 'reference' },
				// },
				// {
				// 	label: '常见问题',
				// 	autogenerate: { directory: 'faq' },
				// },
			],
		}),
	],
});
