<template>
  <div class="add-project-container neumorphism">
    <h2 class="headings">Add a new project</h2>
    <form @submit.prevent="createProject">
      <label for="name">Project Name</label>
      <input v-model="title" type="text" id="name" />

      <label for="description">Project Description</label>
      <input
        v-model="description"
        type="text"
        id="description"
        name="description"
      />

      <label for="image">Featured Image</label>
      <input
        type="file"
        id="image"
        @change="onFileSelected"
        name="featured_image"
      />

      <label for="source_link">Source Link</label>
      <input v-model="source_link" type="url" id="source_link" />

      <label for="demo_link">Demo Link</label>
      <input type="url" id="demo_link" v-model="demo_link" />

      <label for="tags">Tags</label>
      <input type="text" id="tags" v-model="tags" />

      <input class="btn cta" type="submit" value="Create Project" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      source_link: "",
      demo_link: "",
      featured_image: null,
      tags: "",
    };
  },
  methods: {
    onFileSelected(event) {
      this.featured_image = event.target.files[0];
    },

    createProject(event) {
      // send the form data to rest api
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("source_link", this.source_link);
      formData.append("demo_link", this.demo_link);
      formData.append(
        "featured_image",
        this.featured_image,
        this.featured_image.name
      );
      formData.append("tags", this.tags);
      console.log(formData);

      this.$store.dispatch("projects/createProject", formData);

      this.$router.push("/projects");
    },
  },
};
</script>

<style scoped>
.add-project-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: fit-content;
  margin: 12rem auto 0;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* align-items: center; */
  gap: 1.5rem;
}

input.btn {
  margin: 0 auto;
}
</style>
