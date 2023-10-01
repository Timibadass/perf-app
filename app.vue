<template>
  <main>
    <h1 class="article__heading">Hello</h1>
      <section class="article__section">
        <ArticleCard
          v-for="(article, index) in articles"
          :key="index"
          :article="article"
        />
      </section>
  </main>
</template>
<script setup>
import ArticleCard from "@/components/ArticleCard.vue";
import { articles } from "@/utils/articles.json";
</script>
<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
  .article {
    &__heading {
      font-weight: 700;
    }
    &__section {
      font-family: "Open Sans", sans-serif;
      @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
      }
    }
  }
</style>
