import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// mutation-types
export const INIT_COMMENTS = 'INIT_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const ADD_COMMENT_ASYNC = 'ADD_COMMENT_ASYNC'

export default new Vuex.Store({
  state: {
    comments: []
  },
  mutations: {
    [INIT_COMMENTS] (state, { comments }) {
      state.comments = comments
    },
    [ADD_COMMENT] (state, { comment }) {
      state.comments = [...state.comments, comment]
    },
    [DELETE_COMMENT] (state, { index }) {
      state.comments = [
        ...state.comments.slice(0, index),
        ...state.comments.slice(index + 1)
      ]
    }
  },
  actions: {
    [ADD_COMMENT_ASYNC] ({ commit }, { comment }) {
      // 模拟异步请求
      console.log(comment)
      setTimeout(() => {
        commit(ADD_COMMENT, { comment })
      }, 1000)
    }
  }
})
