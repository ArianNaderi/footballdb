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
                                    <tr>
                                        <td colspan="2">Attributes to update:</td>
                                        <td style="padding-right: 20px;"></td>
                                        <td colspan="4">For teams with following characteristics:</td>
                                    </tr>
                                </thead>
                                <tbody style="font-size: 12px;">
                                    <tr style="vertical-align: middle; text-align: left" >
                                        <td>Name</td>
                                        <td>
                                            <input v-model="teamNameUpdate" placeholder="String" style="text-align: center" :value="teamNameUpdate">
                                        </td>
                                        <td></td>
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
                                        <td>
                                            <input v-model="teamCityUpdate" placeholder="String" style="text-align: center" :value="teamCityUpdate">
                                        </td>
                                        <td></td>
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
                                        <td>
                                            <input v-model="teamTrophiesUpdate" placeholder="Integer" style="text-align: center" :value="teamTrophiesUpdate">
                                        </td>
                                        <td></td>
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
                                        <td>
                                            <input v-model="teamSinceUpdate" placeholder="YYYY" style="text-align: center" :value="teamSinceUpdate">
                                        </td>
                                        <td></td>
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
                                        <td>
                                            <input v-model="teamStadiumUpdate" placeholder="String" style="text-align: center" :value="teamStadiumUpdate">
                                        </td>
                                        <td></td>
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
                                    <td colspan="2">Attributes to update:</td>
                                    <td style="padding-right: 20px;"></td>
                                    <td colspan="4">For matches with following characteristics:</td>
                                </tr>
                            </thead>
                            <tbody style="font-size: 12px;">
                                <tr style="vertical-align: middle; text-align: left" >
                                    <td>Date</td>
                                    <td>
                                        <input v-model="matchDateUpdate" placeholder="YYYY-MM-DD" style="text-align: center" :value="matchDateUpdate">
                                    </td>
                                    <td></td>
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
                                    <td>
                                        <input v-model="matchRefereeUpdate" placeholder="String" style="text-align: center" :value="matchRefereeUpdate">
                                    </td>
                                    <td></td>
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
      teamNameUpdate: '',
      teamCityUpdate: '',
      teamTrophiesUpdate: '',
      teamSinceUpdate: '',
      teamStadiumUpdate: '',
      teamNameWhere: '',
      teamCityWhere: '',
      teamTrophiesWhere: '',
      teamSinceWhere: '',
      teamStadiumWhere: '',
      teamNameWhereOp: '',
      teamCityWhereOp: '',
      teamTrophiesWhereOp: '',
      teamSinceWhereOp: '',
      teamStadiumWhereOp: ''
    }
  },

  matchData () {
    return {
      matchDateUpdate: '',
      matchRefereeUpdate: '',
      matchDateWhere: '',
      matchRefereeWhere: '',
      matchDateWhereOp: '',
      matchRefereeWhereOp: ''
    }
  },

  methods: {
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
        if (isNaN(parseInt(self.playerGoalsUpdate))) {
          alert('Code: ' + '400' + ' ' + 'Message: ' + self.playerGoalsUpdate + ' is not a number.')
          return
        }
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
        if (isNaN(parseInt(self.playerWeightUpdate))) {
          alert('Code: ' + '400' + ' ' + 'Message: ' + self.playerWeightUpdate + ' is not a number.')
          return
        }
        attributes.push({
          key: 'weight',
          value: self.playerWeightUpdate,
          dataType: 'number'
        })
      }

      if (self.playerHeightUpdate !== undefined) {
        if (isNaN(parseInt(self.playerHeightUpdate))) {
          alert('Code: ' + '400' + ' ' + 'Message: ' + self.playerHeightUpdate + ' is not a number.')
          return
        }
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
        if (isNaN(parseInt(self.stadiumCapacityUpdate))) {
          alert('Code: ' + '400' + ' ' + 'Message: ' + self.stadiumCapacityUpdate + ' is not a number.')
          return
        }
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

      const attributes = []
      if (self.teamNameUpdate !== undefined) {
        attributes.push({
          key: 'name',
          value: self.teamNameUpdate,
          dataType: 'string'
        })
      }

      if (self.teamCityUpdate !== undefined) {
        attributes.push({
          key: 'city',
          value: self.teamCityUpdate,
          dataType: 'string'
        })
      }

      if (self.teamTrophiesUpdate !== undefined) {
        if (isNaN(parseInt(self.teamTrophiesUpdate))) {
          alert('Code: ' + '400' + ' ' + 'Message: ' + self.teamTrophiesUpdate + ' is not a number.')
          return
        }
        attributes.push({
          key: 'num_trophies',
          value: self.teamTrophiesUpdate,
          dataType: 'number'
        })
      }

      if (self.teamSinceUpdate !== undefined) {
        if (isNaN(parseInt(self.teamSinceUpdate))) {
          alert('Code: ' + '400' + ' ' + 'Message: ' + self.teamSinceUpdate + ' is not a number.')
          return
        }
        attributes.push({
          key: 'since',
          value: self.teamSinceUpdate,
          dataType: 'number'
        })
      }

      if (self.teamStadiumUpdate !== undefined) {
        attributes.push({
          key: 'stadium_name',
          value: self.teamStadiumUpdate,
          dataType: 'string'
        })
      }

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

      axios.post('/api/update', {
        tables: ['team'],
        attributes,
        conditions
      }).then((result) => {
        alert('Code: ' + result.data.code + ' ' + 'Message: ' + result.data.message)
      }).catch((error) => {
        alert('Code: ' + error.response.data.code + ' ' + 'Message: ' + error.response.data.message)
      })
    },

    submitMatch () {
      let self = this

      const attributes = []
      if (self.matchDateUpdate !== undefined) {
        attributes.push({
          key: 'date',
          value: self.matchDateUpdate,
          dataType: 'string'
        })
      }

      if (self.matchRefereeUpdate !== undefined) {
        attributes.push({
          key: 'referee',
          value: self.matchRefereeUpdate,
          dataType: 'string'
        })
      }

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

      axios.post('/api/update', {
        tables: ['match'],
        attributes,
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