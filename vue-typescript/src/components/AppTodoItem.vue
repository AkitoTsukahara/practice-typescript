<template>
  <div class="todo">
    {{ maYask }}
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'

export type Todo = {
  id: string
  task: string
  done: boolean
}
export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true
    }
  },
  computed: {
    myTask(): string {
      return this.todo.task
    }
  }
})
</script>
