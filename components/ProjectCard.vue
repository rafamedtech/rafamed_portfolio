<template>
  <article class="project neumorphism">
    <img
      :src="project.better_featured_image.media_details.sizes.medium.source_url"
      :alt="project.title.rendered"
      class="animated-bg"
    />

    <h3>{{ project.title.rendered }}</h3>
    <span v-html="project.excerpt.rendered"></span>
    <div class="project-btns">
      <nuxt-link class="btn" :to="{ path: `/projects/${project.slug}` }"
        >More info</nuxt-link
      >

      <a
        class="btn cta"
        :href="project.acf.live_link"
        target="_blank"
        rel="nofollow noopener noreferrer"
        >Live 🚀</a
      >
    </div>
    <div class="tags-container">
      <span v-for="(tag, index) in project.acf.tags" :key="index" class="tag">{{
        tag.name
      }}</span>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 35rem;
  width: 35rem;
  position: relative;
  transition: 0.3s;
}

.project h3 {
  color: var(--primary-color);
}

.project p {
  text-align: center;
  padding: 2rem;
  color: var(--third-color);
  font-size: 1.5rem;
}

.project-btns {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.project-btns .btn {
  width: 10rem;
  margin: 0 auto;
  font-size: 1.6rem;
  text-align: center;
  background-color: lightgreen;
  color: var(--secondary-color);
  border: 1px solid transparent;
}

.project-btns .btn.cta {
  background-color: var(--accent-color);
  color: #e5e5e5;
}

.project-btns .btn:hover,
.project-btns .btn.cta:hover {
  background-color: transparent;
  color: var(--accent-color);
  border: 1px solid var(--primary-color);
}

.tags-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 2rem;
}

.tags-container .tag {
  padding: 1rem;
  border: 1px solid var(--primary-color);
  border-radius: 1.5rem;
  color: var(--third-color);
  font-size: 1rem;
}
</style>
