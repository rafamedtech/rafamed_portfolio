<template>
  <div class="blog-main">
    <h2>Blog</h2>
    <p>Here are some blogposts about my developer journey.</p>
    <section class="posts-container">
      <PostCard />
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Rafamed.Dev | Blog",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Blog",
        },
      ],
    };
  },
};
</script>

<style scoped>
.blog-main {
  margin-top: 4rem;
}

.blog-main h2 {
  font-weight: 300;
  text-align: center;
  color: var(--accent-color);
}

.blog-main p {
  text-align: center;
  padding: 2rem;
  color: var(--primary-color);
}

.posts-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 4rem;
}

@media (min-width: 768px) {
  .blog-main {
    margin-top: 10rem;
  }

  .blog-main p {
    max-width: 50rem;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .blog-main h2 {
    margin-left: 2rem;
    text-align: left;
  }

  .blog-main p {
    margin: 0;
    text-align: left;
  }
}
</style>
