<template>
  <section class="w-full bg-[#009dd7] h-56">
    <div
      class="max-w-7xl mx-auto  h-full flex flex-col justify-center space-y-3 "
    >
      <div class="flex flex-row w-full">
        <h1 class="text-white text-2xl font-bold">
          Comment pouvons nous vous aidez ?
        </h1>
        <div
          class="ml-auto flex flex-row space-x-2 text-white font-bold items-center "
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
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <span>Allez sur Affiche2.O</span>
        </div>
      </div>
      <form @submit.prevent="handleSubmit" class="flex flex-row space-x-2 items-center  bg-white py-3 rounded ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
        class="outline-none border-none"
          type="text"
          required
          v-model="search.term"
          placeholder="Recherchez des réponses"
        />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      search: {
        term: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("search-listerner", this.search.term);
    }
  }
};
</script>

<style scoped></style>
