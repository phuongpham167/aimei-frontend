<template>
  <b-container fluid="sm">
    <section class="hero is-dark">
      <h1>Province Details</h1>
      <h2>Province Id: {{province.province_id}}</h2>
      <h2>Population: {{province.populations}} peoples</h2>
      <b-list-group>
        <b-list-group-item>
          <b-row>
            <b-col>District Name</b-col>
            <b-col>District Population</b-col>
          </b-row>
        </b-list-group-item>
        <b-list-group-item v-for="(district, index) of province.districts" :key="index">
          <b-row>
            <b-col>{{district.distric_name}}</b-col>
            <b-col>{{district.distric_population}}</b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </section>
    <div>
      <b-button variant="primary" @click.prevent="navigateToHome()">Back</b-button>
    </div>
  </b-container>
</template>

<script>
import * as Api from '../api'

export default {
  name: 'ProvinceDetail',
  data () {
    return {
      province: null
    }
  },
  created () {
    const provinceId = this.$route.params.provinceId
    Api.GET('http://127.0.0.1:8000/api/provinces/' + provinceId)
      .then(response => {
        this.province = response.data
      })
    console.log(this.province)
  },
  methods: {
    navigateToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
