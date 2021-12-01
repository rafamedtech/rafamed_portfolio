export const state = () => ({
  _projects: [],
});

export const actions = {
  async loadProjects({ commit }) {
    let { data } = await this.$axios.get(
      "https://my-json-server.typicode.com/rafamedtech/rafamed_portfolio/projects/"
    );

    commit("setProjects", data);
  },
};

export const getters = {
  getProjects(state) {
    return state._projects;
  },
};

export const mutations = {
  setProjects(state, projects) {
    state._projects = projects;
  },
};
