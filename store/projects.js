export const state = () => ({
  _projects: [],
  _lastProjects: [],
});

export const actions = {
  // fetch all projects from strapi
  async loadProjects({ commit }) {
    // let { data } = await this.$strapi.find("api/projects?populate=*");
    let { data } = await this.$axios("/wordpress/wp-json/wp/v2/projects/");

    commit("setProjects", data);
  },
};

export const getters = {
  getProjects(state) {
    return state._projects;
  },

  getLastProjects(state) {
    return state._lastProjects;
  },

  getSingleProject: (state) => (slug) => {
    return state._projects.find((project) => project.slug === slug);
  },
};

export const mutations = {
  setProjects(state, projects) {
    state._projects = projects;
    state._lastProjects = projects.slice(-4);
  },
};
