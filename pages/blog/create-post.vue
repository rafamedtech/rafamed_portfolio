<template>
  <div class="neumorphism add-project-container">
    <h2 class="headings">Add a new post</h2>
    <form @submit.prevent="createProject">
      <section>
        <article class="body-container">
          <label for="body">Body</label>
          <client-only>
            <Editor />
          </client-only>
        </article>
        <aside class="fields-container">
          <label for="title">Title</label>
          <input v-model="title" type="text" id="title" required />

          <label for="image">Cover Photo</label>
          <input
            v-if="!cover_photo"
            @change="onFileSelected"
            type="file"
            id="image"
            required
            class="cover-photo"
          />

          <figure class="cover-photo" v-else>
            <img :src="postCoverPhoto" :alt="title" />
          </figure>

          <label for="excerpt">Excerpt</label>
          <input v-model="excerpt" type="text" id="excerpt" required />

          <label for="slug">Slug</label>
          <input v-model="slug" type="text" id="slug" required />

          <label for="tags">Tags</label>
          <input
            @input="splitTags"
            type="text"
            id="tags"
            v-model="tags"
            required
          />

          <article class="tags-container">
            <span v-for="(tag, index) in tags" :key="index" class="tag">{{
              tag
            }}</span>
          </article>
        </aside>
      </section>

      <input class="btn cta" type="submit" value="Create Post" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      cover_photo: null,
      excerpt: "",
      slug: "",
      tags: "",
      info: "",
    };
  },
  methods: {
    onFileSelected(event) {
      this.cover_photo = event.target.files[0];
      const fileName = this.cover_photo.name;
      this.$store.commit("blog/setFileName", fileName);
      this.$store.commit(
        "blog/createFileURL",
        URL.createObjectURL(this.cover_photo)
      );
    },

    splitTags() {
      this.tags = this.tags.split(",");
    },

    createPost(event) {
      // send the form data to rest api
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("excerpt", this.excerpt);
      formData.append("slug", this.slug);
      formData.append("contentHolder", this.contentHolder);
      formData.append("cover_photo", this.cover_photo, this.cover_photo.name);
      formData.append("tags", this.tags);
      console.log(formData);

      // this.$store.dispatch("blog/createPost", formData);

      // this.$router.push("/blog");
    },
  },
  computed: {
    postCoverPhoto() {
      return this.$store.getters["blog/getPostFileURL"];
    },
  },
};
</script>

<style scoped>
.cover-photo {
  height: 15rem;
}
.cover-photo img {
  height: 100%;
  border-radius: 1rem;
}
section {
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 2rem;
}

.body-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  height: 80%;
}
.fields-container {
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
}
.tags-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* width: 50%; */
  margin-top: 2rem;
  gap: 1rem;
}

.tags-container .tag {
  padding: 1rem;
  border: 1px solid var(--primary-color);
  border-radius: 1.5rem;
  color: var(--third-color);
  font-size: 1rem;
  text-transform: uppercase;
  height: fit-content;
  margin: auto;
}

.add-project-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
  max-width: 1440px;
  margin: 12rem auto 0;
  padding-top: 8rem;
  gap: 3rem;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  height: 100%;
}

input.btn {
  margin: 0 auto;
}

.post-body {
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;
  color: var(--secondary-color);
}
</style>
