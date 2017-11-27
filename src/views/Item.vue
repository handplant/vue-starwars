<template>
    <div class="item">
        <div class="item__loading" v-if="!item && loading">
            Loading...
        </div>
        <template v-else>
            <div class="item__entry" v-for="(value, key) in item" :key="key">
                <template v-if="typeof value === 'string'">
                    <span class="item__entry-key">{{key | format}}</span>
                    <span class="item__entry-value">{{value}}</span>
                </template>
                <template v-else>
                    <span class="item__entry-key">{{key}}</span>
                    <span class="item__entry-value">
                        <div class="" v-for="url in value" :key="url">
                            {{url}}
                        </div>
                    </span>
                </template>
            </div>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            type: state => state.route.name.substr(4),
            loading: state => state.loading,
            item: state => state.active
        })
    },
    created() {
        this.$store.dispatch('GET_ITEM', this.type)
    },
    beforeDestroy() {
        this.$store.commit('CLEAR_ACTIVE')
    },
    filters: {
        format: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.replace('_',' ')
        }
    }
}
</script>