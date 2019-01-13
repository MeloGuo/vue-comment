<template>
  <div id="app">
    <comment-app></comment-app>
  </div>
</template>

<script>
import CommentApp from './containers/CommentApp.vue'
import './index.css'

export default {
  name: 'app',
  components: { CommentApp }
}
</script>
