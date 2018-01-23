import RangeDate from './RangeDate.vue'
import Pagination from './Pagination-component.vue'
import SeIcon from './SeIcon.vue'
import Address from './Address.vue'
import Test from './Test-component.jsx'

const out = {}

out.install = function(Vue) {
  Vue.component(RangeDate.name, RangeDate)
  Vue.component(Pagination.name, Pagination)
  Vue.component(SeIcon.name, SeIcon)
  Vue.component(Address.name, Address)
  Vue.component(Test.name, Test)
}
export default out
