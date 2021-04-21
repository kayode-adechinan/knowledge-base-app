<template>
  <div class="bg-[#f1f7f9] w-full min-h-screen">
    <Header />
    <SearchBox @search-listerner="makeSearch" />

    <Nuxt />
  </div>
</template>

<script>
import searchMixins from "@/mixins";

export default {
  mixins: [searchMixins],

  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: none;
  font-family: "Inter", sans-serif;
  list-style: none;
  text-decoration: none;
  outline: none;
}

html {
  scroll-behavior: smooth;
  font-size: 100%;
}

body {
  line-height: 1.3;
}
</style>
