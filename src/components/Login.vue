<template>
  <div class="container">
    <b-row class="justify-content-center">
      <b-col md="6">
        <b-card-group>
          <b-card no-body class="p-4">
            <b-card-body>
              <b-form>
                <h1>Login</h1>
                <b-input-group class="mb-3">
                  <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                  <b-form-input type="text" class="form-control" placeholder="email" autocomplete="username email" v-model="email" />
                </b-input-group>
                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                  <b-form-input type="password" class="form-control" placeholder="password" autocomplete="current-password" v-model="password" />
                </b-input-group>
                <b-row>
                  <b-col cols="6">
                    <b-button variant="primary" @click="doLogin()" :disabled="disableLoginButton" class="px-4">Login</b-button>
                  </b-col>
                </b-row>
              </b-form>
            </b-card-body>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import * as Api from '../api'
import {router} from '../router'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    disableLoginButton () {
      return !(this.email && this.password)
    }
  },
  methods: {
    doLogin () {
      let data = new FormData()
      data.append('email', this.email)
      data.append('password', this.password)
      Api.POST('http://127.0.0.1:8000/api/auth/login', data)
        .then((response) => {
          localStorage.setItem('token', response.data.data.api_token)
          localStorage.setItem('user', JSON.stringify(response.data))
          Api.setAuthorizedToken(response.data.data.api_token)
          router.push('/')
        })
        .catch((e) => {
          this.resetValue()
          this.showToast({message: 'Something went wrong'})
        })
    },
    resetValue () {
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>

</style>
