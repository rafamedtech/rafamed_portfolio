<template>
  <div>
    <h1>Under Construction...</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Rafamed.Dev | Blog",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Blog",
        },
      ],
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  height: calc(100vh - 16rem);
}

h1 {
  color: var(--accent-color);
}
</style>
