<template>
    <div class="item">
        <div class="item__loading" v-if="!item && loading">
            Loading...
        </div>
        <template v-else>
            <div class="item__entry" v-for="(value, key) in item" :key="key">
                <template v-if="typeof value === 'string' || typeof value === 'number'">
                    <span class="item__entry-key">{{key | format}}</span>
                    <span class="item__entry-value">{{value}}</span>
                </template>
                <template v-else>
                    <span class="item__entry-key">{{key}}</span>
                    <span class="item__entry-value">
                        <div class="" v-for="url in value" :key="url">
                            <router-link :to="getInternalUrl(url)">{{url}}</router-link>
                        </div>
                    </span>
                </template>
            </div>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import api from '../store/api'
export default {
    computed: {
        ...mapState({
            type: state => state.route.name.substr(4),
            loading: state => state.loading,
            item: state => state.active
        }),
        getInternalUrl() {
            return url => {
                return '/' + api.getType(url) + '/' + api.getId(url)
            }
        }
    },
    created() {
        this.$store.dispatch('GET_ITEM', this.type)
    },
    beforeDestroy() {
        this.$store.commit('CLEAR_ACTIVE')
    },
    watch: {
        $route() {
            this.$store.dispatch('GET_ITEM', this.type)
        }
    },
    filters: {
        format: function(value) {
            if (!value) return ''
            value = value.toString()
            return value.replace('_', ' ')
        }
    }
}
</script>