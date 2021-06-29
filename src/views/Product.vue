<template>
    <div>

        <h1>{{id}}</h1>
        <h1>{{name}}</h1>
    </div>
</template>
<script>
export default {
    name : "Product",
    data(){
        return{
           id : null,
           name : null
        }
    },
    beforeMount(){
      this.id = this.$route.params.id;
      this.name = this.$route.params.name;
      console.log(this.$route.params);
    }
}
</script>