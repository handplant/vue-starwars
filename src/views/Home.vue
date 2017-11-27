<template>
    <div class="home">
        <div class="home__scroll">
            <div class="home__scroll-content">
                <h2>VUE WARS</h2>
                It is a period of civil war.
                Rebel spaceships, striking from a
                hidden base, have won their
                first victory against the evil
                Galactic Empire. During the battle,
                Rebel spies managed to steal
                secret plans to the Empire's ultimate
                weapon, the Death Star, an armoured
                space station with enough power to
                destroy an entire planet. Pursued by the
                Empire's sinister agents, Princess
                Leia races home aboard her starship,
                custodian of the stolen plans that can save
                her people and restore freedom to the galaxy...
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.home {
    height: 500px;
}
.home__scroll {
    position: absolute;
    width: 18em;
    height: 50em;
    bottom: 0;
    left: 50%;
    margin-left: -9em;
    font-size: 350%;
    font-weight: bold;
    text-align: justify;
    overflow: hidden;
    transform-origin: 50% 100%;
    transform: perspective(300px) rotateX(25deg);
}
.home__scroll:after {
    position: absolute;
    content: ' ';
    left: 0;
    right: 0;
    top: 0;
    bottom: 60%;
    background-image: linear-gradient(top, rgba(0, 0, 0, 1) 0%, transparent 100%);
    pointer-events: none;
}

.home__scroll-content {
    position: absolute;
    top: 100%;
    animation: scroll 100s linear 4s infinite;
    h2 {
        text-align: center;
    }
}

@keyframes scroll {
    0% {
        top: 100%;
    }
    100% {
        top: -170%;
    }
}
</style>
