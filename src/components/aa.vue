<template>
    <div>
        {{aa}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            aa:'555'
        }
    },
    created(){
        console.log(this.$route.params)
    }
}
</script>
<style lang="scss">

</style>