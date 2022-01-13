export const state = () => ({
  _posts: [],
  _postFile: null,
  _postFileURL: "",
});

export const actions = {
  async loadPosts({ commit }) {
    let { data } = await this.$strapi.find("api/posts?populate=*");

    console.log(data);
    commit("setPosts", data);
  },

  async createPost({ commit }, payload) {
    let { data } = await this.$axios.post("/posts/create-post/", payload);

    commit("addPost", data);
  },
};

export const getters = {
  getPosts(state) {
    return state._posts;
  },

  getSinglePost: (state) => (slug) => {
    return state._posts.find((post) => post.attributes.slug == slug);
  },

  getPostFile(state) {
    return state._postFile;
  },

  getPostFileURL(state) {
    return state._postFileURL;
  },
};

export const mutations = {
  setPosts(state, posts) {
    state._posts = posts;
  },

  addPost(state, post) {
    state._posts.push(post);
  },

  setFileName(state, payload) {
    state.postFile = payload;
  },

  createFileURL(state, payload) {
    state._postFileURL = payload;
  },
};
