<template>
  <div >
    <el-row :gutter="10">
      <el-col :span="8" :offset="8">
        <el-input placeholder="Choose a city" v-model="query" class="input-with-select"> </el-input>
      </el-col>
      <el-col :span="2">
        <router-link to="/result"><el-button v-on:click="fetchWeather">Search</el-button></router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      query: ''
    }
  },
  methods: {
    fetchWeather: function() {
      this.$store.dispatch('FETCH_WEATHER', this.query)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
