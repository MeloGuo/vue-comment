<template>
  <comment-input
    :username="username"
    @username:blur="_saveUsername"
    @submit="handleSubmitComment"></comment-input>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { ADD_COMMENT } from '../stores/store'
import CommentInput from '../components/CommentInput.vue'

export default {
  name: 'CommentInputContainer',
  components: { CommentInput },
  data () {
    return {
      username: ''
    }
  },
  computed: mapState({
    comments: state => state.comments
  }),
  created () {
    this._loadUsername()
  },
  methods: {
    ...mapMutations({
      addComment: ADD_COMMENT
    }),
    _loadUsername () {
      const username = window.localStorage.getItem('username')
      if (username) {
        this.username = username
      }
    },
    _saveUsername (username) {
      window.localStorage.setItem('username', username)
    },
    handleSubmitComment (comment) {
      if (!comment) {
        return
      }
      if (!comment.username) {
        return window.alert('Please enter username!')
      }
      if (!comment.content) {
        return window.alert('Please enter content')
      }
      const newComments = [...this.comments, comment]
      window.localStorage.setItem('comments', JSON.stringify(newComments))
      this.addComment({ comment }) // this.$store.commit(ADD_COMMENT, { comment })
    }
  }
}
</script>
