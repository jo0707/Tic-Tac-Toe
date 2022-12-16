<script>
    export default {
        name: "SlideDownMotion",
        props: ['dur']
    }
</script>

<template>
    <Motion 
    :initial="{y: -200, opacity: 0}" 
    :animate="{y: 0, opacity: 1, transition: {duration: dur || 0}, ease: 'ease-in-out'}">
        <slot></slot>
    </Motion>
</template>