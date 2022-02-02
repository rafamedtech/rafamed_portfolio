<template>
  <div>
    <section class="contact">
      <h2 class="headings">Let's work together!</h2>
      <article class="contact-content" data-aos="fade-zoom-in">
        <ContactImg class="blob" />

        <form
          @submit.prevent="sendMessage"
          id="contact-form"
          class="neumorphism"
        >
          <label for="name">Full Name</label>
          <input v-model="submission.name" type="text" id="name" required />
          <label for="email">Email</label>
          <input v-model="submission.email" type="email" id="email" required />
          <label for="message">Your Message</label>
          <textarea
            v-model="submission.message"
            id="message"
            required
          ></textarea>

          <input class="btn cta form" type="submit" value="Submit" />
        </form>
      </article>
      <Modal v-if="modalShow" />
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
      modalShow: false,
    };
  },
  methods: {
    async sendMessage() {
      await this.$supabase.from("messages").insert([this.submission]);
      this.modalShow = true;
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

.btn.cta.form {
  width: 100%;
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
