export default {
  user: JSON.parse(sessionStorage.getItem('user') || '{}')
};
