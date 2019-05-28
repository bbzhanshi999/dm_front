<template>
    <div>
        <span>{{username}}</span>
    </div>
</template>

<script>
    export default {
        name: "Index",
        computed:{
            username () {
                debugger
                return this.$store.state.user.username;
            }
        }
    }
</script>

<style scoped>

</style>
