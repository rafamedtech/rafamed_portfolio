<template>
  <div>
    <Header />

    <transition name="slide-fade">
      <Nuxt />
    </transition>

    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css",
      },
    ],
  },
};
</script>
