<template>
  <section
    class="space-y-2 py-3  flex flex-col justify-center mx-14 bg-blue-400"
  >
    <h1>{{categoryName}}</h1>
    <span>{{totalOfArticle}} articles dans cette catégorie</span>
  </section>
</template>

<script>
export default {
  props: ["categoryName", "totalOfArticle", "icon"]
};
</script>

<style scoped></style>
