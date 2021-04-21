<template>
  <div>
    <div>
      <h1>{{ this.id }}</h1>
      <h1>{{ this.currentArticle.id }}</h1>
      <h1>{{ this.currentArticle.title }}</h1>
      <h1>{{ this.currentArticle.body }}</h1>
    </div>
  </div>
</template>

<script>
import searchMixins from "@/mixins";

export default {
  //mixins: [searchMixins],

  data() {
    return {
      currentArticle: {}
    };
  },

  async asyncData({ params, $http }) {
    const id = params.id;

    const currentArticle = await $http.$get(
      `http://localhost:3002/api/v1/articles/${id}`
    );

    return { id, currentArticle };
  }

  // methods: {
  //   makeSearch(e) {
  //     console.log(e);
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
