export const state = () => ({
  _skills: ["Figma", "TailwindCSS", "Javascript", "Vuejs", "Nuxtjs", "Django"],
  accessToken: null,
  refreshToken: null,
});

export const actions = {
  async nuxtServerInit({ dispatch }, context) {
    await dispatch("projects/loadProjects");
    await dispatch("blog/loadPosts");
  },

  async login({ commit }, username, password) {
    let { data } = await this.$axios.post("users/token/", username, password);
    commit("updateStorage", data);
  },
};

export const mutations = {
  updateStorage(state, { access, refresh }) {
    state.accessToken = access;
    state.refreshToken = refresh;
  },
};
