<template>
  <header>
    <article>
      <a class="logo" href="/">Rafamed.Dev</a>
    </article>

    <!-- Navigation Bar -->
    <nav class="nav">
      <ul>
        <li><nuxt-link to="/projects">Projects 🏦</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog 📑</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact 📨</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  border-bottom: 1px solid var(--third-color);
  transition: 0.3s ease-out;
}

.nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  position: fixed;
  z-index: 99;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100vw;
  height: inherit;
  background-color: var(--secondary-color);
  border-top: 1px solid var(--primary-color);
}

.nav ul li {
  list-style-type: none;
}

.nav ul li a {
  display: block;
  padding: 1rem;
  font-size: 1.6rem;
  color: var(--primary-color);
  text-decoration: none;
  transition: 0.2s;
}

.current {
  border-radius: 0;
  border-bottom: 2px solid var(--primary-color);
  color: var(--accent-color);
}

.logo {
  font-size: 3.6rem;
  text-decoration: none;
  color: var(--primary-color);
  font-family: "Comforter Brush", cursive;
  transition: 0.3s;
}

@media (min-width: 768px) {
  header {
    justify-content: space-between;
    position: fixed;
    z-index: 99 !important;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: var(--secondary-color);
  }

  /*
-----------------------------
Navigation Bar
-----------------------------
*/

  .nav ul {
    position: relative;
    gap: 3rem;
    background-color: transparent;
    border-top: none;
  }

  .nav ul li:hover a {
    color: var(--accent-color);
    transform: translateY(-0.5rem);
    transition: transform 0.2s;
  }

  .nav ul li:hover a.current {
    color: revert;
    transform: revert;
    cursor: unset;
    color: #e5e5e5;
  }

  .nav ul li a {
    color: lightgreen;
  }
}
@media (min-width: 1024px) {
  .logo:hover {
    color: yellow;
    transition: 0.3s;
  }
}
</style>
