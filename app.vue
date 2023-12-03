<script setup lang="ts">
const appConfig = useAppConfig();

useServerSeoMeta({
  twitterSite: "@sherloach",
});
useServerHead({
  title: appConfig.title,
  meta: [{ name: "description", content: "My amazing site." }],
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<template>
  <NuxtPage />
</template>
