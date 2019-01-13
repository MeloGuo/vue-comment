<template>
  <comment-list
    :comments="comments"
    @delete:comment="handleDeleteComment"
  ></comment-list>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { DELETE_COMMENT, INIT_COMMENTS } from '../stores/store'
import CommentList from '../components/CommentList.vue'

export default {
  name: 'CommentListContainer',
  components: { CommentList },
  computed: mapState({
    comments: state => state.comments
  }),
  methods: {
    ...mapMutations({
      deleteComment: DELETE_COMMENT,
      initComments: INIT_COMMENTS
    }),
    created () {
      this._loadComments()
    },
    _loadComments () {
      let comments = window.localStorage.getItem('comments')
      comments = comments ? JSON.parse(comments) : []
      this.initComments({ comments }) // this.$store.commit(INIT_COMMENT, { comments })
    },
    handleDeleteComment (index) {
      const { comments } = this
      const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
      ]
      window.localStorage.setItem('comments', newComments)
      this.deleteComment({ index })
    }
  }
}
</script>

