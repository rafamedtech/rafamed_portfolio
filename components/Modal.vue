<template>
  <div class="modal">
    <article class="modal-content neumorphism">
      <p>Thanks for your message, I'll reply back as soon as possible.</p>
      <nuxt-link to="/" class="btn cta">Close</nuxt-link>
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.modal-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  height: 20rem;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
}
</style>
