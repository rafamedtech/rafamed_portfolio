<template>
  <article class="project-main">
    <button @click="$router.go(-1)" class="back-btn neumorphism">
      Go back
    </button>

    <div class="project-container">
      <img
        class="animated-bg neumorphism"
        :src="project.better_featured_image.source_url"
        :alt="project.title.rendered"
      />
      <h1>{{ project.title.rendered }}</h1>

      <div class="tags-container">
        <span
          v-for="(tag, index) in project.acf.tags"
          :key="index"
          class="tag"
          >{{ tag.name }}</span
        >
      </div>

      <article class="project-body" v-html="markdown"></article>
    </div>
  </article>
</template>

<script>
import marked from "marked";
import highlight from "highlight.js";
import "highlight.js/styles/github-dark.css";

export default {
  // head() {
  //   return {
  //     title: `Rafamed.Dev | Projects - ${this.project.title.rendered}`,
  //     meta: [
  //       {
  //         hid: "description",
  //         name: "description",
  //         content: this.project.excerpt.rendered,
  //       },
  //     ],
  //   };
  // },
  computed: {
    project() {
      return this.$store.getters["projects/getSingleProject"](
        this.$route.params.slug
      );
    },
    markdown() {
      return marked(this.project.content.rendered, {
        highlight(md) {
          return highlight.highlightAuto(md).value;
        },
      });
    },
  },
};
</script>

<style>
.project-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-container img {
  padding: 0;
}

h1 {
  font-size: 4rem;
  color: var(--accent-color);
}

h2 {
  color: var(--primary-color);
}

.project-body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-container .project-body img {
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

.project-body p {
  color: var(--third-color);
}

.project-body ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-body a {
  color: var(--accent-color);
  font-size: 1.8rem;
}

.project-body img {
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
}

@media (min-width: 768px) {
  .project-main {
    margin-top: 10rem;
  }
  .project-container {
    max-width: 90%;
  }

  .project-container img {
    height: 50rem;
    object-fit: cover;
  }

  pre {
    padding: 34px 16px 32px 32px;
    overflow-x: visible;
  }
}

@media (min-width: 1024px) {
  .project-container {
    max-width: 60%;
  }
}
</style>
