<template>
  <div class="projects-main">
    <h2>Projects</h2>
    <p class="projects-description">
      Take a look to what I’ve done. From simple brochure websites and landing
      pages to fully functional web apps.
    </p>

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
};
</script>

<style scoped>
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
  .projects-main {
    margin-top: 10rem;
  }

  .projects-main .projects-description {
    max-width: 50rem;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .projects-main h2 {
    margin-left: 2rem;
    text-align: left;
  }

  .projects-main .projects-description {
    margin: 0;
    text-align: left;
  }
}
</style>
