import { createApp } from 'vue'
import YoungUI from './entry'

createApp({
  template: `
    <div>
      <YButton color="blue">蓝色按钮</YButton>
      <YButton color="green">绿色按钮</YButton>
      <YButton color="gray">灰色按钮</YButton>
      <YButton color="yellow">黄色按钮</YButton>
      <YButton color="red">红色按钮</YButton>
    </div>
    <div style="margin-top: 20px;">
      <YButton color="blue" round plain icon="search" ></YButton>
      <YButton color="green" round plain icon="edit" ></YButton>
      <YButton color="gray" round plain icon="check" ></YButton>
      <YButton color="yellow" round plain icon="message" ></YButton>
      <YButton color="red" round plain icon="delete" ></YButton>
    </div>
  `
})
  .use(YoungUI)
  .mount('#app')
