import _ from 'lodash'
import {computed, reactive, ref, watch} from 'vue'

const board = ref([0,0,0, 0,0,0, 0,0,0])
const turn = ref('O')
const turnCode = computed(() => game.turn === 'O' ? 2 : 1)

const winner = computed(() => {
    if (_.filter(game.board, (d) => d != 0).length < 5) return null
    
    let y = _.floor(game.index / 3)
    let x = game.index % 3

    // ref : https://stackoverflow.com/a/1056352
    // horizontal
    for(let i = 0;i < 3;i++) {
        if (game.board[y * 3 + i] != game.turnCode) break
        if (i == 2) return game.turnCode
    }
        

    // vertical
    for(let i = 0;i < 3;i++) {
        if (game.board[x + i * 3] != game.turnCode) break
        if (i == 2) return game.turnCode
    }

    // diagonal
    if (x == y) {
        for(let i = 0;i < 3;i++) {
            if (game.board[i * 4] != game.turnCode) break
            if (i == 2) return game.turnCode
        }
    }

    // anti-diagonal
    if (x + y == 2) {
        for(let i = 0;i < 3;i++) {
            if (game.board[(i + 1) * 2] != game.turnCode) break
            if (i == 2) return game.turnCode
        }
    }

    if (!game.board.includes(0)) return -1

    return null
})

export const game = reactive({
    board, turn, turnCode, winner, index: 0,
    setCell(index) {
        if (game.board[index] == 0 && !game.winner) {
            game.board[index] = (game.turn === 'O' ? 1 : 2)
            game.turn = (game.turn === 'O' ? 'X' : 'O')
            game.index = index
        }
    },
    reset() {
        game.board = [0,0,0, 0,0,0, 0,0,0]
        game.turn = (game.turn === 'O' ? 'X' : 'O')
    }
})

// bot
watch(
    () => game.turn,
    (turn, prevturn) => {
        console.log(`now game turn ${turn} ${game.winner}`);

        setTimeout(() => {
            if (turn == 'X' && !game.winner) {
                let indexes = _.map(game.board, (e, i) => {return e == 0 ? i : -1}).filter(e => e >= 0)
                let rand = Math.floor(Math.random() * 10) % (indexes.length - 1)
                let i = indexes[rand]
                game.setCell(i)
            }
                
        }, 900)
    }
)