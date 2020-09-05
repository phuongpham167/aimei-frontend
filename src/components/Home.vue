<template>
  <b-container fluid="sm">
    <section class="hero is-dark">
      <h1>List province</h1>
      <b-list-group>
        <b-list-group-item v-for="(province, index) of provinces" :key="index">
          <b-row>
            <b-col>{{province.name}}</b-col>
            <b-col>
                <b-button variant="outline-primary" @click.prevent="navigateToDetail(province.id)">details</b-button>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </section>
  </b-container>
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
  },
  methods: {
    navigateToDetail (provinceId) {
      this.$router.push('/provinces/' + provinceId)
    }
  }
}
</script>

<style scoped>

</style>
