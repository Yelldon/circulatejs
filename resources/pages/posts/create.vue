<template>
  <div class="flex w-full">
    <div class="w-full" ref="editor"></div>
  </div>
</template>

<script>
import Quill from 'quill'
export default {
  data() {
    return {
      editor: null,
      options: {
        // debug: 'info',
        placeholder: 'Compose an epic...',
        theme: 'bubble'
      },
      data: {
        text: ''
      }
    }
  },
  mounted() {
    this.editor = new Quill(this.$refs.editor, this.options)
    console.log(this.editor)
  },
  watch: {
    editor: {
      handler() {
        this.data.text = this.editor.root.innerHTML
      },
      deep: true
    }
  }
}
</script>
