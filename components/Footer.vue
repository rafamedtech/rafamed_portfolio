<template>
  <div>
    <footer>
      <section class="social-links">
        <a
          href="https://twitter.com/rafamedDev"
          rel="nofollow noopener noreferrer"
          target="_blank"
          ><i class="devicon-twitter-original"></i
        ></a>
        <a
          href="https://github.com/rafamedtech/"
          rel="nofollow noopener noreferrer"
          target="_blank"
          ><i class="devicon-github-original"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/rafael-amed-valenzuela/"
          rel="nofollow noopener noreferrer"
          target="_blank"
          ><i class="devicon-linkedin-plain"></i
        ></a>
      </section>
      <span>Copyright &copy; Rafamed</span>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 8rem 0;
  height: 8rem;
}

.social-links i {
  margin: 1rem;
  font-size: 3.6rem;
  color: var(--third-color);
  transition: 0.3s;
}

@media (min-width: 768px) {
  footer {
    margin-bottom: 1rem;
  }
}

@media (min-width: 1024px) {
  .social-links i:hover {
    color: var(--primary-color);
    transition: 0.3s;
  }
}
</style>
