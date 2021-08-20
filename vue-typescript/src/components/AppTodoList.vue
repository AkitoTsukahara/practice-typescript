<template>
    <div class="todos">
        <div v-for="todo in todos" :key="todo.id">
            <AppTodoItem :todo="todo"></AppTodoItem>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'Vue'
import AppTodoItem, { Todo } from './AppTodoItem.vue'

export type Data = {
    todos: Todo[]
}

export default Vue.extend({
    data: (): Data => ({

        todos: []
    }),
    componetns: {
        AppTodoItem
    }
})
</script>