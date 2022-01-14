export const state = () => ({
  _projects: [],
  _lastProjects: [],
  _projectFile: null,
  _projectFileURL: "",
});

export const actions = {
  async loadProjects({ commit }) {
    let { data } = await this.$strapi.find("api/projects?populate=*");
    // console.log(data);
    commit("setProjects", data);
  },

  async createProject({ commit }, payload) {
    let { data } = await this.$axios.post("/projects/create-project/", payload);

    commit("addProject", data);
  },

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

  getProjectFile(state) {
    return state._projectFile;
  },

  getProjectFileURL(state) {
    return state._projectFileURL;
  },
};

export const mutations = {
  setProjects(state, projects) {
    state._projects = projects;
    state._lastProjects = projects.slice(-4);
  },

  addProject(state, project) {
    state._projects.push(project);
  },

  removeProject(state, id) {
    state._projects = state._projects.filter((project) => project.id !== id);
  },

  setFileName(state, payload) {
    state.projectFile = payload;
  },

  createFileURL(state, payload) {
    state._projectFileURL = payload;
  },
};
