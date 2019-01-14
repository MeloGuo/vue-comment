<template>
  <div>
    <template v-for="(comment, index) in comments">
      <comment
        :comment="comment"
        :key="index"
        :index="index"
        @delete:comment="onDeleteComment"></comment>
    </template>
  </div>
</template>

<script>
import Comment from './Comment.vue'

export default {
  name: 'CommentList',
  components: { Comment },
  props: {
    comments: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onDeleteComment (index) {
      this.$emit('delete:comment', index)
    }
  }
}
</script>
