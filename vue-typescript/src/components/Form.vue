<template>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    defaultDateLabel: "1980-01-01",
    dateLabel: null as string | null
  }),
  computed: {
    dateFromDateLabel(): Date {
      let label = this.defaultDateLabel
      if (this.dateLabel !== null) {
        label = this.dateLabel
      }
      return new Date(label)
    }
  }
});
</script>

<style scoped>

</style>
