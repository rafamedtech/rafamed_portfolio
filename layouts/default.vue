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
    title: "Rafamed.Dev",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Welcome to my portfolio website!",
      },
    ],
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
  /* --primary-color: #6272a4; */
  --primary-color: #8be9fd;
  --secondary-color: #282a36;
  --third-color: #e5e5e5;

  --accent-color: rgba(255, 121, 198, 0.8);
  /* --accent-color: #ff80bf; */

  /* Neumorphism Effect Colors*/
  --shadow-up: #22242e;
  --shadow-down: #2e303e;
}
body {
  font-family: "Poppins", sans-serif;
  background-color: var(--secondary-color);
  transition: 0.3s ease-out;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
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
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 1rem;
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
}

input:focus,
textarea:focus {
  border-color: transparent;
  outline: 2px solid var(--primary-color);
  background-color: #fff;
  transition: 0.1s;
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

.button-item {
  display: none;
}

.button-item .btn {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
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
  background-color: #fff;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn.cta:active {
  transform: scale(0.98);
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
  /* background-color: var(--primary-color); */
  border: 1px solid yellow;
}

@media (min-width: 768px) {
  .blob {
    width: 40rem;
    height: 40rem;
  }
}

@media (min-width: 1024px) {
  .btn.cta {
    margin: 0;
  }
}
</style>
