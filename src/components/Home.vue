<template>
  <div class="home">
    <section class="hero is-dark">
      List province
      <ul>
        <li v-for="(province, index) in provinces" :key="index">
          <p><strong>{{province.name}}</strong></p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import * as Api from '../api'

export default {
  name: 'Home',
  data () {
    return {
      provinces: []
    }
  },
  created () {
    Api.GET('http://127.0.0.1:8000/api/provinces')
      .then(response => {
        this.provinces = response.data.data
      })
  }
}
</script>

<style scoped>

</style>
