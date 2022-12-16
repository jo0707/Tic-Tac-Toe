<script>
import _ from 'lodash';
import { game } from "../game/game";
import ScoreCard from "./ScoreCard.vue";
import FadeMotion from "./motion/FadeMotion.vue";

    export default {
        data() {
            return {
                game: game,
                oWinCount: 0,
                xWinCount: 0,
            }
        },
        methods: {
            reset() {
                this.game.reset()
            }
        },
        computed: {
            status() {
                if (!this.game.winner) {
                    return `${ this.game.turn === 'O' ? "Your" : "Computer"} turn...`
                } else if (this.game.winner === -1) {
                    return "draw!"
                } else {
                    if (this.game.winner === 1) this.oWinCount++
                    if (this.game.winner === 2) this.xWinCount++
                    return `${this.game.turn === 'O' ? "Computer" : "You"} win!`
                }
            }
        },
        components: { ScoreCard, FadeMotion }
    }
</script>

<template>
    <div class="text-center">
        <button @click="reset()" class="md:hidden md:mb-2 w-full px-6 py-4 rounded shadow bg-cool-gray-700 transition transform hover:scale-110 hover:shadow-lg hover:bg-cool-gray-600">RESET</button>

        <FadeMotion
        class="mb-8 md:mb-16"
        :key="status">
            <h1 class="text-xl md:text-3xl">{{ status }}</h1>
        </FadeMotion>
    
        <div class="flex flex-col mb-8 p-4 bg-cool-gray-600/25">
            <h3 class="flex-shrink max-h-min text-2xl col-span-2 mb-8">Score</h3>
            <div class="grid grid-cols-2 gap-8">
                <ScoreCard :type="'You'" :count="oWinCount"/>
                <ScoreCard :type="'Computer'" :count="xWinCount"/>
            </div>
        </div>

        <button @click="reset()" class="-md:hidden w-full px-6 py-4 rounded shadow bg-cool-gray-700 transition transform hover:scale-110 hover:shadow-lg hover:bg-cool-gray-600">RESET</button>
    </div>
</template>