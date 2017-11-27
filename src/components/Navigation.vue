<template>
    <div class="navigation">
        <ul>
            <li v-for="(item, key) in navigation" :key="key">
                <router-link :to="'/' + key">{{key}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            navigation: state => state.navigation,
            isActive: state => state.route.name
        })
    }
}
</script>

<style lang="scss">
.navigation {
    margin: 10px 0;
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style-type: none;
        padding: 0;
        margin: 0;
        li {
            padding: 5px 10px;
            a {
                padding: 3px;
                background: black;
                color: #fff;
                &.router-link-active {
                    background: #fff;
                    color: black;
                }
            }
        }
    }
}
</style>