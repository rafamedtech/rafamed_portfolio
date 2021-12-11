export const state = () => ({
  _projects: [],
});

export const actions = {
  async loadProjects({ commit }) {
    let { data } = await this.$axios.get("http://localhost:8000/projects/");

    commit("setProjects", data);
  },

  async createProject({ commit }, payload) {
    let { data } = await this.$axios.post(
      "http://localhost:8000/projects/create-project/",
      payload,
      {
        headers: { Authorization: "multipart/form-data" },
      }
    );

    commit("addProject", data);
  },
  // create a method that delete a project
  async deleteProject({ commit }, payload) {
    let { data } = await this.$axios.delete(
      `http://localhost:8000/projects/delete-project/${payload}`
    );
    commit("removeProject", payload);
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
  addProject(state, project) {
    state._projects.push(project);
  },
  removeProject(state, id) {
    state._projects = state._projects.filter((project) => project.id !== id);
  },
};
