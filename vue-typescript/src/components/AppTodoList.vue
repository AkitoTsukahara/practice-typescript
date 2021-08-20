<template>
    <div class="todos">
        <div v-for="todo in todos" :key="todo.id">
            <AppTodoItem :todo="todo"></AppTodoItem>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppTodoItem, { Todo } from './AppTodoItem.vue'

export type Data = {
    todos: Todo[]
}

export default defineComponent({
    data: (): Data => ({
        todos: []
    }),
    componetns: {
        AppTodoItem
    }
})
</script>