export default {
  methods: {
    async makeSearch(e) {
      // if (this.$route.name === "search") {
      //   console.log("triggered from search");
      // }

      this.$router.push({ path: "/search", query: { searchTerm: e } });
    }
  }

  // watch: {
  //   $route(to, from) {
  //     console.log(to);
  //     console.log(from);

  //     this.$router.push({
  //       path: "/search",
  //       query: { searchTerm: to.query.searchTerm }
  //     });
  //   }
  // }
};
