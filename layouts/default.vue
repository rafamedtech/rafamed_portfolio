<template>
  <div>
    <Header />
    <Nuxt />
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Comforter+Brush&display=swap");

:root {
  /* Base Colors */

  --primary-color: #8be9fd;

  --secondary-color: #282a36;
  --third-color: #e5e5e5;

  --accent-color: #ff79c6cc;

  /* Neumorphism Shadow Colors*/
  --shadow-up: #22242e;
  --shadow-down: #2e303e;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--secondary-color);
  transition: 0.3s ease-out;
}

h2 {
  font-size: 3.6rem;
  color: var(--third-color);
}

h3 {
  font-size: 2.4rem;
  font-weight: 400;
  color: var(--third-color);
}

a {
  color: inherit;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

p,
label,
span {
  font-size: 1.6rem;
  color: var(--third-color);
  color: lightgreen;
}

input,
textarea,
button,
select {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 1rem;
  font-family: inherit;
}

.neumorphism {
  border-radius: 2rem;
  background: var(--secondary-color);
  box-shadow: 20px 20px 60px var(--shadow-up),
    -20px -20px 60px var(--shadow-down);
  padding: 4rem 2rem;
}

.headings {
  text-align: center;
  line-height: 1;
  color: var(--primary-color);
  padding: 1rem;
}

.btn {
  margin: 1rem;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  font-size: 2rem;
  /* background-color: var(--third-color); */
  color: var(--secondary-color);
  transition: 0.3s;
  cursor: pointer;
}

.btn.cta {
  width: 15rem;
  margin: 0 auto;
  font-size: 1.6rem;
  text-align: center;
  background-color: var(--accent-color);

  color: #e5e5e5;
  border: 1px solid transparent;
}

.btn.cta:hover {
  background-color: transparent;
  color: var(--accent-color);
  border: 1px solid var(--primary-color);
}

.btn.cta.form {
  width: 100%;
}

.blob {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 30rem;
  border-radius: 69% 31% 30% 67% / 72% 47% 40% 26%;
  border: 1px solid yellow;
}

@media (min-width: 768px) {
  .blob {
    width: 30rem;
    height: 30rem;
  }
}

@media (min-width: 1024px) {
  .btn.cta {
    margin: 0;
  }
}
</style>
