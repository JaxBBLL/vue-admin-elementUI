import Vue from 'vue';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/zh-CN';
import '@style/common.less';
import 'element-ui/lib/theme-chalk/index.css';
import '@style/el-ui.less';
import 'font-awesome/css/font-awesome.min.css';

Vue.use(Element, { locale, size: 'small' });
