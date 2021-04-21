<template>
  <section id="search-page">
    <Breadcumb />

    <div class="md:max-w-[1000px] md:mx-auto mx-4 ">
      <div class="bg-white border shadow-sm space-y-3 p-8">
        <h1 class="text-3xl font-bold antialiased">Categories</h1>

        <NuxtLink
          :to="{ name: 'categories-id', params: { id: category.id } }"
          :key="index"
          v-for="(category, index) of categories"
          class="space-y-2 p-8  flex flex-col justify-center  bg-[#f1f7f9]"
        >
          <h1 class="text-2xl font-bold">{{ category.title }}</h1>
        </NuxtLink>

        <h1 class="text-3xl font-bold antialiased">Articles</h1>

        <NuxtLink
          :to="{ name: 'articles-id', params: { id: article.id } }"
          :key="index"
          v-for="(article, index) of articles"
          class="space-y-2 p-8  flex flex-col justify-center  bg-[#f1f7f9]"
        >
          <h1 class="text-2xl font-bold">{{ article.title }}</h1>
          <p class="text-gray-400">
            {{ article.body }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
import searchMixins from "../mixins";

export default {
  //mixins: [searchMixins],

  data() {
    return {
      categories: [],
      articles: [],
      searchTerm: ""
    };
  },

  async asyncData({ query, $http }) {
    const searchTerm = query.searchTerm;

    const request = await $http.$get(`/search?searchTerm=${searchTerm}`);

    const categories = request.categories;
    const articles = request.articles;

    return { searchTerm, categories, articles };
  },

  mounted() {
    console.log("searchterm is" + this.searchTerm);
  },

  methods: {
    // async makeSearch(e) {
    //   console.log("from search");
    //   this.$router.push({ path: "/search", query: { searchTerm: e } });
    //   const request = await this.$http.$get(
    //     `http://localhost:3002/api/v1/search?searchTerm=${e}`
    //   );
    //   this.categories = request.categories;
    //   this.articles = request.articles;k
    //   // console.log(e);
    //   // const res = await this.$http.$get("http://localhost:3002/api/v1/search?searchTerm=joke");
    //   // console.log(res.articles);
    //   // console.log(res.categories)
    //   //   const res = await this.$http.$get(
    //   //     `http://localhost:3002/api/v1/search?searchTerm=${e}`
    //   //   );
    //   // this.$router.push({ path: 'search', query: { plan: 'private' } })
    // }
  },

  watch: {
    async $route(to, from) {
      console.log(to);
      const request = await this.$http.$get(
        `http://localhost:3002/api/v1/search?searchTerm=${to.query.searchTerm}`
      );

      this.categories = request.categories;
      this.articles = request.articles;
    }
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
