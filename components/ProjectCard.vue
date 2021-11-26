<template>
  <div>
    <article
      v-for="(project, index) in _projects"
      :key="index"
      class="project neumorphism"
    >
      <img :src="project.image" alt="Render" />
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <div class="project-btns">
        <a class="btn" :href="project.sourceLink" target="_blank">Source</a>

        <a class="btn cta" :href="project.liveLink" target="_blank">Live 🚀</a>
      </div>
      <div class="tags-container">
        <span v-for="(tag, index) in project.tags" :key="index" class="tag">{{
          tag
        }}</span>
      </div>
    </article>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["_projects"]),
  },
};
</script>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 35rem;
  width: 35rem;
  margin: 0 auto;
}

.project p {
  text-align: center;
  padding: 2rem;
  color: var(--primary-color);
}

.project img {
  width: 100%;
  border-radius: 1rem;
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

.project-btns .btn:hover,
.project-btns .btn.cta:hover {
  background-color: transparent;
  color: var(--accent-color);
  border: 1px solid var(--primary-color);
}

.project-btns .btn.cta {
  background-color: var(--accent-color);
  color: #e5e5e5;
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
