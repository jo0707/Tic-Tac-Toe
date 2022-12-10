<script>
import Board from "./components/Board.vue";
import FadeScaleMotion from "./components/motion/FadeScaleMotion.vue";
import SlideDownMotion from "./components/motion/SlideDownMotion.vue";
import Scoreboard from "./components/Scoreboard.vue";

  export default {
    data() {
      return {
        title: "Tic Tac Toe!",
        animDuration: 0.9
      }
    },
    components: {
      Board,
      Scoreboard,
      FadeScaleMotion,
      SlideDownMotion
    }
  }
</script>

<template>
  <div>
    <div class="h-screen text-slate-100 bg-gray-800 flex flex-col">
      
      <SlideDownMotion :dur="1">
        <h1 class="text-xl py-6 md:text-3xl lg:text-5xl py-12 font-mono text-center bg-cool-gray-700 shadow">{{ title }}</h1>
      </SlideDownMotion>

      <div class="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:gap-8 place-items-center flex-1">
          <FadeScaleMotion :dur="animDuration">
            <Board class="h-64 md:h-96 lg:h-112 w-64 md:w-96 lg:w-112"/>
           </FadeScaleMotion>
          
          <FadeScaleMotion class="self-stretch md:self-center" :dur="animDuration">
            <Scoreboard class="h-64 md:h-96 lg:h-112 md:w-96 lg:w-112"/>
          </FadeScaleMotion>
      </div>
    </div>
  </div>
</template>