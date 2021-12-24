<template>
  <div>
    <section class="contact">
      <h2 class="headings">Let’s work together!</h2>
      <article class="contact-content">
        <ContactImg class="blob" />

        <form @submit.prevent="createProject">
          <BaseInput v-model="title" label="Title" type="text" />
          <BaseInput v-model="description" label="Description" type="text" />

          <label for="image">Featured Image</label>
          <input
            type="file"
            id="image"
            @change="onFileSelected"
            name="featured_image"
            required
          />

          <label for="source_link">Source Link</label>
          <input v-model="source_link" type="url" id="source_link" required />

          <label for="demo_link">Demo Link</label>
          <input type="url" id="demo_link" v-model="demo_link" required />

          <label for="tags">Tags</label>
          <input type="text" id="tags" v-model="tags" required />

          <input class="btn cta" type="submit" value="Create Project" />
        </form>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submission: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    async sendMessage() {
      await this.$supabase.from("messages").insert([this.submission]);
      this.submission.name = "";
      this.submission.email = "";
      this.submission.message = "";
    },
  },
};
</script>

<style>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 8rem;
}

.contact-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
}

.contact form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 35rem;
  margin: 4rem 1rem 1rem 1rem;
}

label {
  border-bottom: 2px solid var(--primary-color);
  width: fit-content;
}

input {
  height: 5rem;
  border: none;
  padding: 1rem;
  background-color: transparent;
  border: 1px solid var(--third-color);
  color: var(--primary-color);
}

textarea {
  height: 10rem;
  background-color: transparent;
  padding: 1rem;
  color: var(--primary-color);
  border: 1px solid var(--third-color);
}

input:focus,
textarea:focus {
  border-color: transparent;
  outline: 2px solid var(--primary-color);
  transition: 0.1s;
  color: #e5e5e5;
}

@media (min-width: 768px) {
  .contact {
    margin-top: 12rem;
  }
  .contact-content {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }

  .contact-content svg {
    width: 50rem;
  }
}
</style>
