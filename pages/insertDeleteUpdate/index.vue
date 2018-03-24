<template>
    <section class="users-view">
        <div class="content">
            <div class="subsection">
                <div style="margin: 25px 10px;">
                    <div class="subsection-title" style="vertical-align: middle;">Player</div>
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
                                    <td>Position</td>
                                    <td>
                                        <select v-model="selected" style="vertical-align: middle;">
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
                                        <input v-model="message" placeholder="Integer" style="text-align: center">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dominant Foot</td>
                                    <td>
                                        <select v-model="selected" style="vertical-align: middle;">
                                            <option disabled value=" ">Select One</option>
                                            <option>Left</option>
                                            <option>Right</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>
                                        <input v-model="message" placeholder="in kg" style="text-align: center">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Height</td>
                                    <td>
                                        <input v-model="message" placeholder="in cm" style="text-align: center">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Team Name</td>
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
                    <span class="subsection-title" style="vertical-align: middle;">Stadium</span>
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
                                    <td>Capacity</td>
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