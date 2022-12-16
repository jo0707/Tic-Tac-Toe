<script>
    export default {
        props: ['type', 'count']
    }
</script>

<template>
    <div class="p-4 bg-cool-gray-700 rounded shadow text-center">
        <h6 class="text-xl mb-6 truncate">{{ type }}</h6>
        <h3 class="text-4xl">{{ count }}</h3>
    </div>
</template>