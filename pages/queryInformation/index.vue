<template>
    <section class="users-view">
        <div class="content">
            <div class="subsection">
                <div style="margin: 25px 10px;">
                    <div class="subsection-title" style="vertical-align: middle;">Manager</div>
                    <div style="margin: 25px 10px;">
                        <span style="vertical-align: middle;">Show the following managers attributes: </span>
                        <div id='example-1'>
                            <input type="checkbox" id="id" value="ID" v-model="checkedNames">
                            <label for="id">Id </label>
                            <input type="checkbox" id="name" value="Name" v-model="checkedNames">
                            <label for="name">Name </label>
                            <input type="checkbox" id="nationality" value="Nationality" v-model="checkedNames">
                            <label for="nationality">Nationality </label>
                            <br>
                            <!--<span>Checked names: {{ checkedNames }}</span>-->
                        </div>
                        <span style="vertical-align: middle;">who have the following characteristics: </span>
                        <div style="margin: 25px 10px;">
                            <table>
                                <thead>
                                <tr style="vertical-align: middle; text-align: left" >
                                    <td>Id</td>
                                    <td>
                                        <input v-model="message" placeholder="String" style="text-align: center">
                                    </td>
                                <tr>
                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <input v-model="message" placeholder="String" style="text-align: center">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nationality</td>
                                    <td>
                                        <input v-model="message" placeholder="String" style="text-align: center">
                                    </td>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <button class="subheadersection-title" style="vertical-align: middle;">Submit</button>
                </div>
                <div style="margin: 25px 10px;">
                    <div class="subsection-title" style="vertical-align: middle;">Player</div>
                    <div style="margin: 25px 10px;">
                        <span style="vertical-align: middle;">Show the following player attributes: </span>
                        <div id='example-2'>
                            <input type="checkbox" id="id" value="Id" v-model="checkedNames">
                            <label for="id">Id </label>
                            <input type="checkbox" id="name" value="Name" v-model="checkedNames">
                            <label for="name">Name </label>
                            <input type="checkbox" id="nationality" value="Nationality" v-model="checkedNames">
                            <label for="nationality">Nationality </label>
                            <br>
                            <!--<span>Checked names: {{ checkedNames }}</span>-->
                        </div>
                        <span style="vertical-align: middle;">Who play for team: </span>
                        <input v-model="message" placeholder="String" style="text-align: center">
                    </div>
                    <button class="subheadersection-title" style="vertical-align: middle;">Submit</button>
                </div>
                <div style="margin: 25px 10px;">
                    <div class="subsection-title" style="vertical-align: middle;">Team</div>
                    <div style="margin: 25px 10px;">
                        <span style="vertical-align: middle;">Show the following team attributes: </span>
                        <div id='example-2'>
                            <input type="checkbox" id="id" value="name" v-model="data.team">
                            <label for="id">name </label>
                            <input type="checkbox" id="name" value="city" v-model="data.team">
                            <label for="name">city </label>
                            <input type="checkbox" id="nationality" value="num_trophies" v-model="data.team">
                            <label for="nationality">number of trophies </label>
                            <input type="checkbox" id="nationality" value="since" v-model="data.team">
                            <label for="nationality">date founded </label>
                            <input type="checkbox" id="nationality" value="stadium_name" v-model="data.team">
                            <label for="nationality">stadium </label>
                            <br>
                            <span>attriubutes: {{ data.team }}</span>
                        </div>
                    </div>
                    <div style="margin: 25px 10px;">
                        <span style="vertical-align: middle;">Show teams that have not lost a home game this year: </span>
                    </div>
                    <nuxt-link class="button--grey" style="padding: 5px 20px; text-decoration: none;" params="{user.name}" to="/queryinformation/team">Submit</nuxt-link>
                </div>
                <div style="margin: 25px 10px;">
                    <div class="subsection-title" style="vertical-align: middle;">Stadium</div>
                    <div style="margin: 25px 10px;">
                        <span style="vertical-align: middle;">Show the stadium with (MAX/MIN) capacity: </span>
                    </div>
                    <nuxt-link class="button--grey" style="padding: 5px 20px; text-decoration: none;" params="{user.name}" to="/queryinformation/max">Max</nuxt-link>
                    <nuxt-link class="button--grey" style="padding: 5px 20px; text-decoration: none;" params="{user.name}" to="/queryinformation/min">Min</nuxt-link>
                </div>
                <div style="margin: 25px 10px;">
                    <div class="subsection-title" style="vertical-align: middle;">Goals</div>
                    <div style="margin: 25px 10px;">
                        <span style="vertical-align: middle;">Show the team with (MAX/MIN) average goals: </span>
                    </div>
                    <nuxt-link class="button--grey" style="padding: 5px 20px; text-decoration: none;" params="{user.name}" to="/queryinformation/goalmax">Max</nuxt-link>
                    <nuxt-link class="button--grey" style="padding: 5px 20px; text-decoration: none;" params="{user.name}" to="/queryinformation/goalmin">Min</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { teams: data }
  },

  data () {
    return {data: {team: []}}
  },

  head () {
    return {
      title: 'Queries'
    }
  }
}
</script>



<style lang="stylus" scoped>
.users-view
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
  .subsection-title
    font-size 26px
    font-weight 500
  .title
    font-size 18px
    font-weight 500
  a
    text-decoration underline
    &:hover
      color #515ec4

.subheadersection
    background-color #fff
    border-radius 2px
    margin 25px 0
    transition all .5s cubic-bezier(.55,0,.1,1)
    padding 10px 30px 10px 30px
    position relative
    line-height 20px
    .subheadersection-title
        font-size 20px
        font-weight 500
    .title
        font-size 18px
        font-weight 500
    a
        text-decoration underline
        &:hover
            color #515ec4
</style>