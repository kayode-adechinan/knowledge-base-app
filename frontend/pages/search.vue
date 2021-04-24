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
          <div class="text-gray-400 line-clamp-3" v-html="article.body"></div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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

<style></style>
