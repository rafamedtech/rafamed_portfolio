<template>
  <article class="post-main" v-if="post">
    <button @click="$router.go(-1)" class="back-btn neumorphism">
      Go back
    </button>

    <div class="post-container">
      <img
        class="animated-bg neumorphism"
        :src="post.better_featured_image.source_url"
        :alt="post.title.rendered"
      />
      <h1>{{ post.title.rendered }}</h1>
      <span> {{ post.date.substring(0, 10) }}</span>
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
      title: `Rafamed.Dev | Blog - ${this.post.title.rendered}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.excerpt.rendered,
        },
      ],
    };
  },
  computed: {
    post() {
      return this.$store.getters["blog/getSinglePost"](this.$route.params.slug);
    },
    markdown() {
      return marked(this.post.content.rendered, {
        highlight(md) {
          return highlight.highlightAuto(md).value;
        },
      });
    },
  },
};
</script>

<style>
.post-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.post-container img {
  padding: 0;
}

h1 {
  font-size: 4rem;
  color: var(--accent-color);
}

h2 {
  color: var(--primary-color);
}

.post-body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.post-container .post-body img {
  width: 100%;
  height: 100%;
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
  background-color: #454750;
}

aside {
  color: var(--accent-color);
  font-size: 1.3rem;
  background-color: floralwhite;
  padding: 2rem;
  border-radius: 1rem;
  /* width: fit-content; */
  margin-top: 1rem;
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
  background: transparent;
  border: none;
  margin-bottom: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
}

@media (min-width: 768px) {
  .post-main {
    margin-top: 10rem;
  }
  .post-container {
    max-width: 90%;
  }

  .post-container img {
    height: 50rem;
    object-fit: cover;
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
