<template>
  <div class="wrapper">
    <comment-input></comment-input>
    <comment-list></comment-list>
  </div>
</template>

<script>
import CommentInput from './CommentInput.vue'
import CommentList from './CommentList.vue'

export default {
  name: 'CommentApp',
  components: {
    CommentInput,
    CommentList
  }
}
</script>
