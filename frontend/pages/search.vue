<template>
  <div>
    <section
      class="max-w-7xl py-8  space-y-3 mx-auto bg-white border shadow-sm"
    >
      <div class="mx-14">
        <span>ICON-SEARCHIE</span>
        <div>
          <h1>Nom de la catégorie</h1>
          <span>12 articles dans cette catégorie</span>
        </div>
      </div>

      <div class="space-y-3">
        <!-- <div
          :key="index"
          v-for="(category, index) of categories"
          class="space-y-2 py-3  flex flex-col justify-center mx-14 bg-blue-400"
        >
          <h1>{{ category.categoryName }}</h1>
          <span
            >{{ category.totalOfArticle }} articles dans cette catégorie</span
          >
        </div> -->

        <div>
          <h1>categories</h1>

          <NuxtLink
            :to="{ name: 'categories-id', params: { id: category.id } }"
            :key="index"
            v-for="(category, index) of categories"
            class="space-y-2 py-3  flex flex-col justify-center mx-14 bg-blue-400"
          >
            <h1>{{ category.title }}</h1>
          </NuxtLink>
        </div>

        <div>
          <h1>articles</h1>

          <NuxtLink
            :to="{ name: 'articles-id', params: { id: article.id } }"
            :key="index"
            v-for="(article, index) of articles"
            class="space-y-2 py-3  flex flex-col justify-center mx-14 bg-blue-400"
          >
            <h1>{{ article.title }}</h1>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
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

    const request = await $http.$get(
      `http://localhost:3002/api/v1/search?searchTerm=${searchTerm}`
    );

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
