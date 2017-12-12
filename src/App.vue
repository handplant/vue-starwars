<template>
    <div id="app">
        <a class="forkme" href="https://github.com/handplant/vue-starwars"><img src="./assets/forkme.png" alt="github"></a>
        <div class="container">
            <div class="logo">
                <router-link to="/"><img src="./assets/starwars.png" alt="logo"></router-link>
            </div>
            <navigation></navigation>
            <transition :name="transitionName">
                <router-view class="router"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
    name: 'app',
    data() {
        return {
            transitionName: 'slide-left'
        }
    },
    components: {
        Navigation
    },
    beforeRouteUpdate(to, from, next) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        next()
    }
}
</script>

<style lang="scss">
html,
body {
    padding: 0;
    margin: 0;
}
html {
    height: 100%;
}
body {
    background: #eee;
    font-family: 'Lucida Console', Monaco, monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 15px;
    line-height: 1.6;
    overflow-x: hidden;
}

button {
    font-size: 15px;
    line-height: 1.6;
}

#app {
    a {
        text-decoration: none;
    }
}

.forkme {
    position: absolute;
    right: 0;
}

.logo {
    padding: 10px;
    text-align: center;
}

.container {
    position: relative;
    width: 700px;
    margin: 0 auto;
}

@media (max-width: 720px) {
    .container {
        width: 100%;
    }
}

button {
    background: none;
    border: 0;
}

.list,
.item {
    padding: 20px 0;
}
.list__loading,
.list__count,
.list__button,
.item__loading {
    text-align: center;
}
.list__result {
    list-style-type: none;
    padding: 0;
    margin: 10px 0;
}
.list__link,
.item__entry {
    display: flex;
    background: #d7d7d7;
    color: black;
    margin: 3px 0;
    padding: 3px;
    > span.item__entry-key {
        width: 25%;
        font-style: italic;
    }
    > span.item__entry-value {
        width: 75%;
    }
}

@media (max-width: 720px) {
    .item__entry {
        flex-wrap: wrap;

        > span.item__entry-key {
            width: 100%;
        }
        > span.item__entry-value {
            width: 100%;
        }
    }
}

button.list__more {
    border: 0;
    outline: none;
    line-height: normal;
    overflow: visible;
    padding: 3px;
    background: black;
    color: #fff;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
.router {
    position: absolute;
    width: 100%;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
}
</style>
