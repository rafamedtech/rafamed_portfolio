export const state = () => ({
  _posts: [],
  _lastPosts: [],
});

export const actions = {
  // fetch all posts from strapi
  async loadPosts({ commit }) {
    let { data } = await this.$strapi.find("api/posts?populate=*");

    const sortedData = data.sort((a, b) => {
      return (
        new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
      );
    });

    commit("setPosts", sortedData);
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
    return state._posts.find((post) => post.attributes.slug === slug);
  },
};

export const mutations = {
  setPosts(state, posts) {
    state._posts = posts.sort(
      (a, b) => b.attributes.createdAt - a.attributes.createdAt
    );
    state._lastPosts = posts.slice(-2);
  },
};
