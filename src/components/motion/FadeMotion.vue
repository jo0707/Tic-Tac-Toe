<script>
    export default {
        name: "FadeMotion",
        props: ['dur']
    }
</script>

<template>
    <Motion 
    :initial="{ opacity: 0 }" 
    :animate="{ opacity: 1, transition: {duration: dur || 0.5}, easing: 'ease-out' }"
    :exit="{ opacity: 0 }">
        <slot></slot>
    </Motion>
</template>