<template>
    <span>
        <router-link class="item-link" :to="itemUrl" v-if="item && isLink">{{ itemName }}</router-link>
        <span v-if="!item">{{ link }}</span>
    </span>
</template>

<script>
import api from '../store/api'

export default {
    props: ['link'],
    data: function() {
        return {
            id: api.getId(this.link),
            type: api.getType(this.link)
        }
    },
    computed: {
        item() {
            return this.$store.state.items[this.key]
        },
        itemName() {
            if (this.item.name) return this.item.name
            if (this.item.title) return this.item.title
        },
        itemUrl() {
            return '/' + api.getType(this.link) + '/' + api.getId(this.link)
        },
        isLink() {
            if (this.link && typeof this.link === 'string') {
                return this.link.search('http') != -1 ? 1 : 0
            }
            return 0
        },
        key() {
            return this.type + this.id
        }
    },
    created() {
        if (this.isLink) {
            this.$store.dispatch('LOAD_ITEM', { type: this.type, id: this.id })
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