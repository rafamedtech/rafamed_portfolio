<template>
  <article class="project neumorphism">
    <button
      v-if="$auth.loggedIn"
      @click="deleteProject(project.id)"
      class="delete-icon"
    >
      X
    </button>

    <img
      :src="`http://localhost:8000${project.featured_image}`"
      :alt="project.title"
      class="animated-bg"
    />

    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <div class="project-btns">
      <a class="btn" :href="project.source_link" target="_blank">Source</a>

      <a class="btn cta" :href="project.demo_link" target="_blank">Live 🚀</a>
    </div>
    <div class="tags-container">
      <span v-for="(tag, index) in project.tags" :key="index" class="tag">{{
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
  methods: {
    deleteProject(id) {
      this.$store.dispatch("projects/deleteProject", id);
    },
  },
};
</script>

<style>
.delete-icon {
  position: absolute;
  top: -1rem;
  right: -1rem;
  cursor: pointer;
  color: var(--secondary-color);
  font-size: 1.5rem;
  background: var(--accent-color);
  border: 1px solid transparent;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  text-align: center;
  padding: 0;
  transition: 0.3s;
}

.delete-icon:hover {
  background: var(--secondary-color);
  color: var(--accent-color);
  border: 1px solid var(--primary-color);
}
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 35rem;
  width: 35rem;
  /* margin: 0 auto; */
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
