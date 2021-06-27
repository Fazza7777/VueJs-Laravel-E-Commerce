<template>
<div class="container my-5">
     <button @click="changeLogged" class="btn btn-danger">Change</button>
</div>
</template>
<script>
export default {
    name:'Login',
    methods:{
        changeLogged(){
            this.$emit('changeLoggedStatus')
        }
    }
}
</script>