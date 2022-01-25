export const state = () => ({
  _posts: [],
  _lastPosts: [],
});

export const actions = {
  // fetch all posts from strapi
  async loadPosts({ commit }) {
    let { data } = await this.$strapi.find("api/posts?populate=*");

    console.log(data);

    commit("setPosts", data);
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
    state._posts = posts;
    state._lastPosts = posts.slice(-4);
  },
};
