<template>
  <div>
    <article class="post neumorphism">
      <img
        class="animated-bg neumorphism"
        :src="post.better_featured_image.source_url"
        :alt="post.title.rendered"
      />

      <article>
        <h2>{{ post.title.rendered }}</h2>
        <span>{{ post.date.substring(0, 10) }}</span>

        <span v-html="post.excerpt.rendered"></span>

        <nuxt-link class="btn cta" :to="{ path: `blog/${post.slug}` }"
          >Read more</nuxt-link
        >
      </article>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
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
  padding: 0;
}

.post h2 {
  color: var(--primary-color);
  font-size: 3rem;
}

.post span {
  color: lightgreen;
}

.post p {
  color: var(--third-color);
  font-size: 1.5rem;
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
    height: 25rem;
    object-fit: cover;
  }

  .post article {
    align-items: revert;
    text-align: revert;
    width: 50%;
  }
}

@media (min-width: 1024px) {
  .post {
    width: 70%;
  }
}
</style>
