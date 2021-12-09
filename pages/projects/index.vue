<template>
  <div class="projects-main">
    <div class="description-container">
      <div class="description-header">
        <h2>Projects</h2>
        <p>
          Take a look to what I’ve done. From simple brochure websites and
          landing pages to fully functional web apps.
        </p>
      </div>
      <nuxt-link v-if="isAuth" to="/projects/add-project/">
        <button class="btn cta">Add Project</button>
      </nuxt-link>
    </div>

    <ProjectCard class="projects-container" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Rafamed.Dev | Projects",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Projects",
        },
      ],
    };
  },
  data() {
    return {
      isAuth: true,
    };
  },
};
</script>

<style scoped>
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
.projects-main {
  margin-top: 4rem;
}

.projects-main h2 {
  font-weight: 300;
  text-align: center;
  color: var(--accent-color);
}

.projects-main p {
  text-align: center;
  padding: 2rem;
  color: var(--primary-color);
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
  justify-content: space-around;
}

@media (min-width: 768px) {
  .description-container {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
  }

  .description-header {
    align-items: flex-start;
  }

  .projects-main {
    margin-top: 10rem;
  }

  .projects-main h2 {
    text-align: left;
  }

  .projects-main p {
    text-align: left;
    padding: 0;
    max-width: 50rem;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .projects-main h2 {
    text-align: left;
    padding: 0 2rem;
  }

  .projects-main p {
    padding: 2rem;
    margin: 0;
    text-align: left;
  }
}
</style>
