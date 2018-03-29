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
                                    <tr>
                                        <td>Delete players with following characteristics:</td>
                                    </tr>
                                </thead>
                                <tbody style="font-size: 12px;">
                                    <tr style="vertical-align: middle; text-align: left" >
                                        <td>Name</td>
                                        <select v-model="playerNameWhereOp" style="vertical-align: middle;" :value="playerNameWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>LIKE</option>
                                        </select>
                                        <td>
                                            <input v-model="playerNameWhere" placeholder="String" style="text-align: center" :value="playerNameWhere">
                                        </td>
                                    <tr>
                                    <tr>
                                        <td>Nationality</td>
                                        <select v-model="playerNationalityWhereOp" style="vertical-align: middle;" :value="playerNationalityWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>LIKE</option>
                                        </select>
                                        <td>
                                            <input v-model="playerNationalityWhere" placeholder="String" style="text-align: center" :value="playerNationalityWhere">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Position</td>
                                        <select v-model="playerPositionWhereOp" style="vertical-align: middle;" :value="playerPositionWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>LIKE</option>
                                        </select>
                                        <td>
                                            <select v-model="playerPositionWhere" style="vertical-align: middle;" :value="playerPositionWhere">
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
                                        <select v-model="playerGoalsWhereOp" style="vertical-align: middle;" :value="playerGoalsWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>></option>
                                            <option><</option>
                                        </select>
                                        <td>
                                            <input v-model="playerGoalsWhere" placeholder="Integer" style="text-align: center" :value="playerGoalsWhere">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dominant Foot</td>
                                        <select v-model="playerFootWhereOp" style="vertical-align: middle;" :value="playerFootWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>LIKE</option>
                                        </select>
                                        <td>
                                            <select v-model="playerFootWhere" style="vertical-align: middle;" :value="playerFootWhere">
                                                <option disabled value=" ">Select One</option>
                                                <option>Left</option>
                                                <option>Right</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Weight</td>
                                        <select v-model="playerWeightWhereOp" style="vertical-align: middle;" :value="playerWeightWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>></option>
                                            <option><</option>
                                        </select>
                                        <td>
                                            <input v-model="playerWeightWhere" placeholder="in kg" style="text-align: center" :value="playerWeightWhere">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Height</td>
                                        <select v-model="playerHeightWhereOp" style="vertical-align: middle;" :value="playerHeightWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>></option>
                                            <option><</option>
                                        </select>
                                        <td>
                                            <input v-model="playerHeightWhere" placeholder="in cm" style="text-align: center" :value="playerHeightWhere">
                                        </td>
                                    </tr>
                                </tbody>
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
                                    <tr>
                                        <td>Delete stadiums with following characteristics:</td>
                                    </tr>
                                </thead>
                                <tbody style="font-size: 12px;">
                                    <tr style="vertical-align: middle; text-align: left" >
                                        <td>Name</td>
                                        <select v-model="stadiumNameWhereOp" style="vertical-align: middle;" :value="stadiumNameWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>LIKE</option>
                                        </select>
                                        <td>
                                            <input v-model="stadiumNameWhere" placeholder="String" style="text-align: center" :value="stadiumNameWhere">
                                        </td>
                                    <tr>
                                    <tr>
                                        <td>City</td>
                                        <select v-model="stadiumCityWhereOp" style="vertical-align: middle;" :value="stadiumCityWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>LIKE</option>
                                        </select>
                                        <td>
                                            <input v-model="stadiumCityWhere" placeholder="String" style="text-align: center" :value="stadiumCityWhere">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Capacity</td>
                                        <select v-model="stadiumCapacityWhereOp" style="vertical-align: middle;" :value="stadiumCapacityWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>></option>
                                            <option><</option>
                                        </select>
                                        <td>
                                            <input v-model="stadiumCapacityWhere" placeholder="Integer" style="text-align: center" :value="stadiumCapacityWhere">
                                        </td>
                                    </tr>
                                </tbody>
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
                                    <tr>
                                        <td>Delete managers with following characteristics:</td>
                                    </tr>
                                </thead>
                                <tbody style="font-size: 12px;">
                                    <tr style="vertical-align: middle; text-align: left" >
                                        <td>Name</td>
                                        <select v-model="managerNameWhereOp" style="vertical-align: middle;" :value="managerNameWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>LIKE</option>
                                        </select>
                                        <td>
                                            <input v-model="managerNameWhere" placeholder="String" style="text-align: center" :value="managerNameWhere">
                                        </td>
                                    <tr>
                                    <tr>
                                        <td>Nationality</td>
                                        <select v-model="managerNationalityWhereOp" style="vertical-align: middle;" :value="managerNationalityWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>LIKE</option>
                                        </select>
                                        <td>
                                            <input v-model="managerNationalityWhere" placeholder="String" style="text-align: center" :value="managerNationalityWhere">
                                        </td>
                                    </tr>
                                </tbody>
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
                                    <tr>
                                        <td>Delete leagues with following characteristics:</td>
                                    </tr>
                                </thead>
                                <tbody style="font-size: 12px;">
                                    <tr style="vertical-align: middle; text-align: left" >
                                        <td>Name</td>
                                        <select v-model="leagueNameWhereOp" style="vertical-align: middle;" :value="leagueNameWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>LIKE</option>
                                        </select>
                                        <td>
                                            <input v-model="leagueNameWhere" placeholder="String" style="text-align: center" :value="leagueNameWhere">
                                        </td>
                                    <tr>
                                    <tr>
                                        <td>Country</td>
                                        <select v-model="leagueCountryWhereOp" style="vertical-align: middle;" :value="leagueCountryWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>LIKE</option>
                                        </select>
                                        <td>
                                            <input v-model="leagueCountryWhere" placeholder="String" style="text-align: center" :value="leagueCountryWhere">
                                        </td>
                                    </tr>
                                </tbody>
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
                                    <tr>
                                        <td>Delete teams with following characteristics:</td>
                                    </tr>
                                </thead>
                                <tbody style="font-size: 12px;">
                                    <tr style="vertical-align: middle; text-align: left" >
                                        <td>Name</td>
                                        <select v-model="teamNameWhereOp" style="vertical-align: middle;" :value="teamNameWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>LIKE</option>
                                        </select>
                                        <td>
                                            <input v-model="teamNameWhere" placeholder="String" style="text-align: center" :value="teamNameWhere">
                                        </td>
                                    <tr>
                                    <tr>
                                        <td>City</td>
                                        <select v-model="teamCityWhereOp" style="vertical-align: middle;" :value="teamCityWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>LIKE</option>
                                        </select>
                                        <td>
                                            <input v-model="teamCityWhere" placeholder="String" style="text-align: center" :value="teamCityWhere">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Number of Trophies</td>
                                        <select v-model="teamTrophiesWhereOp" style="vertical-align: middle;" :value="teamTrophiesWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>></option>
                                            <option><</option>
                                        </select>
                                        <td>
                                            <input v-model="teamTrophiesWhere" placeholder="Integer" style="text-align: center" :value="teamTrophiesWhere">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Since</td>
                                        <select v-model="teamSinceWhereOp" style="vertical-align: middle;" :value="teamSinceWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>></option>
                                            <option><</option>
                                        </select>
                                        <td>
                                            <input v-model="teamSinceWhere" placeholder="YYYY" style="text-align: center" :value="teamSinceWhere">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Stadium Name</td>
                                        <select v-model="teamStadiumWhereOp" style="vertical-align: middle;" :value="teamStadiumWhereOp">
                                            <option disabled value=" ">Select One</option>
                                            <option>=</option>
                                            <option>!=</option>
                                            <option>LIKE</option>
                                        </select>
                                        <td>
                                            <input v-model="teamStadiumWhere" placeholder="String" style="text-align: center" :value="teamStadiumWhere">
                                        </td>
                                    </tr>
                                </tbody>
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
                                <tr>
                                    <td>Delete matches with following characteristics:</td>
                                </tr>
                            </thead>
                            <tbody style="font-size: 12px;">
                                <tr style="vertical-align: middle; text-align: left" >
                                    <td>Date</td>
                                    <select v-model="matchDateWhereOp" style="vertical-align: middle;" :value="matchDateWhereOp">
                                        <option disabled value=" ">Select One</option>
                                        <option>=</option>
                                        <option>!=</option>
                                        <option>LIKE</option>
                                    </select>
                                    <td>
                                        <input v-model="matchDateWhere" placeholder="YYYY-MM-DD" style="text-align: center" :value="matchDateWhere">
                                    </td>
                                <tr>
                                <tr>
                                    <td>Referee</td>
                                    <select v-model="matchRefereeWhereOp" style="vertical-align: middle;" :value="matchRefereeWhereOp">
                                        <option disabled value=" ">Select One</option>
                                        <option>=</option>
                                        <option>!=</option>
                                        <option>LIKE</option>
                                    </select>
                                    <td>
                                        <input v-model="matchRefereeWhere" placeholder="String" style="text-align: center" :value="matchRefereeWhere">
                                    </td>
                                </tr>
                            </tbody>
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
    /* eslint-disable indent */

    import axios from '~/plugins/axios'

export default {
  data () {
    return {
      playerNameWhere: undefined,
      playerNationalityWhere: undefined,
      playerPositionWhere: undefined,
      playerGoalsWhere: undefined,
      playerFootWhere: undefined,
      playerWeightWhere: undefined,
      playerHeightWhere: undefined,
      playerNameWhereOp: undefined,
      playerNationalityWhereOp: undefined,
      playerPositionWhereOp: undefined,
      playerGoalsWhereOp: undefined,
      playerFootWhereOp: undefined,
      playerWeightWhereOp: undefined,
      playerHeightWhereOp: undefined,
      stadiumNameWhere: undefined,
      stadiumCityWhere: undefined,
      stadiumCapacityWhere: undefined,
      stadiumNameWhereOp: undefined,
      stadiumCityWhereOp: undefined,
      stadiumCapacityWhereOp: undefined,
      managerNameWhere: undefined,
      managerNationalityWhere: undefined,
      managerNameWhereOp: undefined,
      managerNationalityWhereOp: undefined,
      leagueNameWhere: undefined,
      leagueCountryWhere: undefined,
      leagueNameWhereOp: undefined,
      leagueCountryWhereOp: undefined,
      teamNameWhere: undefined,
      teamCityWhere: undefined,
      teamTrophiesWhere: undefined,
      teamSinceWhere: undefined,
      teamStadiumWhere: undefined,
      teamNameWhereOp: undefined,
      teamCityWhereOp: undefined,
      teamTrophiesWhereOp: undefined,
      teamSinceWhereOp: undefined,
      teamStadiumWhereOp: undefined,
      matchDateWhere: undefined,
      matchRefereeWhere: undefined,
      matchDateWhereOp: undefined,
      matchRefereeWhereOp: undefined
    }
  },

  methods: {
    submitPlayer () {
      let self = this

      const conditions = []
      if (self.playerNameWhere !== undefined) {
        conditions.push({
          table: 'player',
          key: 'name',
          value: self.playerNameWhere,
          operator: self.playerNameWhereOp
        })
      }

      if (self.playerNationalityWhere !== undefined) {
        conditions.push({
          table: 'player',
          key: 'nationality',
          value: self.playerNationalityWhere,
          operator: self.playerNationalityWhereOp
        })
      }

      if (self.playerPositionWhere !== undefined) {
        conditions.push({
          table: 'player',
          key: 'position',
          value: self.playerPositionWhere,
          operator: self.playerPositionWhereOp
        })
      }

      if (self.playerGoalsWhere !== undefined) {
        if (isNaN(parseInt(self.playerGoalsWhere))) {
          alert('Code: ' + '400' + ' ' + 'Message: ' + self.playerGoalsWhere + ' is not a number.')
          return
        }
        conditions.push({
          table: 'player',
          key: 'num_goals',
          value: self.playerGoalsWhere,
          operator: self.playerGoalsWhereOp
        })
      }

      if (self.playerFootWhere !== undefined) {
        conditions.push({
          table: 'player',
          key: 'dominant_foot',
          value: self.playerFootWhere,
          operator: self.playerFootWhereOp
        })
      }

      if (self.playerWeightWhere !== undefined) {
        if (isNaN(parseInt(self.playerWeightWhere))) {
          alert('Code: ' + '400' + ' ' + 'Message: ' + self.playerWeightWhere + ' is not a number.')
          return
        }
        conditions.push({
          table: 'player',
          key: 'weight',
          value: self.playerWeightWhere,
          operator: self.playerWeightWhereOp
        })
      }

      if (self.playerHeightWhere !== undefined) {
        if (isNaN(parseInt(self.playerHeightWhere))) {
          alert('Code: ' + '400' + ' ' + 'Message: ' + self.playerHeightWhere + ' is not a number.')
          return
        }
        conditions.push({
          table: 'player',
          key: 'height',
          value: self.playerHeightWhere,
          operator: self.playerHeightWhereOp
        })
      }

      axios.post('/api/delete', {
        tables: ['player'],
        conditions
      }).then((result) => {
        alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
      }).catch((error) => {
        alert('Code: ' + error.response.data.code + ' ' + 'Message: ' + error.response.data.message)
      })
    },

    submitStadium () {
      let self = this

      const conditions = []
      if (self.stadiumNameWhere !== undefined) {
        conditions.push({
          table: 'stadium',
          key: 'name',
          value: self.stadiumNameWhere,
          operator: self.stadiumNameWhereOp
        })
      }

      if (self.stadiumCityWhere !== undefined) {
        conditions.push({
          table: 'stadium',
          key: 'city',
          value: self.stadiumCityWhere,
          operator: self.stadiumCityWhereOp
        })
      }

      if (self.stadiumCapacityWhere !== undefined) {
        if (isNaN(parseInt(self.stadiumCapacityWhere))) {
          alert('Code: ' + '400' + ' ' + 'Message: ' + self.stadiumCapacityWhere + ' is not a number.')
          return
        }
        conditions.push({
          table: 'stadium',
          key: 'capacity',
          value: self.stadiumCapacityWhere,
          operator: self.stadiumCityWhereOp
        })
      }

      axios.post('/api/delete', {
        tables: ['stadium'],
        conditions
      }).then((result) => {
        alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
      }).catch((error) => {
        alert('Code: ' + error.response.data.code + ' ' + 'Message: ' + error.response.data.message)
      })
    },

    submitManager () {
      let self = this

      const conditions = []
      if (self.managerNameWhere !== undefined) {
        conditions.push({
          table: 'manager',
          key: 'name',
          value: self.managerNameWhere,
          operator: self.managerNameWhereOp
        })
      }

      if (self.managerNationalityWhere !== undefined) {
        conditions.push({
          table: 'manager',
          key: 'nationality',
          value: self.managerNationalityWhere,
          operator: self.managerNationalityWhereOp
        })
      }

      axios.post('/api/delete', {
        tables: ['manager'],
        conditions
      }).then((result) => {
        alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
      }).catch((error) => {
        alert('Code: ' + error.response.data.code + ' ' + 'Message: ' + error.response.data.message)
      })
    },

    submitLeague () {
      let self = this

      const conditions = []
      if (self.leagueNameWhere !== undefined) {
        conditions.push({
          table: 'league',
          key: 'name',
          value: self.leagueNameWhere,
          operator: self.leagueNameWhereOp
        })
      }

      if (self.leagueCountryWhere !== undefined) {
        conditions.push({
          table: 'league',
          key: 'country',
          value: self.leagueCountryWhere,
          operator: self.leagueCountryWhereOp
        })
      }

      axios.post('/api/delete', {
        tables: ['league'],
        conditions
      }).then((result) => {
        alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
      }).catch((error) => {
        alert('Code: ' + error.response.data.code + ' ' + 'Message: ' + error.response.data.message)
      })
    },

    submitTeam () {
      let self = this

      const conditions = []
      if (self.teamNameWhere !== undefined) {
        conditions.push({
          table: 'team',
          key: 'name',
          value: self.teamNameWhere,
          operator: self.teamNameWhereOp
        })
      }

      if (self.teamCityWhere !== undefined) {
        conditions.push({
          table: 'team',
          key: 'city',
          value: self.teamCityWhere,
          operator: self.teamCityWhereOp
        })
      }

      if (self.teamTrophiesWhere !== undefined) {
        if (isNaN(parseInt(self.teamTrophiesWhere))) {
          alert('Code: ' + '400' + ' ' + 'Message: ' + self.teamTrophiesWhere + ' is not a number.')
          return
        }
        conditions.push({
          table: 'team',
          key: 'num_trophies',
          value: self.teamTrophiesWhere,
          operator: self.teamTrophiesWhereOp
        })
      }

      if (self.teamSinceWhere !== undefined) {
        if (isNaN(parseInt(self.teamSinceWhere))) {
          alert('Code: ' + '400' + ' ' + 'Message: ' + self.teamSinceWhere + ' is not a number.')
          return
        }
        conditions.push({
          table: 'team',
          key: 'since',
          value: self.teamSinceWhere,
          operator: self.teamSinceWhereOp
        })
      }

      if (self.teamStadiumWhere !== undefined) {
        conditions.push({
          table: 'team',
          key: 'stadium_name',
          value: self.teamStadiumWhere,
          operator: self.teamStadiumWhereOp
        })
      }

      axios.post('/api/delete', {
        tables: ['team'],
        conditions
      }).then((result) => {
        alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
      }).catch((error) => {
        alert('Code: ' + error.response.data.code + ' ' + 'Message: ' + error.response.data.message)
      })
    },

    submitMatch () {
      let self = this

      const conditions = []
      if (self.matchDateWhere !== undefined) {
        conditions.push({
          table: 'match',
          key: 'date',
          value: self.matchDateWhere,
          operator: self.matchDateWhereOp
        })
      }

      if (self.matchRefereeWhere !== undefined) {
        conditions.push({
          table: 'match',
          key: 'referee',
          value: self.matchRefereeWhere,
          operator: self.matchRefereeWhereOp
        })
      }

      axios.post('/api/delete', {
        tables: ['match'],
        conditions
      }).then((result) => {
        alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
      }).catch((error) => {
        alert('Code: ' + error.response.data.code + ' ' + 'Message: ' + error.response.data.message)
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