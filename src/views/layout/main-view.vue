<template>
	 <div class="main-container">
      <div class="main-header">
        <div class="main-header-user">
          <el-dropdown>
            <span class="el-dropdown-link">
				    Peter<i class="el-icon-caret-bottom el-icon--right"></i>
				  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="main-body">
        <el-row v-if="$route.meta.bread" class="bread">
          <el-breadcrumb class="breadcrumb" separator="/">
            <el-breadcrumb-item :key="key+''" v-for="(item,key) in $route.matched">{{ item.name }}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-row>
        <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
          <router-view></router-view>
        </transition>
      </div>
    </div>
</template>
<script>
  export default {
    mounted() {
      console.log('route', this.$route)
    }
  }
</script>

