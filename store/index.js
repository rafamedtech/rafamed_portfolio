export const state = () => ({
  _skills: ["Figma", "TailwindCSS", "Javascript", "Vuejs", "Nuxtjs", "Django"],
});

export const actions = {
  async nuxtServerInit({ dispatch }, context) {
    await dispatch("projects/loadProjects");
    // await dispatch("blog/loadPosts");
  },

  async userLogin({ commit }, payload) {
    let response = await this.$auth.loginWith("local", { data: payload });

    await this.$auth.setUserToken(response.data.access, response.data.refresh);
    if (response.data.access) {
      await this.$router.push("/projects");
    }
  },
};
