<template>
  <section id="article-detail-page">
    <Breadcumb />

    <div class="md:max-w-[1000px] md:mx-auto mx-4 ">
      <div class="text-center" v-if="currentArticle === {}">
        <Loader />
      </div>

      <div v-else class="bg-white border shadow-sm space-y-3 md:p-14 p-4">
        <!-- <h1>{{ this.id }}</h1>
        <h1>{{ this.currentArticle.id }}</h1> -->
        <h1 class="text-3xl font-bold">
          {{ this.currentArticle.title | capitalize }}
        </h1>
        <div class="text-gray-400 text-justify">
          {{ this.currentArticle.body | capitalize }}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          nisi animi nulla natus in quaerat atque sit, exercitationem impedit
          totam magnam nam! Adipisci tempora aliquid sed corporis amet dolor
          laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae nisi animi nulla natus in quaerat atque sit, exercitationem
          impedit totam magnam nam! Adipisci tempora aliquid sed corporis amet
          dolor laborum? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Recusandae nisi animi nulla natus in quaerat atque sit,
          exercitationem impedit totam magnam nam! Adipisci tempora aliquid sed
          corporis amet dolor laborum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Recusandae nisi animi nulla natus in quaerat atque
          sit, exercitationem impedit totam magnam nam! Adipisci tempora aliquid
          sed corporis amet dolor laborum? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Recusandae nisi animi nulla natus in
          quaerat atque sit, exercitationem impedit totam magnam nam! Adipisci
          tempora aliquid sed corporis amet dolor laborum? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Recusandae nisi animi nulla natus
          in quaerat atque sit, exercitationem impedit totam magnam nam!
          Adipisci tempora aliquid sed corporis amet dolor laborum? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Recusandae nisi animi
          nulla natus in quaerat atque sit, exercitationem impedit totam magnam
          nam! Adipisci tempora aliquid sed corporis amet dolor laborum? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi
          animi nulla natus in quaerat atque sit, exercitationem impedit totam
          magnam nam! Adipisci tempora aliquid sed corporis amet dolor laborum?

          <img
            class="md:h-36 my-8 w-full object-cover object-center"
            src="https://dummyimage.com/720x400"
            alt="blog"
          />

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          nisi animi nulla natus in quaerat atque sit, exercitationem impedit
          totam magnam nam! Adipisci tempora aliquid sed corporis amet dolor
          laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae nisi animi nulla natus in quaerat atque sit, exercitationem
          impedit totam magnam nam! Adipisci tempora aliquid sed corporis amet
          dolor laborum? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Recusandae nisi animi nulla natus in quaerat atque sit,
          exercitationem impedit totam magnam nam! Adipisci tempora aliquid sed
          corporis amet dolor laborum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Recusandae nisi animi nulla natus in quaerat atque
          sit, exercitationem impedit totam magnam nam! Adipisci tempora aliquid
          sed corporis amet dolor laborum?

          <div
            class="flex flex-row py-8 px-4 items-center space-x-4  bg-[#f1f7f9] mt-8"
          >
            <span class="font-bold text-[#6b8597]"
              >Ces informations vous ont-ils été utiles ?</span
            >

            <div class="flex flex-row space-x-2 items-center">
              <span class="text-2xl">😃</span>
              <span class="text-2xl">😐</span>
              <span class="text-2xl">😞</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

    const currentArticle = await $http.$get(`/articles/${id}`);

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
