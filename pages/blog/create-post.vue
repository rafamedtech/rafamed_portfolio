<template>
  <div class="">
    <div class="neumorphism add-project-container">
      <h2 class="headings">Add a new post</h2>
      <form @submit.prevent="createProject">
        <div class="first-row">
          <div class="input-wrapper">
            <label for="title">Title</label>
            <input v-model="title" type="text" id="title" required />
          </div>

          <div class="input-wrapper image">
            <label for="image">Cover Photo</label>
            <input @change="onFileSelected" type="file" id="image" required />
          </div>
          <figure>
            <img :src="postCoverPhoto" :alt="title" />
          </figure>
        </div>

        <div class="second-row">
          <div class="input-wrapper">
            <label for="excerpt">Excerpt</label>
            <input v-model="excerpt" type="text" id="excerpt" required />
          </div>

          <div class="input-wrapper">
            <label for="slug">Slug</label>
            <input v-model="slug" type="text" id="slug" required />
          </div>
        </div>

        <div class="tags-wrapper">
          <div class="input-wrapper">
            <label for="tags">Tags</label>
            <input
              @input="splitTags"
              type="text"
              id="tags"
              v-model="tags"
              required
            />
          </div>
          <div class="tags-container">
            <span v-for="(tag, index) in tags" :key="index" class="tag">{{
              tag
            }}</span>
          </div>
        </div>

        <label for="excerpt">Body</label>
        <textarea v-model="body" type="text" id="excerpt" required />

        <input class="btn cta" type="submit" value="Create Post" />
      </form>
    </div>
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
      body: "",
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
      formData.append("body", this.body);
      formData.append("cover_photo", this.cover_photo, this.cover_photo.name);
      formData.append("tags", this.tags);
      console.log(formData);

      this.$store.dispatch("blog/createPost", formData);

      this.$router.push("/blog");
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
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30%;
}

.first-row img {
  height: 15rem;
  border-radius: 1rem;
}

.first-row {
  width: 100%;
  height: 15rem;
  display: flex;
  gap: 2rem;
}

.first-row .input-wrapper {
  width: 50%;
}

.first-row .input-wrapper.image {
  width: fit-content;
}

.second-row {
  width: 100%;
  display: flex;
  gap: 2rem;
}

.second-row .input-wrapper {
  width: 30%;
}

.tags-wrapper {
  display: flex;
  justify-content: space-between;
}

.tags-container {
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin-top: 2rem;
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

  height: 100%;

  max-width: 1440px;
  margin: 12rem auto 0;
  gap: 3rem;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}

input.btn {
  margin: 0 auto;
}

textarea {
  height: 30rem;
}
</style>
