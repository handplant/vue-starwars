<template>
    <div class="item item--film">
        <template v-if="film">
        {{film.title}}
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            film: state => state.active
        })
    },
    created() {
        this.$store.dispatch('GET_ITEM', 'films')
    },
    beforeDestroy() {
        this.$store.commit('CLEAR_ACTIVE')
    }
}
</script>

<style>

</style>