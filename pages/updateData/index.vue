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
                                        <td colspan="2">Attributes to update:</td>
                                        <td style="padding-right: 20px;"></td>
                                        <td colspan="4">For players with following characteristics:</td>
                                    </tr>
                                </thead>
                                <tbody style="font-size: 12px;">
                                    <tr style="vertical-align: middle; text-align: left" >
                                        <td>Name</td>
                                        <td>
                                            <input v-model="playerNameUpdate" placeholder="String" style="text-align: center" :value="playerNameUpdate">
                                        </td>
                                        <td></td>
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
                                        <td>
                                            <input v-model="playerNationalityUpdate" placeholder="String" style="text-align: center" :value="playerNationalityUpdate">
                                        </td>
                                        <td></td>
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
                                        <td>
                                            <select v-model="playerPositionUpdate" style="vertical-align: middle;" :value="playerPositionUpdate">
                                                <option disabled value=" ">Select One</option>
                                                <option>Goalkeeper</option>
                                                <option>Defender</option>
                                                <option>Midfielder</option>
                                                <option>Forward</option>
                                            </select>
                                        </td>
                                        <td></td>
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
                                        <td>
                                            <input v-model="playerGoalsUpdate" placeholder="Integer" style="text-align: center" :value="playerGoalsUpdate">
                                        </td>
                                        <td></td>
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
                                        <td>
                                            <select v-model="playerFootUpdate" style="vertical-align: middle;" :value="playerFootUpdate">
                                                <option disabled value=" ">Select One</option>
                                                <option>Left</option>
                                                <option>Right</option>
                                            </select>
                                        </td>
                                        <td></td>
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
                                        <td>
                                            <input v-model="playerWeightUpdate" placeholder="in kg" style="text-align: center" :value="playerWeightUpdate">
                                        </td>
                                        <td></td>
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
                                        <td>
                                            <input v-model="playerHeightUpdate" placeholder="in cm" style="text-align: center" :value="playerHeightUpdate">
                                        </td>
                                        <td></td>
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
                                        <td colspan="2">Attributes to update:</td>
                                        <td style="padding-right: 20px;"></td>
                                        <td colspan="4">For stadiums with following characteristics:</td>
                                    </tr>
                                </thead>
                                <tbody style="font-size: 12px;">
                                    <tr style="vertical-align: middle; text-align: left" >
                                        <td>Name</td>
                                        <td>
                                            <input v-model="stadiumNameUpdate" placeholder="String" style="text-align: center" :value="stadiumNameUpdate">
                                        </td>
                                        <td></td>
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
                                        <td>
                                            <input v-model="stadiumCityUpdate" placeholder="String" style="text-align: center" :value="stadiumCityUpdate">
                                        </td>
                                        <td></td>
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
                                        <td>
                                            <input v-model="stadiumCapacityUpdate" placeholder="Integer" style="text-align: center" :value="stadiumCapacityUpdate">
                                        </td>
                                        <td></td>
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
                                        <td colspan="2">Attributes to update:</td>
                                        <td style="padding-right: 20px;"></td>
                                        <td colspan="4">For managers with following characteristics:</td>
                                    </tr>
                                </thead>
                                <tbody style="font-size: 12px;">
                                    <tr style="vertical-align: middle; text-align: left" >
                                        <td>Name</td>
                                        <td>
                                            <input v-model="managerNameUpdate" placeholder="String" style="text-align: center" :value="managerNameUpdate">
                                        </td>
                                        <td></td>
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
                                        <td>
                                            <input v-model="managerNationalityUpdate" placeholder="String" style="text-align: center" :value="managerNationalityUpdate">
                                        </td>
                                        <td></td>
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
                                        <td colspan="2">Attributes to update:</td>
                                        <td style="padding-right: 20px;"></td>
                                        <td colspan="4">For leagues with following characteristics:</td>
                                    </tr>
                                </thead>
                                <tbody style="font-size: 12px;">
                                    <tr style="vertical-align: middle; text-align: left" >
                                        <td>Name</td>
                                        <td>
                                            <input v-model="leagueNameUpdate" placeholder="String" style="text-align: center" :value="leagueNameUpdate">
                                        </td>
                                        <td></td>
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
                                        <td>
                                            <input v-model="leagueCountryUpdate" placeholder="String" style="text-align: center" :value="leagueCountryUpdate">
                                        </td>
                                        <td></td>
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
    /* eslint-disable indent */

    import axios from '~/plugins/axios'

export default {
  playerData () {
    return {
      playerNameUpdate: '',
      playerNationalityUpdate: '',
      playerPositionUpdate: '',
      playerGoalsUpdate: '',
      playerFootUpdate: '',
      playerWeightUpdate: '',
      playerHeightUpdate: '',
      playerNameWhere: '',
      playerNationalityWhere: '',
      playerPositionWhere: '',
      playerGoalsWhere: '',
      playerFootWhere: '',
      playerWeightWhere: '',
      playerHeightWhere: '',
      playerNameWhereOp: '',
      playerNationalityWhereOp: '',
      playerPositionWhereOp: '',
      playerGoalsWhereOp: '',
      playerFootWhereOp: '',
      playerWeightWhereOp: '',
      playerHeightWhereOp: ''
    }
  },

  stadiumData () {
    return {
      stadiumNameUpdate: '',
      stadiumCityUpdate: '',
      stadiumCapacityUpdate: '',
      stadiumNameWhere: '',
      stadiumCityWhere: '',
      stadiumCapacityWhere: '',
      stadiumNameWhereOp: '',
      stadiumCityWhereOp: '',
      stadiumCapacityWhereOp: ''
    }
  },

  managerData () {
    return {
      managerNameUpdate: '',
      managerNationalityUpdate: '',
      managerNameWhere: '',
      managerNationalityWhere: '',
      managerNameWhereOp: '',
      managerNationalityWhereOp: ''
    }
  },

  leagueData () {
    return {
      leagueNameUpdate: '',
      leagueCountryUpdate: '',
      leagueNameWhere: '',
      leagueCountryWhere: '',
      leagueNameWhereOp: '',
      leagueCountryWhereOp: ''
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

      const attributes = []
      if (self.playerNameUpdate !== undefined) {
        attributes.push({
          key: 'name',
          value: self.playerName,
          dataType: 'string'
        })
      }

      if (self.playerNationalityUpdate !== undefined) {
        attributes.push({
          key: 'nationality',
          value: self.playerNationalityUpdate,
          dataType: 'string'
        })
      }

      if (self.playerPositionUpdate !== undefined) {
        attributes.push({
          key: 'position',
          value: self.playerPositionUpdate,
          dataType: 'string'
        })
      }

      if (self.playerGoalsUpdate !== undefined) {
        attributes.push({
          key: 'num_goals',
          value: self.playerGoalsUpdate,
          dataType: 'number'
        })
      }

      if (self.playerFootUpdate !== undefined) {
        attributes.push({
          key: 'dominant_foot',
          value: self.playerFootUpdate,
          dataType: 'string'
        })
      }

      if (self.playerWeightUpdate !== undefined) {
        attributes.push({
          key: 'weight',
          value: self.playerWeightUpdate,
          dataType: 'number'
        })
      }

      if (self.playerHeightUpdate !== undefined) {
        attributes.push({
          key: 'height',
          value: self.playerHeightUpdate,
          dataType: 'number'
        })
      }

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
        conditions.push({
          table: 'player',
          key: 'weight',
          value: self.playerWeightWhere,
          operator: self.playerWeightWhereOp
        })
      }

      if (self.playerHeightWhere !== undefined) {
        conditions.push({
          table: 'player',
          key: 'height',
          value: self.playerHeightWhere,
          operator: self.playerHeightWhereOp
        })
      }

      axios.post('/api/update', {
        tables: ['player'],
        attributes,
        conditions
      }).then((result) => {
        alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
      }).catch((error) => {
        alert('Code: ' + error.response.data.code + ' ' + 'Message: ' + error.response.data.message)
      })
    },

    submitStadium () {
      let self = this

      const attributes = []
      if (self.stadiumNameUpdate !== undefined) {
        attributes.push({
          key: 'name',
          value: self.stadiumNameUpdate,
          dataType: 'string'
        })
      }

      if (self.stadiumCityUpdate !== undefined) {
        attributes.push({
          key: 'city',
          value: self.stadiumCityUpdate,
          dataType: 'string'
        })
      }

      if (self.stadiumCapacityUpdate !== undefined) {
        attributes.push({
          key: 'capacity',
          value: self.stadiumCapacityUpdate,
          dataType: 'number'
        })
      }

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
        conditions.push({
          table: 'stadium',
          key: 'capacity',
          value: self.stadiumCapacityWhere,
          operator: self.stadiumCityWhereOp
        })
      }

      axios.post('/api/update', {
        tables: ['stadium'],
        attributes,
        conditions
      }).then((result) => {
        alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
      }).catch((error) => {
        alert('Code: ' + error.response.data.code + ' ' + 'Message: ' + error.response.data.message)
      })
    },

    submitManager () {
      let self = this

      const attributes = []
      if (self.managerNameUpdate !== undefined) {
        attributes.push({
          key: 'name',
          value: self.managerNameUpdate,
          dataType: 'string'
        })
      }

      if (self.managerNationalityUpdate !== undefined) {
        attributes.push({
          key: 'nationality',
          value: self.managerNationalityUpdate,
          dataType: 'string'
        })
      }

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

      axios.post('/api/update', {
        tables: ['manager'],
        attributes,
        conditions
      }).then((result) => {
        alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
      }).catch((error) => {
        alert('Code: ' + error.response.data.code + ' ' + 'Message: ' + error.response.data.message)
      })
    },

    submitLeague () {
      let self = this

      const attributes = []
      if (self.leagueNameUpdate !== undefined) {
        attributes.push({
          key: 'name',
          value: self.leagueNameUpdate,
          dataType: 'string'
        })
      }

      if (self.leagueCountryUpdate !== undefined) {
        attributes.push({
          key: 'country',
          value: self.leagueCountryUpdate,
          dataType: 'string'
        })
      }

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

      axios.post('/api/update', {
        tables: ['league'],
        attributes,
        conditions
      }).then((result) => {
        alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
      }).catch((error) => {
        alert('Code: ' + error.response.data.code + ' ' + 'Message: ' + error.response.data.message)
      })
    },

    submitTeam () {
      let self = this
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