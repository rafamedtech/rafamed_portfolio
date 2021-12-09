export const state = () => ({
  _posts: [],
});

export const actions = {
  async loadPosts({ commit }) {
    let { data } = await this.$axios.get("http://127.0.0.1:8000/blog/posts/");

    // console.log(data);
    commit("setPosts", data);
  },
};

export const getters = {
  getPosts(state) {
    return state._posts;
  },
  getSinglePost: (state) => (slug) => {
    return state._posts.find((post) => post.slug == slug);
  },
};

export const mutations = {
  setPosts(state, posts) {
    state._posts = posts;
  },
};