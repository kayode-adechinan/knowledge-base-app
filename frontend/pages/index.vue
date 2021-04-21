<template>
  <section class="bg-[#f1f7f9]">
    <div class="max-w-7xl mx-auto ">
      <div class="space-y-3">
        <NuxtLink
          :to="{ name: 'categories-id', params: { id: category.categoryId } }"
          :key="index"
          v-for="(category, index) of categories"
          class="space-x-6 p-10  flex flex-row items-center   bg-white border shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>

          <div class="flex flex-col justify-center space-y-2">
            <h1 class="text-2xl font-bold">{{ category.categoryName }}</h1>
            <span class="text-gray-400"
              >{{ category.totalOfArticle }} articles dans cette catégorie</span
            >
          </div>
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
      categories: []
    };
  },

  async asyncData({ $http }) {
    const request = await $http.$get(`http://localhost:3002/api/v1/categories`);
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
