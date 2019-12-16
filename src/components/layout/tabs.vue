<template>
  <div class="tabs-wrapper">
    <div class="flex-item">
      <router-link
        v-for="tag in visitedViews"
        :to="{ path: tag.path, query: tag.query, params: tag.params }"
        :key="tag.realPath"
      >
        <el-tag
          :closable="closable"
          :type="isActive(tag) ? 'primary' : ''"
          @close="closeViewTabs(tag, $event)"
          >{{ tag.title }}</el-tag
        >
      </router-link>
    </div>
    <span class="right-icon">
      <i
        class="el-icon-refresh pointer"
        @click="onRefresh"
        title="刷新页面"
      ></i>
      <el-dropdown @command="onDropdown">
        <span class="el-dropdown-link pointer">
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1" v-show="closable"
            >关闭当前标签页</el-dropdown-item
          >
          <el-dropdown-item command="2">关闭其他标签页</el-dropdown-item>
          <el-dropdown-item command="0">关闭全部标签页</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </div>
</template>
<script>
export default {
  name: 'Tabs',
  data() {
    return {};
  },
  computed: {
    visitedViews() {
      return this.$store.state.visitedViews;
    },
    closable() {
      return this.$store.state.visitedViews.length > 1;
    }
  },
  watch: {
    $route() {
      this.addViewTabs();
    }
  },
  methods: {
    closeViewTabs(view, $event) {
      this.$store.dispatch('delVisitedViews', view).then(views => {
        if (this.isActive(view)) {
          const latestView = views.slice(-1)[0];
          if (latestView) {
            this.$router.push({
              path: latestView.path,
              query: latestView.query
            });
          } else {
            this.$router.push('/');
          }
        }
      });
      $event && $event.preventDefault();
    },
    generateRoute() {
      return {
        title: this.$route.meta.title,
        name: this.$route.name,
        path: this.$route.path,
        query: this.$route.query,
        params: this.$route.params,
        realPath: window.location.hash.slice(1),
        meta: this.$route.meta
      };
    },
    addViewTabs() {
      this.$store.dispatch('addVisitedViews', this.generateRoute());
    },
    isActive(tag) {
      return tag.path === this.$route.path;
    },
    onRefresh() {
      if (!this.$route.meta.noCache) {
        this.$store.dispatch('delVisitedViews', this.generateRoute());
      }
      this.$router.push({
        path: '/refresh'
      });
    },
    onDropdown(command) {
      if (command == 1) {
        this.closeViewTabs(this.generateRoute());
      } else if (command == 2) {
        let views = this.visitedViews.filter(
          item => item.path !== this.$route.path
        );
        this.$store.dispatch('delVisitedViews', views);
      } else {
        this.$store.dispatch('clearVisitedViews').then(() => {
          this.$router.push('/home');
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import '~@style/var.less';
.tabs-wrapper {
  height: 34px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
  min-width: 1100px;
  padding: 0 20px 0 10px;
  .shadow();
  .right-icon {
    i {
      font-size: 20px;
      margin-left: 15px;
      color: @primary-color;
    }
  }
  .el-tag {
    cursor: pointer;
    background-color: #efefef;
    margin-right: 10px;
    &.el-tag--primary {
      background-color: @primary-color;
      color: #fff;
      /deep/ .el-icon-close {
        color: #fff !important;
      }
    }
  }
}
</style>
