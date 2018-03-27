<template>
  <div class="header">
    <div class="inner">
      <nav class="navbar__menu">
        <router-link to="/" exact>
          <img class="logo" src="~/assets/img/happy.png" alt="logo">
        </router-link>
        <div class="account-container" v-if="this.$store.state.permission == 'user' || this.$store.state.permission == 'admin'">
          <nuxt-link to="/queryInformation">Query Data</nuxt-link>
        </div>
        <div class="account-container" v-if="this.$store.state.permission == 'admin'">
          <nuxt-link to="/insertData">Insert Data</nuxt-link>
        </div>
        <div class="account-container" v-if="this.$store.state.permission == 'admin'">
          <nuxt-link to="/users">Users</nuxt-link>
        </div>
        <div class="account-container" v-if="this.$store.state.username">
          <a href="/logout" >{{ this.$store.state.username }}({{ this.$store.state.permission }}): Logout</a>
        </div>
        <div class="account-container"v-else>
          <nuxt-link to="/login">Login</nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.header
  background-color #111111
  position fixed
  z-index 999
  height 55px
  top 0
  left 0
  right 0
  .inner
    max-width 800px
    box-sizing border-box
    margin 0px auto
    padding 15px 5px
    a
      color rgba(255, 255, 255, .8)
      line-height 24px
      transition color .15s ease
      display inline-block
      vertical-align middle
      font-weight 300
      letter-spacing .075em
      margin-right 1.8em
      &:hover
        color #fff
      &.router-link-active
        color #fff
        font-weight 400

.logo
  width 24px
  margin-right 10px
  display inline-block
  vertical-align middle

.account-container
  display: inline-block

@media (max-width 860px)
  .header .inner
    padding 15px 30px

@media (max-width 600px)
  .header
    .inner
      padding 15px
      a
        margin-right 1em
</style>
