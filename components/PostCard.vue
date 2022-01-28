<template>
  <div>
    <article class="post neumorphism">
      <img
        class="animated-bg"
        :src="post.attributes.coverPhoto.data.attributes.url"
        :alt="post.attributes.title"
      />

      <article>
        <h2>{{ post.attributes.title }}</h2>
        <span>{{ post.attributes.publishedAt.substring(0, 10) }}</span>
        <p>
          {{ post.attributes.excerpt }}
        </p>
        <nuxt-link class="btn cta" :to="`blog/${post.attributes.slug}`"
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
}

.post h2 {
  color: lightgreen;
}

.post span {
  color: var(--primary-color);
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
