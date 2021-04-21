<template>
  <div>
    <div>
      <h1>{{ this.id }}</h1>
      <h1>{{ this.currentCategory.id }}</h1>
      <h1>{{ this.currentCategory.title }}</h1>
      <h1>Articles</h1>

      <NuxtLink
        :to="{ name: 'articles-id', params: { id: article.id } }"
        :key="index"
        v-for="(article, index) of articles"
        class="space-y-2 py-3  flex flex-col justify-center mx-14 bg-blue-400"
      >
        <h1>{{ article.title }}</h1>
        <span>
          {{ article.body }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import searchMixins from "@/mixins";

export default {
 // mixins: [searchMixins],

  data() {
    return {
      currentCategory: {},
      articles: []
    };
  },

  async asyncData({ params, $http }) {
    const id = params.id;

    const currentCategory = await $http.$get(
      `http://localhost:3002/api/v1/categories/${id}`
    );

    const getArticles = await $http.$get(
      `http://localhost:3002/api/v1/articles?categoryId=${id}`
    );

    const articles = getArticles.rows;

    return { id, currentCategory, articles };
  }

  // methods: {
  //   makeSearch(e) {
  //     console.log(e);
  //   }
  // }

  // async fetch() {
  //   let getCurrentCategoryRequestResponse = await fetch(
  //     `http://localhost:3002/api/v1/categories/${this.id}`
  //   ).then(res => res.json());

  //   this.currentCategory = getCurrentCategoryRequestResponse;
  // }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
