<template>
    <span class="filmlink" v-if="item"> {{ getName()  }}</span>
</template>

<script>
import { mapState } from 'vuex'
import api from '../store/api'

export default {
    props: ['url'],
    methods : {
        // isLink : function  () {
        //     return (this.url.search("http") != -1 ? 1 : 0);
        // },
        getName: function() {
            // console.log(this.item);
            if (this.item.name) return this.item.name;
            if (this.item.title) return this.item.title;
        }
    },
    data: function () {
       return {
           id: api.getId(this.url),
           type : api.getType(this.url)
       }
    },
    computed: {
        // ...mapState({
        //     item : state => state.items[this.type + this.id],
        // }),
        item()  {
            // console.log(this.$store.state[this.type].items[this.id]);
            var key = this.type+ this.id;
            return this.$store.state.items[key];
        }
    },
    created() {
        this.$store.dispatch('GET_ITEM2', { type: this.type, id: this.id });
    }
}
</script>

<style lang="scss">
    .filmlink {
        padding: 3px;
        background: black;
        color: #fff;
    }
</style>