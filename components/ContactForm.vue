<template>
  <div>
    <!-- Contact Section -->
    <section class="contact">
      <h2 class="headings">Let’s work together!</h2>
      <article class="contact-content">
        <ContactImg class="blob" />

        <form id="contact-form" class="neumorphism">
          <label for="name">Full Name</label>
          <input type="text" id="name" required />
          <label for="email">Email</label>
          <input type="email" id="email" required />
          <label for="message">Your Message</label>
          <textarea id="message" required></textarea>

          <input class="btn cta form" type="submit" value="Submit" />
        </form>
      </article>
    </section>
  </div>
</template>

<script>
export default {};
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
