<script>
import FadeMotion from './motion/FadeMotion.vue';

    export default {
    props: ["state", "id"],
    inject: ["winner"],
    data() {
        return {
            isOver: this.winner
        }
    },
    computed: {
        text() {
            switch (this.state) {
                case 0:
                    return "";
                case 1:
                    return "o";
                case 2:
                    return "x";
            }
        }
    },
    components: { FadeMotion }
}
</script>

<template>
    <FadeMotion :dur="0.3 * id" class="grid w-auto rounded-sm shadow-sm bg-slate-700 transition-all duration-75 place-content-center" :class="{'hover:bg-slate-600 hover:shadow-lg': state == 0 && !isOver}">
        <Presence>
            <FadeMotion v-show="text" :dur="0.2" :key="text">
                <p class="text-3xl lg:text-5xl font-mono select-none">{{ text }}</p>
            </FadeMotion>
        </Presence>
    </FadeMotion>
</template>