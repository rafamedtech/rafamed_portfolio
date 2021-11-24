<template>
  <div>
    <!-- Contact Section -->
    <section class="contact">
      <h2 class="headings">Let’s work together!</h2>
      <article class="contact-content">
        <ContactImg class="blob" />

        <form
          @submit.prevent="sendMessage()"
          id="contact-form"
          class="neumorphism"
        >
          <label for="name">Full Name</label>
          <input v-model="name" type="text" id="name" required />
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" required />
          <label for="message">Your Message</label>
          <textarea v-model="message" id="message" required></textarea>

          <input class="btn cta form" type="submit" value="Submit" />
        </form>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      console.log(this.name, this.email, this.message);
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
