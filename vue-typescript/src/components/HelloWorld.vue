<template>
  <div class="hello">
    <h1>{{ greet }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    greet(): string {
      return 'Hello World'
    }
  }
});
</script>
