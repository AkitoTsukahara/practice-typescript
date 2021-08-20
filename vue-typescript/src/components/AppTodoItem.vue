<template>
    <div class="todo">
        {{maYask}}
    </div>
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue'

export type Todo = {
    id: string
    task: string
    done: boolean
}
export default defineComponent({
    props: {
        todo: Object as PropType<Todo>
    },
    computed: {
        myTask(): string {
            return this?.todo?.task?
        }
    }
})
</script>
