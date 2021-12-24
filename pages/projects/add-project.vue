<template>
  <div class="add-project-container">
    <div class="neumorphism">
      <h2 class="headings">Add a new project</h2>
      <form @submit.prevent="createProject">
        <label for="name">Project Name</label>
        <input v-model="title" type="text" id="name" required />

        <label for="description">Project Description</label>
        <input v-model="description" type="text" id="description" required />

        <label for="image">Featured Image</label>
        <input @change="onFileSelected" type="file" id="image" required />

        <label for="source_link">Source Link</label>
        <input v-model="source_link" type="url" id="source_link" required />

        <label for="demo_link">Demo Link</label>
        <input type="url" id="demo_link" v-model="demo_link" required />

        <label for="tags">Tags</label>
        <input
          @input="splitTags"
          type="text"
          id="tags"
          v-model="tags"
          required
        />

        <input class="btn cta" type="submit" value="Create Project" />
      </form>
    </div>

    <!-- Card Preview -->
    <article class="project neumorphism">
      <figure v-if="projectCoverPhoto" class="animated-bg">
        <img :src="projectCoverPhoto" :alt="title" />
      </figure>

      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div v-if="source_link && demo_link" class="project-btns">
        <a class="btn" :href="source_link" target="_blank">Source</a>

        <a class="btn cta" :href="demo_link" target="_blank">Live 🚀</a>
      </div>
      <div class="tags-container">
        <span v-for="(tag, index) in tags" :key="index" class="tag">{{
          tag
        }}</span>
      </div>
    </article>
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
      const fileName = this.featured_image.name;
      this.$store.commit("projects/setFileName", fileName);
      this.$store.commit(
        "projects/createFileURL",
        URL.createObjectURL(this.featured_image)
      );
    },

    splitTags() {
      this.tags = this.tags.split(",");
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
  computed: {
    projectCoverPhoto() {
      return this.$store.getters["projects/getProjectFileURL"];
    },
  },
};
</script>

<style scoped>
.add-project-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 80%;
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

/* Project Card Preview */
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 35rem;
  width: 35rem;
  position: relative;
  transition: 0.3s;
}

.project img {
  height: 15rem;
  width: 100%;
  border-radius: 1rem;
}

.project p {
  text-align: center;
  padding: 2rem;
  color: var(--primary-color);
  font-size: 1.5rem;
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
  background-color: lightgreen;

  color: var(--secondary-color);
  border: 1px solid transparent;
}

.project-btns .btn:hover,
.project-btns .btn.cta:hover {
  background-color: transparent;
  color: var(--accent-color);
  border: 1px solid var(--primary-color);
}

.project-btns .btn.cta {
  background-color: var(--accent-color);
  color: #e5e5e5;
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
  text-transform: uppercase;
}
</style>
