import { App } from 'vue'
import YButton from './Button/Button'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton'

// 单独导出组件
export { YButton, SFCButton, JSXButton }

// 编写一个插件, 将所有组件安装到vue实例中
export default {
  install(app: App): void {
    app.component(YButton.name, YButton)
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
  }
}
