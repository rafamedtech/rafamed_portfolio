export const state = () => ({
  _skills: ["Git", "TailwindCSS", "Javascript", "Vuejs", "Nuxtjs", "Django"],
});

export const actions = {
  async nuxtServerInit({ dispatch }, context) {
    await dispatch("projects/loadProjects");
    await dispatch("blog/loadPosts");
  },
};
