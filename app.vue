<template>
  <main>
    Hello
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
  .article {
    &__section {
    }
  }
</style>
