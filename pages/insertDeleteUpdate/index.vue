<template>
    <section class="users-view">
        <div class="content">
            <div class="subsection">
                <div style="margin: 25px 10px;">
                    <div class="subsection-title" style="vertical-align: middle;">Player</div>
                    <div style="margin: 25px 10px;">
                        <span style="vertical-align: middle;">Select an option to modify the data </span>
                        <select v-model="playerDataModification" style="vertical-align: middle;" :value="playerDataModification">
                            <option disabled value=" ">Select One</option>
                            <option value="Insert">Insert</option>
                            <option value="Delete">Delete</option>
                            <option value="Update">Update</option>
                        </select>
                        <div style="margin: 25px 10px;">
                            <table>
                                <thead>
                                <tr style="vertical-align: middle; text-align: left" >
                                    <td>Name</td>
                                    <td>
                                        <input v-model="playerName" placeholder="String" style="text-align: center" :value="playerName">
                                    </td>
                                <tr>
                                <tr>
                                    <td>Nationality</td>
                                    <td>
                                        <input v-model="playerNationality" placeholder="String" style="text-align: center" :value="playerNationality">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Position</td>
                                    <td>
                                        <select v-model="playerPosition" style="vertical-align: middle;" :value="playerPosition">
                                            <option disabled value=" ">Select One</option>
                                            <option>Goalkeeper</option>
                                            <option>Defender</option>
                                            <option>Midfielder</option>
                                            <option>Forward</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Number of Goals</td>
                                    <td>
                                        <input v-model="playerGoals" placeholder="Integer" style="text-align: center" :value="playerGoals">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dominant Foot</td>
                                    <td>
                                        <select v-model="playerFoot" style="vertical-align: middle;" :value="playerFoot">
                                            <option disabled value=" ">Select One</option>
                                            <option>Left</option>
                                            <option>Right</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>
                                        <input v-model="playerWeight" placeholder="in kg" style="text-align: center" :value="playerWeight">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Height</td>
                                    <td>
                                        <input v-model="playerHeight" placeholder="in cm" style="text-align: center" :value="playerHeight">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Team Name</td>
                                    <td>
                                        <input v-model="teamName" placeholder="String" style="text-align: center" :value="teamName">
                                    </td>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <button class="subheadersection-title" style="vertical-align: middle;" @click="submitPlayer">Submit</button>
                </div>
                <div style="margin: 25px 10px;">
                    <span class="subsection-title" style="vertical-align: middle;">Stadium</span>
                    <div style="margin: 25px 10px;">
                        <span style="vertical-align: middle;">Select an option to modify the data </span>
                        <select v-model="selected" style="vertical-align: middle;" :value="stadiumDataModification">
                            <option disabled value=" ">Select One</option>
                            <option>Insert</option>
                            <option>Delete</option>
                            <option>Update</option>
                        </select>
                        <div style="margin: 25px 10px;">
                            <table>
                                <thead>
                                <tr style="vertical-align: middle; text-align: left" >
                                    <td>Name</td>
                                    <td>
                                        <input v-model="message" placeholder="String" style="text-align: center" :value="stadiumName">
                                    </td>
                                <tr>
                                <tr>
                                    <td>City</td>
                                    <td>
                                        <input v-model="message" placeholder="String" style="text-align: center" :value="stadiumCity">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Capacity</td>
                                    <td>
                                        <input v-model="message" placeholder="String" style="text-align: center" :value="stadiumCapacity">
                                    </td>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <button class="subheadersection-title" style="vertical-align: middle;" @click="submitStadium">Submit</button>
                </div>
                <div style="margin: 25px 10px;">
                    <span class="subsection-title" style="vertical-align: middle;">Manager</span>
                    <div style="margin: 25px 10px;">
                        <span style="vertical-align: middle;">Select an option to modify the data </span>
                        <select v-model="selected" style="vertical-align: middle;">
                            <option disabled value=" ">Select One</option>
                            <option>Insert</option>
                            <option>Delete</option>
                            <option>Update</option>
                        </select>
                        <div style="margin: 25px 10px;">
                            <table>
                                <thead>
                                <tr style="vertical-align: middle; text-align: left" >
                                    <td>Name</td>
                                    <td>
                                        <input v-model="message" placeholder="String" style="text-align: center">
                                    </td>
                                <tr>
                                <tr>
                                    <td>Nationality</td>
                                    <td>
                                        <input v-model="message" placeholder="String" style="text-align: center">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Team Name</td>
                                    <td>
                                        <input v-model="message" placeholder="String" style="text-align: center">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Managed From</td>
                                    <td>
                                        <input v-model="message" placeholder="YYYY-MM-DD" style="text-align: center">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Managed To</td>
                                    <td>
                                        <input v-model="message" placeholder="YYYY-MM-DD" style="text-align: center">
                                    </td>
                                    <span>(Keep EMPTY if manager currently manages the team)</span>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <button class="subheadersection-title" style="vertical-align: middle;">Submit</button>
                </div>
                <div style="margin: 25px 10px;">
                    <span class="subsection-title" style="vertical-align: middle;">League</span>
                    <div style="margin: 25px 10px;">
                        <span style="vertical-align: middle;">Select an option to modify the data </span>
                        <select v-model="selected" style="vertical-align: middle;">
                            <option disabled value=" ">Select One</option>
                            <option>Insert</option>
                            <option>Delete</option>
                            <option>Update</option>
                        </select>
                        <div style="margin: 25px 10px;">
                            <table>
                                <thead>
                                <tr style="vertical-align: middle; text-align: left" >
                                    <td>Name</td>
                                    <td>
                                        <input v-model="message" placeholder="String" style="text-align: center">
                                    </td>
                                <tr>
                                <tr>
                                    <td>Country</td>
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
                    <span class="subsection-title" style="vertical-align: middle;">Team</span>
                    <div style="margin: 25px 10px;">
                        <span style="vertical-align: middle;">Select an option to modify the data </span>
                        <select v-model="selected" style="vertical-align: middle;">
                            <option disabled value=" ">Select One</option>
                            <option>Insert</option>
                            <option>Delete</option>
                            <option>Update</option>
                        </select>
                        <div style="margin: 25px 10px;">
                            <table>
                                <thead>
                                <tr style="vertical-align: middle; text-align: left" >
                                    <td>Name</td>
                                    <td>
                                        <input v-model="message" placeholder="String" style="text-align: center">
                                    </td>
                                <tr>
                                <tr>
                                    <td>City</td>
                                    <td>
                                        <input v-model="message" placeholder="String" style="text-align: center">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Number of Trophies</td>
                                    <td>
                                        <input v-model="message" placeholder="Integer" style="text-align: center">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Since</td>
                                    <td>
                                        <input v-model="message" placeholder="Integer" style="text-align: center">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Stadium Name</td>
                                    <td>
                                        <input v-model="message" placeholder="String" style="text-align: center">
                                    </td>
                                </tr>
                                <tr>
                                    <td>League Name</td>
                                    <td>
                                        <input v-model="message" placeholder="String" style="text-align: center">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Year</td>
                                    <td>
                                        <input v-model="message" placeholder="YYYY" style="text-align: center">
                                    </td>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <button class="subheadersection-title" style="vertical-align: middle;">Submit</button>
                </div>
                <div style="margin: 25px 10px;">
                    <span class="subsection-title" style="vertical-align: middle;">Match</span>
                    <div style="margin: 25px 10px;">
                    <span style="vertical-align: middle;">Select an option to modify the data </span>
                    <select v-model="selected" style="vertical-align: middle;">
                        <option disabled value=" ">Select One</option>
                        <option>Insert</option>
                        <option>Delete</option>
                        <option>Update</option>
                    </select>
                    <div style="margin: 25px 10px;">
                        <table>
                            <thead>
                            <tr style="vertical-align: middle; text-align: left" >
                                <td>Date</td>
                                <td>
                                    <input v-model="message" placeholder="YYYY-MM-DD" style="text-align: center">
                                </td>
                            <tr>
                            <tr>
                                <td>Referee</td>
                                <td>
                                    <input v-model="message" placeholder="String" style="text-align: center">
                                </td>
                            </tr>
                            <tr>
                                <td>Winner</td>
                                <td>
                                    <input v-model="message" placeholder="String" style="text-align: center">
                                </td>
                            </tr>
                            <tr>
                                <td>Home Team</td>
                                <td>
                                    <input v-model="message" placeholder="String" style="text-align: center">
                                </td>
                            </tr>
                            <tr>
                                <td>Away Team</td>
                                <td>
                                    <input v-model="message" placeholder="String" style="text-align: center">
                                </td>
                            </tr>
                            <tr>
                                <td>Stadium Name</td>
                                <td>
                                    <input v-model="message" placeholder="String" style="text-align: center">
                                </td>
                            </tr>
                            <tr>
                                <td>Home Goals</td>
                                <td>
                                    <input v-model="message" placeholder="Integer" style="text-align: center">
                                </td>
                            </tr>
                            <tr>
                                <td>Away Goals</td>
                                <td>
                                    <input v-model="message" placeholder="Integer" style="text-align: center">
                                </td>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <button class="subheadersection-title" style="vertical-align: middle;">Submit</button>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import axios from '~/plugins/axios'

export default {
  playerData () {
    return {
      playerDataModification: '',
      playerName: '',
      playerNationality: '',
      playerPosition: '',
      playerGoals: '',
      playerFoot: '',
      playerWeight: '',
      playerHeight: '',
      teamName: ''
    }
  },

  stadiumData () {
    return {
      stadiumDataModification: '',
      stadiumName: '',
      stadiumCity: '',
      stadiumCapacity: ''
    }
  },

  methods: {
    generateID () {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    },

    submitPlayer () {
      let self = this

      /* if (self.playerDataModification === 'Insert') { */
      const playerID = this.generateID()
      axios.post('/api/insert', {
        tables: ['player'],
        attributes: [
          {
            key: 'id',
            value: playerID,
            dataType: 'string'
          },
          {
            key: 'name',
            value: self.playerName !== undefined ? self.playerName : null,
            dataType: 'string'
          },
          {
            key: 'nationality',
            value: self.playerNationality,
            dataType: 'string'
          },
          {
            key: 'position',
            value: self.playerPosition,
            dataType: 'string'
          },
          {
            key: 'num_goals',
            value: self.playerGoals,
            dataType: 'number'
          },
          {
            key: 'dominant_foot',
            value: self.playerFoot,
            dataType: 'number'
          },
          {
            key: 'weight',
            value: self.playerWeight,
            dataType: 'number'
          },
          {
            key: 'height',
            value: self.playerHeight,
            dataType: 'number'
          }
        ]
      }).then(() => {
        axios.post('/api/insert', {
          tables: ['owns'],
          attributes: [
            {
              key: 'team_name',
              value: self.teamName,
              dataType: 'string'
            },
            {
              key: 'player_id',
              value: playerID,
              dataType: 'string'
            }
          ]
        })
      }).then((res) => {
        console.log(res)
      }).catch((e) => {
        console.log(e)
      })
      /*
      } else if (self.playerDataModification === 'Delete') {
        // TODO
      } else if (self.playerDataModification === 'Update') {
        // TODO
      } else {
        console.log('hello')
      } */
    },

    submitStadium () {
      let self = this

      if (self.stadiumDataModification === 'Insert') {
        axios.post('/api/insert', {
          tables: ['stadium'],
          attributes: [
            {
              key: 'name',
              value: self.stadiumName,
              dataType: 'string'
            },
            {
              key: 'city',
              value: self.stadiumCity,
              dataType: 'string'
            },
            {
              key: 'capacity',
              value: self.stadiumCapacity,
              dataType: 'number'
            }
          ]
        })
      } else if (self.stadiumDataModification === 'delete') {
        // TODO
      } else if (self.stadiumDataModification === 'update') {
        // TODO
      }
    }
  },

  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },

  head () {
    return {
      title: 'Users'
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