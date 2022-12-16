<script>
    export default {
        name: "FadeMotion",
        props: ['dur']
    }
</script>

<template>
    <Motion :initial="{ opacity: 0, scale: 0.6 }" :animate="{ opacity: 1, scale: 1, transition: {duration: dur || 0.5}, easing: 'ease-out' }">
        <slot></slot>
    </Motion>
</template>