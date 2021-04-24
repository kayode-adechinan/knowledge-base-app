<template>
  <section id="category-detail-page">
    <Breadcumb />
    <div class="md:max-w-[1000px] md:mx-auto mx-4 ">
      <div class="text-center" v-if="articles.length === 0">
        <Loader />
      </div>

      <div v-else class=" bg-white border shadow-sm space-y-3 p-8">
        <div class="space-x-6 p-10  flex flex-row items-center   bg-white ">
          <img :src="this.currentCategory.categoryIcon" />

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
            Mis à jour le {{article.updated_at}}
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
};
</script>

<style></style>
