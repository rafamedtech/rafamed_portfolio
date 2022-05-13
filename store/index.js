export const state = () => ({
  _skills: ["Git", "TailwindCSS", "Javascript", "Vuejs", "Nuxtjs", "Django"],
});

export const actions = {
  async nuxtServerInit({ dispatch }, context) {
    await dispatch("projects/loadProjects");
    await dispatch("blog/loadPosts");
  },

  async sendForm({ commit }, form) {
    try {
      const { error } = await this.$axios.post(
        "/wordpress/wp-json/contact-form-7/v1/contact-forms/5/feedback",
        form
      );
      // this.$router.push("/");

      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  },
};
