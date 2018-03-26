<template>
  <section class="user-view">
  <div class="content">
    <div class="subsection">
      <div class="error-msg" v-if="this.$store.state.errorMsg">
        <p>{{ this.$store.state.errorMsg }}</p>
      </div>
      <form style="margin: 15px 15px;">
        <div style="margin: 10px 0;">
          <span class="user-username">Username: </span>
          <input type="text" :value="username" v-model="username"></input>
        </div>
        <div style="margin: 10px 0;">
          <span class="user-password">Password: </span>
          <input type="password" v-model="password"></input>
        </div>
      </form>
      <button type="button" class="button--grey" @click="submitLogin">Login</button>
    </div>
  </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {

  data () {
    return {
      userid: '',
      username: '',
      password: '',
      permission: ''
    }
  },

  methods: {
    submitLogin () {
      let self = this

      axios.post('/login', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            userid: self.userid,
            username: self.username,
            password: self.password,
            permission: self.permission
          }})
        .then((res) => {
          self.$store.commit('login', {
            username: res.data.user.username,
            permission: res.data.user.permission
          })
          self.$store.commit('noError')
          self.$nuxt.$router.replace({ path: '/' })
        })
        .catch((e) => {
          self.$store.commit('logout')
          self.$store.commit('newError', 'Login Failed')
          console.log('Login Failed')
          console.log(e)
        })
    }
  },

  head () {
    return {
      title: `Login`
    }
  }
}
</script>

<style lang="stylus" scoped>
.user-view
  padding-top 0

.content
  position absolute
  width 100%

.subsection
  background-color #fff
  border-radius 2px
  margin 25px 0
  transition all .5s cubic-bezier(.55,0,.1,1)
  padding 10px 30px 10px 30px
  position relative
  line-height 20px
  .error-msg
    color: red
    margin-left: 15px
  .subsection-title
    margin 25px 10px
    font-size 26px
    font-weight 500
  .user-username
    font-size 24px
    font-weight 500
    color #707070
  .user-password
    font-size 24px
    font-weight 500
    color #707070
  a
    text-decoration underline
  &:hover
    color #515ec4

</style>
