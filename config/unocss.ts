import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Unocss from 'unocss/vite'

const colors = [
	'white',
	'black',
	'gray',
	'red',
	'yellow',
	'green',
	'blue',
	'indigo',
	'purple',
	'pink'
]

//  UnoCSS 默认是按需生成方式。也就是说只生成代码中使用过的样式。
// 那如果在 class 属性中使用变量，是无法分析变量的取值的。
// 这样也就无法动态生成样式了。
// 解决办法是使用Unocss的安全列表
const safelist = [
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-400`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-100`),
  ...colors.map((v) => `hover:bg-${v}-300`),
  ...colors.map((v) => `hover:bg-${v}-400`),
  ...colors.map((v) => `hover:bg-${v}-500`),
  ...colors.map((v) => `border-${v}-400`),
  ...colors.map((v) => `border-${v}-500`),
  ...colors.map((v) => `text-${v}-500`),
  ...colors.map((v) => `hover:text-${v}-500`),

  ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
  ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((v) => `text-${v}`),
  ...["rounded-full", "rounded-lg"],
  ...[
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share",
  ].map((v) => `i-ic-baseline-${v}`),
];

export default () =>
	Unocss({
		safelist,
		presets: [presetUno(), presetAttributify(), presetIcons()]
	})
