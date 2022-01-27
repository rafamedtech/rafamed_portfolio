export const state = () => ({
  _projects: [],
  _lastProjects: [],
});

export const actions = {
  // fetch all projects from strapi
  async loadProjects({ commit }) {
    let { data } = await this.$strapi.find("api/projects?populate=*");

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
};

export const mutations = {
  setProjects(state, projects) {
    state._projects = projects;
    state._lastProjects = projects.slice(-4);
  },
};
