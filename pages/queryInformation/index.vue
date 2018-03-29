<!--suppress ALL -->
<template>
    <section class="users-view">
        <div class="content">
            <div class="subsection">
                <div style="margin: 25px 10px;">
                    <div class="subsection-title" style="vertical-align: middle;">Manager</div>
                    <div style="margin: 25px 10px;">
                        <span style="vertical-align: middle;">Show the following managers attributes: </span>
                        <div id='example-1'>
                            <input type="checkbox" id="id" value="manager.id" v-model="mancol">
                            <label for="id">Id </label>
                            <input type="checkbox" id="name" value="manager.name" v-model="mancol">
                            <label for="name">Name </label>
                            <input type="checkbox" id="nationality" value="manager.nationality" v-model="mancol">
                            <label for="nationality">Nationality </label>
                            <br>
                            <!--<span>Manageratt: {{ mancol }}</span>-->
                        </div>
                        <span style="vertical-align: middle;">who have the following characteristics: </span>
                        <div style="margin: 25px 10px;">
                            <table>
                                <thead>
                                <tr style="vertical-align: middle; text-align: left" >
                                    <td>Id</td>
                                    <td>
                                        <input v-model="manid" placeholder="String" style="text-align: center">
                                    </td>
                                <tr>
                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <input v-model="manname" placeholder="String" style="text-align: center">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nationality</td>
                                    <td>
                                        <input v-model="mannat" placeholder="String" style="text-align: center">
                                    </td>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <button class="subheadersection-title" style="vertical-align: middle;" @click="managerQ">Submit</button>
                    </div>
                    <ul>
                        <li v-for="(m, index) in mans.data" :key="index">
                            <ul>
                                <li v-for="(attr, index) in Object.keys(m)" :key="index" style="display:inline-block; padding-right: 10px;">
                                    {{ `${attr.charAt(0).toUpperCase() + attr.slice(1)}: ${m[attr]}`}}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div style="margin: 25px 10px;">
                    <div class="subsection-title" style="vertical-align: middle;">Player</div>
                    <div style="margin: 25px 10px;">
                        <span style="vertical-align: middle;">Show the following player attributes: </span>
                        <div id='example-2'>
                            <input type="checkbox" id="name" value="player.name" v-model="playcol">
                            <label for="name">Name </label>
                            <input type="checkbox" id="nationality" value="player.nationality" v-model="playcol">
                            <label for="nationality">Nationality </label>
                            <input type="checkbox" id="id" value="player.num_goals" v-model="playcol">
                            <label for="id">Number of Goals </label>
                            <input type="checkbox" id="id" value="player.id" v-model="playcol">
                            <label for="id">Id </label>
                            <br>
                        </div>
                        <span style="vertical-align: middle;">Who play for team: </span>
                        <input v-model="playteam" placeholder="String" style="text-align: center">
                    </div>
                    <button class="subheadersection-title" style="vertical-align: middle;" @click="playerQ">Submit</button>
                </div>
                <ul>
                    <li v-for="(m, index) in plays.data" :key="index">
                        <ul>
                            <li v-for="(attr, index) in Object.keys(m)" :key="index" style="display:inline-block; padding-right: 10px;">
                                {{ `${attr.charAt(0).toUpperCase() + attr.slice(1)}: ${m[attr]}`}}
                            </li>
                        </ul>
                    </li>
                </ul>
                <div style="margin: 25px 10px;">
                    <div class="subsection-title" style="vertical-align: middle;">Team</div>
                    <div style="margin: 25px 10px;">
                        <span style="vertical-align: middle;">Teams that have not lost a home game this year: </span>
                    </div>
                    <nuxt-link class="button--grey" style="padding: 5px 20px; text-decoration: none;" params="{user.name}" to="/queryinformation/team">Show</nuxt-link>
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

  data () {
    return {mans: [], plays: [], team: [], mancol: [], playcol: [], manid: '', manname: '', mannat: '', playteam: ''}
  },

  methods: {
    managerQ () {
      let self = this

      const conditions = []
      if (self.manid !== undefined && self.manid !== '') {
        conditions.push({
          table: 'manager',
          key: 'id',
          value: self.manid,
          operator: '='
        })
      }
      if (self.manname !== undefined && self.manname !== '') {
        conditions.push({
          table: 'manager',
          key: 'name',
          value: self.manname,
          operator: '='
        })
      }
      if (self.mannat !== undefined && self.mannat !== '') {
        conditions.push({
          table: 'manager',
          key: 'nationality',
          value: self.mannat,
          operator: '='
        })
      }

      axios.post('/api/singleTable', {
        tables: ['manager'],
        columns: self.mancol,
        conditions
      }).then((result) => {
        self.mans = result
      }).catch((result) => {
        alert('Code: ' + result.response.data.code + ' ' + 'Message: ' + result.response.data.message)
      })
    },

    playerQ () {
      let self = this

      const conditions = []
      if (self.playteam !== undefined && self.playteam !== '') {
        conditions.push({
          table: 'team',
          key: 'name',
          value: self.playteam,
          operator: '='
        })
      }

      axios.post('/api/join', {
        tables: ['player', 'team'],
        columns: self.playcol,
        conditions
      }).then((result) => {
        self.plays = result
      }).catch((result) => {
        alert('Code: ' + result.response.data.code + ' ' + 'Message: ' + result.response.data.message)
      })
    }},

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