<template>
    <div class="list">
        <div class="list__loading" v-if="!count && loading">
            Loading...
        </div>
        <template v-else>
            <div class="list__count">
                {{count}}
            </div>
            <transition-group tag="ul" class="list__result" name="list">
                <li class="list_item" v-for="item in result" :key="item.url">
                    <router-link class="list__link" :to="'/' + type  + '/' + itemId(item.url)" >
                        <span v-if="item.name">{{item.name}}</span>
                        <span v-else>{{item.title}}</span>
                    </router-link>
                </li>
            </transition-group>
            <div class="list__button">
                <button type="button" class="list__more" v-if="next" @click="loadMore">
                    <span v-if="!loading">more</span>
                    <span v-else>loading</span>
                </button>
            </div>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import api from '../store/api'
export default {
    computed: {
        itemId() {
            return url => {
                return api.getId(url)
            }
        },
        ...mapState({
            type: state => state.route.name,
            loading: state => state.loading,
            count: state => state[state.route.name].count,
            next: state => state[state.route.name].next,
            result: state => state[state.route.name].result
        })
    },
    methods: {
        loadMore() {
            this.$store.dispatch('GET_LIST', { type: this.type, next: this.next })
        }
    },
    watch: {
        type: function(value) {
            if (!this.result.length) this.$store.dispatch('GET_LIST', { type: this.type, next: false })
        }
    },
    created() {
        if (!this.result.length) this.$store.dispatch('GET_LIST', { type: this.type, next: false })
    }
}
</script>

<style>
.list-enter-active {
    transition: all 0.4s;
}
.list-leave-active {
    transition: all 0s;
}
.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
