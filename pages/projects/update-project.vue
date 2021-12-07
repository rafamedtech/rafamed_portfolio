<template>
  <div>
    <div class="add-project-container neumorphism">
      <h2 class="headings">Update project</h2>
      <form
        @submit.prevent="updateProject"
        method="post"
        enctype="multipart/form-data"
      >
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
};
</script>

<style scoped></style>
