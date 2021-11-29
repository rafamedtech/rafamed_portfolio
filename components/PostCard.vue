<template>
  <article to="/" class="post neumorphism">
    <img src="https://i.imgur.com/WaeyNqt.png" alt="" />
    <article>
      <h2>Post Title 1</h2>
      <span>November 28, 2021</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        maiores.
      </p>
      <a class="btn cta" href="/post.html">Read more</a>
    </article>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;

  gap: 3rem;
  max-width: 80%;
  margin: 0 auto;
  transition: 0.3s;
  border: 2px solid transparent;
}

.post:hover {
  border: 2px solid yellow;
}

.post article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.post img {
  max-width: 100%;
  border-radius: 2rem;
}

.post h2 {
  color: lightgreen;
}

.post span {
  color: var(--primary-color);
}

.post p {
  color: var(--third-color);
}

.btn.cta {
  margin: 0;
}

@media (min-width: 768px) {
  .post {
    flex-direction: row;
    align-items: center;
  }
  .post img {
    max-width: 50%;
    height: 100%;
  }

  .post article {
    align-items: revert;
    text-align: revert;
  }
}

@media (min-width: 1024px) {
  .post {
    max-width: 70%;
  }
}
</style>
