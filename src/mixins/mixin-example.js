export default {
  created: function() {
    console.log(this.$options.name, 'created');
  },
  mounted: function() {
    console.log(this.$options.name, 'mounted');
  },
};
