<template>
 <div class="container my-5">
<div class="row py-3"></div>
   <div class="row justify-content-center">
       <div class="col-lg-6 col-12">
           <div class="card shadow mt-5">
                <div class="card-header bg-primary ">
                    <h3 class="text-white">Register</h3>
                </div>
                <div class="card-body px-5">
                    <form @submit.prevent="register">
                        <div class="form-group">
                            <label for="">Name</label>
                            <input type="text" v-model="creditial.name" :class="{'is-invalid':errors.name}"  class="form-control">
                            <small v-if="errors.name" class="text text-danger"><strong>{{errors.name[0]}}</strong></small>

                        </div>
                        <div class="row">
                            <div class="col-6">
                               <div class="form-group">
                                    <label for="">Phone</label>
                                    <input type="number" v-model="creditial.phone" :class="{'is-invalid':errors.phone}"  class="form-control">
                                    <small v-if="errors.phone" class="text text-danger"><strong>{{errors.phone[0]}}</strong></small>
                                </div>
                            </div>
                            <div class="col-6">
                               <div class="form-group">
                                    <label for="">Email</label>
                                    <input type="email" v-model="creditial.email" :class="{'is-invalid':errors.email}" class="form-control">
                                    <small v-if="errors.email" class="text text-danger"><strong>{{errors.email[0]}}</strong></small>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                        <label for="">Password</label>
                                        <input type="password" :class="{'is-invalid':errors.password}" v-model="creditial.password" class="form-control">
                                        <small v-if="errors.password" class="text text-danger"><strong>{{errors.password[0]}}</strong></small>
                                </div>
                            </div>
                            <div class="col-6">
                               <div class="form-group">
                                    <label for="">Password Confirm</label>
                                    <input type="password" v-model="creditial.password_confrim" class="form-control" :class="{'is-invalid':errors.password_confrim}">
                                    <small v-if="errors.password_confrim" class="text text-danger"><strong>{{errors.password_confrim[0]}}</strong></small>
                               </div>
                            </div>
                        </div>
                        <div class="row">
                              <div class="col-12">
                                <div class="form-group">
                                        <label for="">Address</label>
                                        <textarea :class="{'is-invalid':errors.address}" v-model="creditial.address" class="form-control"></textarea>
                                        <small v-if="errors.address" class="text text-danger"><strong>{{errors.address[0]}}</strong></small>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary mt-3">Register</button>
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
              name:'',
              phone:'',
              email:'@gmail.com',
              password:'password',
              address:'',
              password_confrim:'password'
          },
          errors:{}
        }
    },
    methods:{
        async register(){
            let url = this.$baseUrl + 'register';
            let data = await this.sendData(url,this.creditial);
 
            if(data.success){
                this.$router.push({name:'Login'})
            }else{
              this.errors = data.errors
              // console.log(this.errors);
            }
        },
      
    },
    beforeMount(){
          let token = localStorage.getItem('token');
        if (token) {
            this.$router.push({
                name: 'Home'
            });
        }
    }
}
</script>