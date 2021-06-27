<template>
<div class="container my-5">
   <div class="row justify-content-center">
       <div class="col-lg-6 col-12">
           <div class="card shadow">
                <div class="card-header bg-primary ">
                    <h3 class="text-white">Login</h3>
                </div>
                <div class="card-body px-5">
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <label for="">Email</label>
                            <input type="email" v-model="creditial.email" @input="emailFieldChange" class="form-control">
                        </div>
                           <div class="form-group">
                            <label for="">Password</label>
                            <input type="password" v-model="creditial.password" @input="passwordFieldChange" class="form-control">
                        </div>
                        <button class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
       </div>
   </div>
</div>
</template>
<script>
import mixins from '../mixin/mixin'
export default {
    mixins:[mixins],
    name:'Login',
    data(){
        return{
          creditial:{
              email:'mary@gmail.com',
              password:'password'
          }
        }
    },
    methods:{
        async login(){
            let url = this.$baseUrl + 'login';
            let data = await this.sendData(url,this.creditial);
            const {success,token} = data;
            if(success){
                localStorage.setItem('token',token);
                this.$emit('changeLogin');
                this.$router.push({name:'Home'})
            }else{
             this.$router.push({name:'Login'})
            }
        },
      emailFieldChange(){
        //console.log(this.creditial.email);
      },
       passwordFieldChange(){
        //console.log(this.creditial.password);
      }
    }
}
</script>