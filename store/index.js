export const state = () => ({
  _projects: [
    // {
    //   name: "Render",
    //   description: "This is a one-pager responsive brochure website.",
    //   image: "https://i.imgur.com/oYKLadh.jpg",
    //   sourceLink: "https://github.com/rafamedtech/Render",
    //   liveLink: "https://www.somosrender.com.mx/",
    //   tags: ["HTML", "TailwindCSS", "Javascript"],
    // },
    // {
    //   name: "Simple Todo",
    //   description: "This is a simple todo app implementing localstorage.",
    //   image: "https://i.imgur.com/9yrEAzh.jpg",
    //   sourceLink: "https://github.com/rafamedtech/simple-todo",
    //   liveLink: "https://simple-todo-rafamed.netlify.app",
    //   tags: ["HTML", "CSS", "Javascript"],
    // },
    // {
    //   name: "Github Profiles Search",
    //   description: "This is a single-page application using the Github API.",
    //   image: "https://i.imgur.com/BcULZ75.jpg",
    //   sourceLink: "https://github.com/rafamedtech/github-profile",
    //   liveLink: "https://rafamedtech.github.io/github-profile/",
    //   tags: ["HTML", "CSS", "Javascript"],
    // },
    // {
    //   name: "DevSearch",
    //   description: "Fullstack web app to find Developers and their projects.",
    //   image: "https://i.imgur.com/CwDXGO9.png",
    //   sourceLink: "https://github.com/rafamedtech/devsearch",
    //   liveLink: "https://mydevsearch.herokuapp.com/",
    //   tags: ["HTML", "CSS", "Django"],
    // },
  ],
  _skills: ["Figma", "TailwindCSS", "Javascript", "Vuejs", "Nuxtjs", "Django"],
});

export const actions = {
  async loadProjects({ commit }) {
    let { data } = await this.$axios.get(
      "https://my-json-server.typicode.com/rafamedtech/rafamed_portfolio/projects"
    );
    console.log(data);
    // commit("setProjects", data);
  },
};

export const getters = {
  getProjects(state) {
    return state._projects;
  },
  getSkills(state) {
    return state._skills;
  },
};

export const mutations = {
  setProjects(state, projects) {
    state._projects = projects;
  },
};
