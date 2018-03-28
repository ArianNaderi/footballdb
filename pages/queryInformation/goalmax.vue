<template>
    <section class="users-view">
        <div class="content">
            <div class="subsection">
                <div style="margin: 25px 10px;">
                    <div class="subsection-title" style="vertical-align: middle;">Goals</div>
                    <div style="margin: 25px 10px;">
                        <span style="vertical-align: middle;">Team with MAX average goals: </span>
                    </div>
                    <ul style="list-style-type: none; padding: 0; margin: 0;">
                        <li v-for="(team, index) in teams" :key="index" style="padding: 10px 20px; margin: 0 25px; position: relative;">
                            {{ 'Team: ' + team.name + ',  Average Goals: '+ team.max_avg_goals}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    import axios from '~/plugins/axios'

    export default {
      async asyncData () {
        let { data } = await axios.get('/api/nestedAggregation/max')
        return { teams: data }
      },

      head () {
        return {
          title: 'Stadiums'
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