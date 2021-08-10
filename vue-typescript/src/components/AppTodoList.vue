<script lang="ts">
import Vue from 'Vue'

export type Todo = {
    id: String
    task: String
    done: boolean
}

export type Data = {
    firstName: String
    lastName: String
    todos: Todo[]
}

export default Vue.extend({
    data: (): Data => ({
        firstName: 'Taro',
        lastName: 'Yamada',
        todos: []
    })
})
</script>