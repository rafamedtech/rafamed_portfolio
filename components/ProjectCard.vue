<template>
  <article class="project neumorphism">
    <img
      :src="project.attributes.thumbnail.data[0].attributes.url"
      :alt="project.attributes.title"
      class="animated-bg"
    />

    <h3>{{ project.attributes.title }}</h3>
    <p>{{ project.attributes.description }}</p>
    <div class="project-btns">
      <a
        class="btn"
        :href="project.attributes.sourceLink"
        target="_blank"
        rel="nofollow noopener noreferrer"
        >Source</a
      >

      <a
        class="btn cta"
        :href="project.attributes.demoLink"
        target="_blank"
        rel="nofollow noopener noreferrer"
        >Live 🚀</a
      >
    </div>
    <div class="tags-container">
      <span
        v-for="(tag, index) in project.attributes.tags['data']"
        :key="index"
        class="tag"
        >{{ tag.attributes.name }}</span
      >
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
  min-width: 35rem;
  width: 35rem;
  position: relative;
  transition: 0.3s;
}

.project p {
  text-align: center;
  padding: 2rem;
  color: var(--primary-color);
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
