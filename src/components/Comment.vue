<template>
  <div class="comment">
    <div class="comment-user">
      <span>{{comment.username}}:</span>
    </div>
    <p>{{comment.content}}</p>
    <span class="comment-createdtime">
      {{timeString}}
    </span>
    <span class="comment-delete" @click="handleDeleteComment">
      删除
    </span>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  data () {
    return {
      timeString: '2323'
    }
  },
  created () {
    this._updateTimeString()
    this._timer = setInterval(() => {
      this._updateTimeString()
    }, 5000)
  },
  beforeDestroy () {
    clearInterval(this._timer)
  },
  methods: {
    _updateTimeString () {
      const comment = this.comment
      const duration = (+Date.now() - comment.createdTime) / 1000
      this.timeString = duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    },
    handleDeleteComment () {
      this.$emit('delete:comment', this.index)
    }
  }
}
</script>
