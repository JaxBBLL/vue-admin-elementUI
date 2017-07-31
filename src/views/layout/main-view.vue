<template>
	 <div class="main-container">
      <div class="main-header">
        <div class="main-header-user">
          <el-dropdown @command="handleClick">
            <span class="el-dropdown-link">
				    {{name}}<i class="el-icon-caret-bottom el-icon--right"></i>
				  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">退出</el-dropdown-item>
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
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
</template>
<script>
  export default {
    mounted() {
      this.$store.commit('getUser')
    },
    computed: {
      name() {
        return this.$store.state.user.name;
      }
    },
    methods: {
      logout() {
        this.$confirm('确认退出吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.$router.push('/login');
        }).catch(() => {});
      },
      handleClick(val) {
        switch (val) {
          case 'logout':
            this.logout();
            break;
        }
      }
    }
  }
</script>

