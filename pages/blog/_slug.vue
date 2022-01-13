<template>
  <div class="post-main" v-if="post">
    <nuxt-link class="back-btn" to="/blog">Go back</nuxt-link>
    <div class="post-container">
      <!-- <img
        :src="`http://localhost:1337${post.attributes.coverPhoto}`"
        :alt="post.attributes.title"
      /> -->
      <h1>{{ post.attributes.title }}</h1>
      <!-- <span>{{ post.attributes.publishedAt.substring(0, 10) }}</span> -->
      <article class="post-body" v-html="markdown"></article>
    </div>
  </div>
</template>

<script>
import marked from "marked";
export default {
  head() {
    return {
      title: `Rafamed.Dev | Blog - ${this.post.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.excerpt,
        },
      ],
    };
  },
  computed: {
    post() {
      return this.$store.getters["blog/getSinglePost"](this.$route.params.slug);
    },
    markdown() {
      return marked("# this is an h1");
    },
  },
};
</script>

<style>
.post-main {
  margin-top: 12rem;
}
.post-container {
  max-width: 60%;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h1 {
  font-size: 4rem;
  color: var(--primary-color);
}

.post-body p {
  color: var(--third-color);
}

.post-body img {
  width: 30rem;
}

/* .post-body code {
  background-color: var(--primary-color);
  color: var(--accent-color);
  padding: 1rem;
} */

p {
  font-size: 1.8rem;
}

.back-btn {
  font-size: 1.5rem;
  padding: 2rem;
  color: var(--accent-color);
}
</style>
