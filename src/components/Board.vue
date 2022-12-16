<script>
import _ from 'lodash';
import Tile from "./Tile.vue";
import { game } from "../game/game";
import { computed } from "vue";

    export default {
        data() {
            return {
                game: game
            }
        },
        provide() {
            return {
                winner: computed(() => this.game.winner)
            }
        },
        methods: {
            setChoice(index) {
                if (this.game.turn == 'O') this.game.setCell(index)
            }
        },
        computed: {
            flatBoard() { 
                return _.map(this.game.board, (v, i) => { return {index: i, state: v}}) 
            }
        },
        components: {Tile}
    }
</script>

<template>
    <div class="grid grid-cols-3 grid-rows-3 gap-4 transition-all" :class="{'filter blur-md': game.winner && false}">
        <Tile v-for="d in flatBoard" :key="d.index" :id="d.index" :state="d.state" @click="setChoice(d.index)"/>
    </div>
</template>