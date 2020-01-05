<template>
  <div class="flex flex-col p-10">
    <input type="text" class="mb-4" placeholder="Title" />
    <div class="w-full text-lg" ref="editor"></div>
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
        placeholder: 'Your amazing article starts here...',
        theme: 'bubble'
      },
      data: {
        text: ''
      }
    }
  },
  mounted() {
    this.editor = new Quill(this.$refs.editor, this.options)
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

<style lang="postcss" scoped></style>
