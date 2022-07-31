import Vue from 'vue'
import store from '@/store'
Vue.directive('permission', {
  inserted: function (el, binding, vnode) {
    const permissionList = store.getters.permission
    const value = binding.value
    if (!permissionList.includes(value)) {
      el.style = 'display:none'
      setTimeout(() => {
        el.parentNode && el.parentNode.removeChild(el)
      }, 0)
    }
  }
})
