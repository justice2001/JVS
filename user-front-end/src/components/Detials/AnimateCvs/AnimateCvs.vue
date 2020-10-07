<template>
  <div id="animate-cvs">
    <h2 id="animate-cvs-title">声优信息</h2>
    <ul>
      <li v-for="item in cvsList">{{item.cvAnimeName}} : {{item.cvName}}</li>
    </ul>
  </div>
</template>

<script>
export default {
name: "AnimateCvs",
  props: {
    cvsList: {
      type: Array,
      default() {
        return [{cvId:0, cvAnimeName:'没有声优信息', cvName: ''}]
      }
    }
  },
  data: () => ({

  })
}
</script>

<style scoped>
#animate-cvs {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  min-height: 400px;
}

#animate-cvs-title {
  font-size: 26px;
  padding: 0 10px;
}
</style>