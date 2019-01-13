<template>
  <div class='comment-input'>
    <div class='comment-field'>
      <span class='comment-field-name'>用户名：</span>
      <div class='comment-field-input'>
        <input
          :value="mutableUsername"
          @input="handleUsernameInput"
          @blur="handleUsernameBlur" />
      </div>
      <div class='comment-field'>
        <span class='comment-field-name'>评论内容：</span>
        <div class='comment-field-input'>
          <textarea
            :value="content"
            @input="handleContentInput"
            ref="textarea"
            />
        </div>
      </div>
      <div class='comment-field-button'>
        <button @click="handleSubmit">
          发布
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentInput',
  props: {
    username: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mutableUsername: this.username,
      content: ''
    }
  },
  methods: {
    mounted () {
      this.$refs.textarea.focus()
    },
    handleUsernameInput ({ target }) {
      this.mutableUsername = target.value
    },
    handleUsernameBlur ({ target }) {
      this.$emit('username:blur', target.value)
    },
    handleContentInput ({ target }) {
      this.content = target.value
    },
    handleSubmit (event) {
      const { mutableUsername, content } = this
      this.$emit('submit', {
        username: mutableUsername,
        content,
        createdTime: +new Date()
      })
      this.content = ''
    }
  }
}
</script>

