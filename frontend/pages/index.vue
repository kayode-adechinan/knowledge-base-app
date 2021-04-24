<template>
  <div id="main-page" class="md:max-w-[1000px] md:mx-auto mx-4 mt-16">
    <div class="text-center" v-if="categories.length === 0">
      <Loader />
    </div>

    <div v-else class="space-y-5">
      <NuxtLink
        :to="{ name: 'categories-id', params: { id: category.categoryId } }"
        :key="index"
        v-for="(category, index) of categories"
        class="space-x-6 p-10  flex flex-row items-center   bg-white border shadow-sm"
      >
        <img :src="category.categoryIcon" alt="" />

        <div class="flex flex-col justify-center space-y-2">
          <h1 class="text-2xl font-bold">
            {{ category.categoryName | capitalize }}
          </h1>
          <span class="text-gray-400"
            >{{ category.totalOfArticle }} articles dans cette catégorie</span
          >
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: []
    };
  },

  async asyncData({ $http }) {
    const request = await $http.$get(`/categories`);
    const categories = request.data;
    return { categories };
  }
};
</script>

<style></style>
