<template>
  <section id="category-detail-page">
    <Breadcumb />
    <div class="md:max-w-[1000px] md:mx-auto mx-4 ">
      <div class="text-center" v-if="articles.length === 0">
        <Loader />
      </div>

      <div v-else class=" bg-white border shadow-sm space-y-3 p-8">
        <!-- <h1>{{ this.id }}</h1> -->
        <!-- <h1 class="text-2xl font-bold">{{ this.currentCategory.id }}</h1> -->
        <!-- <h1 class="text-2xl font-bold">{{ this.currentCategory.title }}</h1> -->
        <!-- <h1>Articles</h1> -->

        <div class="space-x-6 p-10  flex flex-row items-center   bg-white ">
          <img
            src="https://img.icons8.com/dusk/50/000000/knowledge-sharing.png"
          />

          <div class="flex flex-col justify-center space-y-2">
            <h1 class="text-2xl font-bold">
              {{ this.currentCategory.categoryName | capitalize }}
            </h1>
            <span class="text-gray-400"
              >{{ this.currentCategory.totalOfArticle }} articles dans cette
              catégorie</span
            >
          </div>
        </div>

        <NuxtLink
          :to="{ name: 'articles-id', params: { id: article.id } }"
          :key="index"
          v-for="(article, index) of articles"
          class="space-y-2 p-8  flex flex-col justify-center  bg-[#f1f7f9]"
        >
          <h1 class="text-2xl font-bold">{{ article.title | capitalize }}</h1>
          <span class="text-gray-400">
            {{ article.body | capitalize }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
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

    const currentCategory = await $http.$get(`/categories/${id}`);

    const getArticles = await $http.$get(`/articles?categoryId=${id}`);

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
