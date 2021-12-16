export const state = () => ({
  _projects: [],
  _lastProjects: [],
});

export const actions = {
  async loadProjects({ commit }) {
    let { data } = await this.$axios.get("/projects/");

    commit("setProjects", data);
  },

  async loadLastProjects({ commit }) {
    let { data } = await this.$axios.get("/projects/");

    commit("setLastProjects", data);
  },

  async createProject({ commit }, payload) {
    let { data } = await this.$axios.post(
      "/projects/create-project/",
      payload
      // {
      //   headers: { Authorization: "multipart/form-data" },
      // }
    );

    commit("addProject", data);
  },
  // create a method that delete a project
  async deleteProject({ commit }, payload) {
    let { data } = await this.$axios.delete(
      `/projects/delete-project/${payload}`
    );
    commit("removeProject", payload);
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
  },
  addProject(state, project) {
    state._projects.push(project);
  },
  removeProject(state, id) {
    state._projects = state._projects.filter((project) => project.id !== id);
  },
  setLastProjects(state, projects) {
    state._lastProjects = projects.splice(-4);
  },
};
