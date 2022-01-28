<template>
  <div>
    <!-- Hero Section -->
    <section data-aos="zoom-in" class="hero">
      <HeroImg class="blob" />
      <div>
        <h2>I'm Rafael Valenzuela</h2>
        <h3>Nuxt/Django Web Developer</h3>
        <nuxt-link class="btn cta" to="/contact">Contact me!</nuxt-link>
      </div>
    </section>

    <main>
      <!-- About Section -->
      <section data-aos="zoom-in" class="about neumorphism">
        <h2 class="headings">Few words about me</h2>
        <p>
          Technology is my passion, I love creating websites and Web Apps and I
          also enjoy share what I just learned with everyone.
        </p>
        <AboutImg />
      </section>

      <!-- Skills Section -->
      <section class="skills">
        <article class="skills-description">
          <h2 class="headings">This is my Stack</h2>
          <p>
            Here are the technologies I use most of the time for my projects and
            I feel more comfortable with.
          </p>
        </article>

        <div class="neumorphism card" data-aos="zoom-in">
          <article v-for="(skill, index) in _skills" :key="index">
            <i :class="`devicon-${skill.toLowerCase()}-plain`"></i>
            <p>{{ skill }}</p>
          </article>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="projects">
        <h2 class="headings">Here is some of my work</h2>
        <div class="index-projects-container" data-aos="zoom-in">
          <ProjectCard
            v-for="project in lastProjects"
            :key="project.id"
            :project="project"
          />
        </div>
      </section>

      <!-- Blog Section -->
      <section class="blog">
        <h2 class="headings">My latest blog posts</h2>
        <PostCard
          v-for="post in lastPosts"
          :key="post.id"
          :post="post"
          data-aos="zoom-in"
        />
      </section>

      <!-- Contact Section -->
      <ContactForm />
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  head() {
    return {
      title: "Rafamed.Dev",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Welcome to my Portfolio website",
        },
      ],
    };
  },

  computed: {
    ...mapState(["_skills"]),
    lastProjects() {
      return this.$store.getters["projects/getLastProjects"];
    },
    lastPosts() {
      return this.$store.getters["blog/getLastPosts"];
    },
  },
};
</script>

<style>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 16rem);
  padding: 2rem;
  gap: 2rem;
}

.hero div {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
}

.hero h2 {
  font-weight: 400;
  letter-spacing: 1.5px;
  /* font-size: 4.2rem; */
  color: var(--primary-color);
}

.hero h3 {
  font-weight: 300;
  color: #90ee90;
}

main {
  margin-top: 8rem;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 80vw;
  max-width: 70rem;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
}

.about svg {
  height: 16rem;
  max-width: 100%;
}

.about p {
  line-height: 3rem;
}

.skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 8rem;
  padding: 4rem 2rem;
}

.skills .skills-description {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skills .skills-description p {
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 2rem;
  text-align: center;
  line-height: 3rem;
}

.skills .card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around;
  gap: 3rem;
  align-items: center;
  width: 35rem;
  max-width: 50rem;
  padding: 6rem 2rem;
}

.skills .card article {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

.skills .card i {
  font-size: 5rem;
  color: var(--third-color);
}

.skills .card p {
  color: var(--accent-color);
}

.blog {
  margin-top: 8rem;
}

.blog div {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 8rem;
}

.projects {
  margin-top: 8rem;
}

.index-projects-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  width: 50%;
  margin: 8rem auto 0;
}

@media (min-width: 768px) {
  .hero {
    margin-top: 8rem;
  }

  .about p {
    padding: 0 2rem;
  }

  .skills div {
    display: flex;
    justify-content: center;
    min-width: 100%;
    flex-wrap: wrap;
    gap: 2.5rem;
  }

  .skills .card {
    grid-template-columns: repeat(3, 1fr);
  }

  .index-projects-container {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .hero {
    flex-direction: row-reverse;
    justify-content: space-around;
    min-height: calc(100vh - 8rem);
  }

  .hero h2 {
    font-size: 4.2rem;
  }

  .hero h3 {
    font-size: 2.8rem;
    text-align: left;
  }

  .skills div {
    justify-content: space-around;
    min-width: 60%;
    height: 40rem;
  }
  .index-projects-container {
    max-width: 50%;
  }
}
</style>
