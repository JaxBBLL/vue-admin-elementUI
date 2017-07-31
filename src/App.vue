<template>
  <div id="app">
  	<transition name="fade">
    	<router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
