<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="8">
        <router-link to="/"><i class="el-icon-arrow-left"></i></router-link>
      </el-col>
      <el-col :span="3">
        <div class="degrees" v-bind:class="tempClass">{{ temperature }}</div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="3" :offset="8">
        Air pressure: {{ weather.main.pressure }} hPa
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="3" :offset="8">
        Humidity: {{ weather.main.humidity }}%
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Result',

  computed: {
    weather() {
      return this.$store.state.weather
    },
    temperature() {
      return Math.trunc(this.weather.main.temp - 275.15)
    },
    tempClass() {
      if (this.temperature < 10) return 'blue'
      if (this.temperature < 20) return 'black'
      if (this.temperature > 20) return 'red'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.degrees {
  font-size: 350%;
  font-weight: 300;
}

.degrees:after {
  content: "\00b0"
}

.el-icon-arrow-left {
  color: #F2F2F2
}

.blue {
  color: blue;
}

.black {
  color: black;
}

.red {
  color: red;
}
</style>
