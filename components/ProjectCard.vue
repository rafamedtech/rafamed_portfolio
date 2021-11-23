<template>
  <div>
    <article class="project neumorphism">
      <img src="https://i.imgur.com/oYKLadh.jpg" alt="Render" />
      <h3>Render</h3>
      <p>This is a one-pager responsive brochure website.</p>
      <div class="project-btns">
        <a
          class="btn"
          href="https://github.com/rafamedtech/Render"
          target="_blank"
          >Source</a
        >

        <a
          class="btn cta"
          href="https://www.somosrender.com.mx/"
          target="_blank"
          >Live 🚀</a
        >
      </div>
      <div class="tags-container">
        <span class="tag">HTML</span><span class="tag">TailwindCSS</span>
        <span class="tag">Javascript</span>
      </div>
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.project p {
  text-align: center;
  padding: 2rem;
  color: var(--primary-color);
}

.project {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 35rem;
  margin: 0 auto;
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
  background-color: var(--primary-color);

  color: #e5e5e5;
  border: 1px solid transparent;
}

.project-btns .btn.cta {
  background-color: var(--accent-color);
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
