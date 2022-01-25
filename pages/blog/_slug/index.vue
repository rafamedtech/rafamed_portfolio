<template>
  <article class="post-main" v-if="post">
    <nuxt-link class="back-btn" to="/blog">Go back</nuxt-link>
    <div class="post-container">
      <img
        class="animated-bg"
        :src="post.attributes.coverPhoto.data.attributes.url"
        :alt="post.attributes.title"
      />
      <h1>{{ post.attributes.title }}</h1>
      <span> {{ post.attributes.publishedAt.substring(0, 10) }}</span>
      <article class="post-body" v-html="markdown"></article>
    </div>
  </article>
</template>

<script>
import marked from "marked";
import highlight from "highlight.js";
import "highlight.js/styles/github-dark.css";

export default {
  head() {
    return {
      title: `Rafamed.Dev | Blog - ${this.post.attributes.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.attributes.excerpt,
        },
      ],
    };
  },
  computed: {
    post() {
      return this.$store.getters["blog/getSinglePost"](this.$route.params.slug);
    },
    markdown() {
      return marked(this.post.attributes.content, {
        highlight(md) {
          return highlight.highlightAuto(md).value;
        },
      });
    },
  },
};
</script>

<style>
.post-main {
  margin-top: 12rem;
}
.post-container {
  max-width: 100%;
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

.post-body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

pre {
  background-color: #454750;
  padding: 32px 16px;
  font-size: 1.5rem;
  font-weight: lighter;
  color: #e5e5e5;
  overflow-x: scroll;
}
code {
  font-family: consolas;
}

.post-body p {
  color: var(--third-color);
}

.post-body ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-body a {
  color: var(--accent-color);
  font-size: 1.8rem;
}

.post-body img {
  width: 30rem;
}

.back-btn {
  font-size: 1.5rem;
  padding: 2rem;
  color: var(--accent-color);
}

@media (min-width: 768px) {
  .post-container {
    max-width: 90%;
  }

  pre {
    padding: 34px 16px 32px 32px;
    overflow-x: visible;
  }
}

@media (min-width: 1024px) {
  .post-container {
    max-width: 60%;
  }
}
</style>
