<template>
  <div>
    <div v-for="item in notionData" :key="item.id">
      {{ item.url }}
    </div>
  </div>
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
    console.log(response);
    this.notionData = response.results;
  },
};
</script>
