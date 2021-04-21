<template>
  <div id="main-page" class="md:max-w-[1000px] md:mx-auto mx-4 mt-16">
    <div class="text-center" v-if="categories.length === 0" >
      <Loader />
    </div>

    <div v-else class="space-y-5">
      <NuxtLink
        :to="{ name: 'categories-id', params: { id: category.categoryId } }"
        :key="index"
        v-for="(category, index) of categories"
        class="space-x-6 p-10  flex flex-row items-center   bg-white border shadow-sm"
      >
        <img v-if="category.categoryId === '1'" src="/icon.png" />

        <img v-if="category.categoryId === '2'" src="/icon2.png" />

        <img v-if="category.categoryId === '3'" src="/icon3.png" />

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
import searchMixins from "@/mixins";

export default {
  // mixins: [searchMixins],

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

  // async fetch() {
  //   let requestResponse = await fetch(
  //     "http://localhost:3002/api/v1/categories"
  //   ).then(res => res.json());

  //   this.categories = requestResponse.data;
  // }

  // methods: {
  //   async makeSearch(e) {

  //     this.$router.push({ path: "search", query: { searchTerm: e } });
  //   }
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
