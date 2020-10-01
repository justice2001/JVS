<template>
<div>
{{ nowPos }}
</div>
</template>

<script>
export default {
name: "Detials",
  data() {
    return {
      nowPos: this.$route.params.id
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>