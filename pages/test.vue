<template>
  <div>{{ notionData }}</div>
</template>

<script>
export default {
  data() {
    return {
      notionData: [],
    };
  },
  async mounted() {
    const response = await fetch("/.netlify/functions/notion").then((res) =>
      res.json()
    );

    this.notionData = response;
  },
};
</script>
