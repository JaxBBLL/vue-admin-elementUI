export default {
  user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {},
  orderType: '',
  loading: false
};
