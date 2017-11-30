<template>
    <span>
        <router-link class="item-link" :to="getInternalUrl(value)" v-if="item && isLink">{{ getName() }}</router-link>
        <span v-if="!item"> {{ value }}</span>
    </span>
</template>

<script>
import api from '../store/api'

export default {
    props: ['value'],
    methods : {
        getName: function() {
            if (this.item.name) return this.item.name;
            if (this.item.title) return this.item.title;
        },
        getInternalUrl: function () {
          return '/' + api.getType(this.value) + '/' + api.getId(this.value)
        }
    },
    data: function () {
       return {
           id: api.getId(this.value),
           type : api.getType(this.value)
       }
    },
    computed: {
        item() {
            return this.$store.state.items[this.key];
        },
        isLink: function() {
            if (this.value && typeof this.value === 'string') {
                return (this.value.search("http") != -1 ? 1 : 0);
                }
            return 0;
        },
        key: function() {
          return this.type + this.id;
        }

    },
    created() {
        if (this.isLink) {
            this.$store.dispatch('LOAD_ITEM', {type: this.type, id: this.id});
        }
    }
}
</script>

<style lang="scss">
    .item-link {
        padding: 3px;
        background: black;
        color: #fff;
    }
</style>