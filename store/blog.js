export const state = () => ({
  _posts: [],
  _lastPosts: [],
});

export const actions = {
  // fetch all posts from strapi
  async loadPosts({ commit }) {
    try {
      let { data } = await this.$axios("/wordpress/wp-json/wp/v2/posts");
      // console.log(data);
      const sortedData = data.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      commit("setPosts", sortedData);
    } catch (error) {
      console.log(error);
    }
  },
};

export const getters = {
  getPosts(state) {
    return state._posts;
  },

  getLastPosts(state) {
    return state._lastPosts;
  },

  getSinglePost: (state) => (slug) => {
    return state._posts.find((post) => post.slug === slug);
  },
};

export const mutations = {
  setPosts(state, posts) {
    state._posts = posts.sort((a, b) => b.date - a.date);
    state._lastPosts = posts.slice(-2);
  },
};
