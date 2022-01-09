<template>
  <div class="blog-main">
    <div class="description-container">
      <div class="description-header">
        <h2>Blog</h2>
        <p>Here are some blogposts about my developer journey.</p>
      </div>

      <nuxt-link v-if="$auth.loggedIn" to="/blog/add-post/">
        <button class="btn cta">Add Post</button>
      </nuxt-link>
    </div>

    <section class="posts-container">
      <PostCard v-if="posts.length" />
      <NotFound v-else />
    </section>
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
  computed: {
    posts() {
      return this.$store.getters["blog/getPosts"];
    },
  },
};
</script>

<style scoped>
.blog-main {
  margin-top: 4rem;
}

.description-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.description-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.blog-main h2 {
  font-weight: 300;
  text-align: center;
  color: var(--accent-color);
}

.blog-main p {
  text-align: center;
  padding: 2rem;
  color: var(--primary-color);
}

.posts-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 4rem;
}

@media (min-width: 768px) {
  .blog-main {
    margin-top: 10rem;
  }

  .description-container {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
  }

  .description-header {
    align-items: flex-start;
  }

  .blog-main p {
    max-width: 50rem;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .blog-main h2 {
    margin-left: 2rem;
    text-align: left;
  }

  .blog-main p {
    margin: 0;
    text-align: left;
  }
}
</style>
