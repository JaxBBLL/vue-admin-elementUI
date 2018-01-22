import rangeDate from './range-date.vue'
import pagination from './pagination.vue'
import seoLevel from './seo-level.vue'

const out = {}

out.install = function(Vue) {
  Vue.component('range-date', rangeDate)
  Vue.component('pagination', pagination)
  Vue.component('seo-level', seoLevel)
}
export default out
