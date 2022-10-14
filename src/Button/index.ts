import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'YButton',

  render() {
    return h('button', null, 'myButton')
  }
})