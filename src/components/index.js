import wangE from './editor.vue'
const out = {
  wangE
}
out.install = function(Vue) {
  Vue.component('v-editor', wangE)
}
export default out
