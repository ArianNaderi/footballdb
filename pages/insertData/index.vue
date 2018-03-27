<template>
    <section class="users-view">
        <div class="content">
            <div class="subsection">
                <div style="margin: 25px 10px;">
                    <div class="subsection-title" style="vertical-align: middle;">Player</div>
                    <div style="margin: 25px 10px;">
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
                                        <input v-model="playerTeamName" placeholder="String" style="text-align: center" :value="playerTeamName">
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
                        <div style="margin: 25px 10px;">
                            <table>
                                <thead>
                                <tr style="vertical-align: middle; text-align: left" >
                                    <td>Name</td>
                                    <td>
                                        <input v-model="stadiumName" placeholder="String" style="text-align: center" :value="stadiumName">
                                    </td>
                                <tr>
                                <tr>
                                    <td>City</td>
                                    <td>
                                        <input v-model="stadiumCity" placeholder="String" style="text-align: center" :value="stadiumCity">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Capacity</td>
                                    <td>
                                        <input v-model="stadiumCapacity" placeholder="Integer" style="text-align: center" :value="stadiumCapacity">
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
                        <div style="margin: 25px 10px;">
                            <table>
                                <thead>
                                <tr style="vertical-align: middle; text-align: left" >
                                    <td>Name</td>
                                    <td>
                                        <input v-model="managerName" placeholder="String" style="text-align: center" :value="managerName">
                                    </td>
                                <tr>
                                <tr>
                                    <td>Nationality</td>
                                    <td>
                                        <input v-model="managerNationality" placeholder="String" style="text-align: center" :value="managerNationality">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Team Name</td>
                                    <td>
                                        <input v-model="managerTeamName" placeholder="String" style="text-align: center" :value="managerTeamName">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Managed From</td>
                                    <td>
                                        <input v-model="managedFrom" placeholder="YYYY-MM-DD" style="text-align: center" :value="managedFrom">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Managed To</td>
                                    <td>
                                        <input v-model="managedTo" placeholder="YYYY-MM-DD" style="text-align: center" :value="managedTo">
                                    </td>
                                    <span>(Keep EMPTY if manager currently manages the team)</span>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <button class="subheadersection-title" style="vertical-align: middle;" @click="submitManager">Submit</button>
                </div>
                <div style="margin: 25px 10px;">
                    <span class="subsection-title" style="vertical-align: middle;">League</span>
                    <div style="margin: 25px 10px;">
                        <div style="margin: 25px 10px;">
                            <table>
                                <thead>
                                <tr style="vertical-align: middle; text-align: left" >
                                    <td>Name</td>
                                    <td>
                                        <input v-model="leagueName" placeholder="String" style="text-align: center" :value="leagueName">
                                    </td>
                                <tr>
                                <tr>
                                    <td>Country</td>
                                    <td>
                                        <input v-model="leagueCountry" placeholder="String" style="text-align: center" :value="leagueCountry">
                                    </td>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <button class="subheadersection-title" style="vertical-align: middle;" @click="submitLeague">Submit</button>
                </div>
                <div style="margin: 25px 10px;">
                    <span class="subsection-title" style="vertical-align: middle;">Team</span>
                    <div style="margin: 25px 10px;">
                        <div style="margin: 25px 10px;">
                            <table>
                                <thead>
                                <tr style="vertical-align: middle; text-align: left" >
                                    <td>Name</td>
                                    <td>
                                        <input v-model="teamName" placeholder="String" style="text-align: center" :value="teamName">
                                    </td>
                                <tr>
                                <tr>
                                    <td>City</td>
                                    <td>
                                        <input v-model="teamCity" placeholder="String" style="text-align: center" :value="teamCity">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Number of Trophies</td>
                                    <td>
                                        <input v-model="teamTrophies" placeholder="Integer" style="text-align: center" :value="teamTrophies">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Since</td>
                                    <td>
                                        <input v-model="teamSince" placeholder="Integer" style="text-align: center" :value="teamSince">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Stadium Name</td>
                                    <td>
                                        <input v-model="teamStadium" placeholder="String" style="text-align: center" :value="teamStadium">
                                    </td>
                                </tr>
                                <tr>
                                    <td>League Name</td>
                                    <td>
                                        <input v-model="teamLeague" placeholder="String" style="text-align: center" :value="teamLeague">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Year</td>
                                    <td>
                                        <input v-model="teamYear" placeholder="YYYY" style="text-align: center" :value="teamYear">
                                    </td>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <button class="subheadersection-title" style="vertical-align: middle;" @click="submitTeam">Submit</button>
                </div>
                <div style="margin: 25px 10px;">
                    <span class="subsection-title" style="vertical-align: middle;">Match</span>
                    <div style="margin: 25px 10px;">
                    <div style="margin: 25px 10px;">
                        <table>
                            <thead>
                            <tr style="vertical-align: middle; text-align: left" >
                                <td>Date</td>
                                <td>
                                    <input v-model="matchDate" placeholder="YYYY-MM-DD" style="text-align: center" :value="matchDate">
                                </td>
                            <tr>
                            <tr>
                                <td>Referee</td>
                                <td>
                                    <input v-model="matchReferee" placeholder="String" style="text-align: center" :value="matchReferee">
                                </td>
                            </tr>
                            <tr>
                                <td>Winner</td>
                                <td>
                                    <input v-model="matchWinner" placeholder="String" style="text-align: center" :value="matchWinner">
                                </td>
                            </tr>
                            <tr>
                                <td>Home Team</td>
                                <td>
                                    <input v-model="matchHomeTeam" placeholder="String" style="text-align: center" :value="matchHomeTeam">
                                </td>
                            </tr>
                            <tr>
                                <td>Away Team</td>
                                <td>
                                    <input v-model="matchAwayTeam" placeholder="String" style="text-align: center" :value="matchAwayTeam">
                                </td>
                            </tr>
                            <tr>
                                <td>Stadium Name</td>
                                <td>
                                    <input v-model="matchStadiumName" placeholder="String" style="text-align: center" :value="matchStadiumName">
                                </td>
                            </tr>
                            <tr>
                                <td>Home Goals</td>
                                <td>
                                    <input v-model="matchHomeGoals" placeholder="Integer" style="text-align: center" :value="matchHomeGoals">
                                </td>
                            </tr>
                            <tr>
                                <td>Away Goals</td>
                                <td>
                                    <input v-model="matchAwayGoals" placeholder="Integer" style="text-align: center" :value="matchAwayGoals">
                                </td>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <button class="subheadersection-title" style="vertical-align: middle;" @click="submitMatch">Submit</button>
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
      playerName: '',
      playerNationality: '',
      playerPosition: '',
      playerGoals: '',
      playerFoot: '',
      playerWeight: '',
      playerHeight: '',
      playerTeamName: ''
    }
  },

  stadiumData () {
    return {
      stadiumName: '',
      stadiumCity: '',
      stadiumCapacity: ''
    }
  },

  managerData () {
    return {
      managerName: '',
      managerNationality: '',
      managerTeamName: '',
      managedFrom: '',
      managedTo: ''
    }
  },

  leagueData () {
    return {
      leagueName: '',
      leagueCountry: ''
    }
  },

  teamData () {
    return {
      teamName: '',
      teamCity: '',
      teamTrophies: '',
      teamSince: '',
      teamStadium: '',
      teamLeague: '',
      teamYear: ''
    }
  },

  matchData () {
    return {
      matchDate: '',
      matchReferee: '',
      matchWinner: '',
      matchHomeTeam: '',
      matchAwayTeam: '',
      matchStadiumName: '',
      matchHomeGoals: '',
      matchAwayGoals: ''
    }
  },

  methods: {
    generateID () {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    },

    submitPlayer () {
      let self = this
      const playerID = this.generateID()
      if (isNaN(parseInt(self.playerGoals)) && self.playerGoals !== undefined) {
        alert('Code: ' + '400' + ' ' + 'Message: ' + self.playerGoals + ' is not a number.')
        return
      }

      if (isNaN(parseInt(self.playerWeight)) && self.playerWeight !== undefined) {
        alert('Code: ' + '400' + ' ' + 'Message: ' + self.playerWeight + ' is not a number.')
        return
      }

      if (isNaN(parseInt(self.playerHeight)) && self.playerHeight !== undefined) {
        alert('Code: ' + '400' + ' ' + 'Message: ' + self.playerHeight + ' is not a number.')
        return
      }

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
            value: self.playerNationality !== undefined ? self.playerNationality : null,
            dataType: 'string'
          },
          {
            key: 'position',
            value: self.playerPosition !== undefined ? self.playerPosition : null,
            dataType: 'string'
          },
          {
            key: 'num_goals',
            value: self.playerGoals,
            dataType: 'number'
          },
          {
            key: 'dominant_foot',
            value: self.playerFoot !== undefined ? self.playerFoot : null,
            dataType: 'string'
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
              value: self.playerTeamName !== undefined ? self.playerTeamName : null,
              dataType: 'string'
            },
            {
              key: 'player_id',
              value: playerID,
              dataType: 'string'
            }
          ]
        }).then((result) => {
          alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
        }).catch((error) => {
          alert('Code: ' + error.response.data.code + ' ' + 'Message: ' + error.response.data.message)
        })
      }).catch((playerError) => {
        alert('Code: ' + playerError.response.data.code + ' ' + 'Message: ' + playerError.response.data.message)
      })
    },

    submitStadium () {
      let self = this

      if (isNaN(parseInt(self.stadiumCapacity)) && self.stadiumCapacity !== undefined) {
        alert('Code: ' + '400' + ' ' + 'Message: ' + self.stadiumCapacity + ' is not a number.')
        return
      }

      axios.post('/api/insert', {
        tables: ['stadium'],
        attributes: [
          {
            key: 'name',
            value: self.stadiumName !== undefined ? self.stadiumName : null,
            dataType: 'string'
          },
          {
            key: 'city',
            value: self.stadiumCity !== undefined ? self.stadiumCity : null,
            dataType: 'string'
          },
          {
            key: 'capacity',
            value: self.stadiumCapacity,
            dataType: 'number'
          }
        ]
      }).then((result) => {
        alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
      }).catch((error) => {
        alert('Code: ' + error.response.data.code + ' ' + 'Message: ' + error.response.data.message)
      })
    },

    submitManager () {
      let self = this
      const managerID = this.generateID()
      axios.post('/api/insert', {
        tables: ['manager'],
        attributes: [
          {
            key: 'id',
            value: managerID,
            dataType: 'string'
          },
          {
            key: 'name',
            value: self.managerName !== undefined ? self.managerName : null,
            dataType: 'string'
          },
          {
            key: 'nationality',
            value: self.managerNationality !== undefined ? self.managerNationality : null,
            dataType: 'string'
          }
        ]
      }).catch((managerError) => {
        alert('Code: ' + managerError.response.data.code + ' ' + 'Message: ' + managerError.response.data.message)
      }).then(() => {
        axios.post('/api/insert', {
          tables: ['manages'],
          attributes: [
            {
              key: 'team_name',
              value: self.managerTeamName !== undefined ? self.managerTeamName : null,
              dataType: 'string'
            },
            {
              key: 'manager_id',
              value: managerID,
              dataType: 'string'
            },
            {
              key: 'managed_from',
              value: self.managedFrom !== undefined ? self.managedFrom : null,
              dataType: 'string'
            },
            {
              key: 'managed_to',
              value: self.managedTo !== undefined ? self.managedTo : '',
              dataType: 'string'
            }
          ]
        }).then((result) => {
          alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
        }).catch((managesError) => {
          alert('Code: ' + managesError.response.data.code + ' ' + 'Message: ' + managesError.response.data.message)
        })
      })
    },

    submitLeague () {
      let self = this
      axios.post('/api/insert', {
        tables: ['league'],
        attributes: [
          {
            key: 'name',
            value: self.leagueName !== undefined ? self.leagueName : null,
            dataType: 'string'
          },
          {
            key: 'country',
            value: self.leagueCountry !== undefined ? self.leagueCountry : null,
            dataType: 'string'
          }
        ]
      }).then((result) => {
        alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
      }).catch((error) => {
        alert('Code: ' + error.response.data.code + ' ' + 'Message: ' + error.response.data.message)
      })
    },

    submitTeam () {
      let self = this

      if (isNaN(parseInt(self.teamTrophies)) && self.teamTrophies !== undefined) {
        alert('Code: ' + '400' + ' ' + 'Message: ' + self.teamTrophies + ' is not a number.')
        return
      }

      if (isNaN(parseInt(self.teamSince)) && self.teamSince !== undefined) {
        alert('Code: ' + '400' + ' ' + 'Message: ' + self.teamSince + ' is not a number.')
        return
      }

      if (isNaN(parseInt(self.teamYear)) && self.teamYear !== undefined) {
        alert('Code: ' + '400' + ' ' + 'Message: ' + self.teamYear + ' is not a number.')
        return
      }

      axios.post('/api/insert', {
        tables: ['team'],
        attributes: [
          {
            key: 'name',
            value: self.teamName !== undefined ? self.teamName : null,
            dataType: 'string'
          },
          {
            key: 'city',
            value: self.teamCity !== undefined ? self.teamCity : null,
            dataType: 'string'
          },
          {
            key: 'num_trophies',
            value: self.teamTrophies,
            dataType: 'number'
          },
          {
            key: 'since',
            value: self.teamSince,
            dataType: 'number'
          },
          {
            key: 'stadium_name',
            value: self.teamStadium !== undefined ? self.teamStadium : null,
            dataType: 'string'
          }
        ]
      }).then(() => {
        axios.post('/api/insert', {
          tables: ['participates'],
          attributes: [
            {
              key: 'team_name',
              value: self.teamName !== undefined ? self.teamName : null,
              dataType: 'string'
            },
            {
              key: 'league_name',
              value: self.teamLeague !== undefined ? self.teamLeague : null,
              dataType: 'string'
            },
            {
              key: 'year',
              value: self.teamYear,
              dataType: 'number'
            }
          ]
        }).then((result) => {
          alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
        }).catch((participatesError) => {
          alert('Code: ' + participatesError.response.data.code + ' ' + 'Message: ' + participatesError.response.data.message)
        })
      }).catch((teamError) => {
        alert('Code: ' + teamError.response.data.code + ' ' + 'Message: ' + teamError.response.data.message)
      })
    },

    submitMatch () {
      const matchID = this.generateID()
      let self = this

      if (isNaN(parseInt(self.matchHomeGoals)) && self.matchHomeGoals !== undefined) {
        alert('Code: ' + '400' + ' ' + 'Message: ' + self.matchHomeGoals + ' is not a number.')
        return
      }

      if (isNaN(parseInt(self.matchAwayGoals)) && self.matchAwayGoals !== undefined) {
        alert('Code: ' + '400' + ' ' + 'Message: ' + self.matchAwayGoals + ' is not a number.')
        return
      }

      axios.post('/api/insert', {
        tables: ['match'],
        attributes: [
          {
            key: 'id',
            value: matchID,
            dataType: 'string'
          },
          {
            key: 'date',
            value: self.matchDate !== undefined ? self.matchDate : null,
            dataType: 'string'
          },
          {
            key: 'referee',
            value: self.matchReferee !== undefined ? self.matchReferee : null,
            dataType: 'string'
          },
          {
            key: 'winner',
            value: self.matchWinner !== undefined ? self.matchWinner : null,
            dataType: 'string'
          }
        ]
      }).then(() => {
        axios.post('/api/insert', {
          tables: ['plays'],
          attributes: [
            {
              key: 'match_id',
              value: matchID,
              dataType: 'string'
            },
            {
              key: 'team_name',
              value: self.matchHomeTeam !== undefined ? self.matchHomeTeam : null,
              dataType: 'string'
            },
            {
              key: 'stadium_name',
              value: self.matchStadiumName !== undefined ? self.matchStadiumName : null,
              dataType: 'string'
            },
            {
              key: 'team_type',
              value: 'Home',
              dataType: 'string'
            },
            {
              key: 'goals',
              value: self.matchHomeGoals,
              dataType: 'number'
            }
          ]
        }).then(() => {
          axios.post('/api/insert', {
            tables: ['plays'],
            attributes: [
              {
                key: 'match_id',
                value: matchID,
                dataType: 'string'
              },
              {
                key: 'team_name',
                value: self.matchAwayTeam !== undefined ? self.matchAwayTeam : null,
                dataType: 'string'
              },
              {
                key: 'stadium_name',
                value: self.matchStadiumName !== undefined ? self.matchStadiumName : null,
                dataType: 'string'
              },
              {
                key: 'team_type',
                value: 'Away',
                dataType: 'string'
              },
              {
                key: 'goals',
                value: self.matchAwayGoals,
                dataType: 'number'
              }
            ]
          }).then((result) => {
            alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
          }).catch((awayTeamError) => {
            alert('Code: ' + awayTeamError.response.data.code + ' ' + 'Message: ' + awayTeamError.response.data.message)
          })
        }).catch((homeTeamError) => {
          alert('Code: ' + homeTeamError.response.data.code + ' ' + 'Message: ' + homeTeamError.response.data.message)
        })
      }).catch((matchError) => {
        alert('Code: ' + matchError.response.data.code + ' ' + 'Message: ' + matchError.response.data.message)
      })
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