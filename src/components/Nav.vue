<template>
<div class="bg-primary fixed-top mb-5">
    <nav class="navbar navbar-expand-lg navbar-dark container bg-primary py-2">
        <div class="container">
            <router-link class="navbar-brand text-white font-weight-bold" :to="{name:'Home'}">P-N Shopping</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-default">
                <div class="navbar-collapse-header">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <a href="javascript:void(0)">
                                
                            </a>
                        </div>
                        <div class="col-6 collapse-close">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <ul class="navbar-nav ml-lg-auto">
                    <li class="nav-item mr-2">
                        <router-link class="nav-link nav-link-icon" :to="{name:'Home'}">
                            <i class="uil uil-home uil-nav"></i>
                            <span class="ml-2 nav-link-inner--text d-lg-none">Home</span>
                        </router-link>
                    </li>
                     <!-- <li class="nav-item">
                        <router-link class="nav-link nav-link-icon" :to="{name:'AllProduct'}">
                            <i class="uil uil-parking-square uil-nav"></i>
                            <span class="ml-2 nav-link-inner--text d-lg-none">All Product</span>
                        </router-link>
                    </li> -->
                     <li class="nav-item" v-show="$root.logged">
                        <router-link class="nav-link nav-link-icon" :to="{name:'Orders'}">
                            <i class="uil uil-clipboard-notes uil-nav"></i>
                            <span class="ml-2 nav-link-inner--text d-lg-none">My Orders</span>
                        </router-link>
                    </li>
                     <li class="nav-item" v-if="$root.user.name">
                        <router-link class="nav-link nav-link-icon" :to="{name:'SaveProduct'}">
                            <i class="uil uil-bookmark uil-nav"></i>
                            <span class="ml-2 nav-link-inner--text d-lg-none">Save</span>
                        </router-link>
                    </li>
                    <li class="nav-item" >
                        <router-link class="nav-link nav-link-icon" to="/cart">
                           <i class="uil uil-shopping-cart uil-nav"></i>
                            <span class="cart">{{('0' + cartCount).slice(-2)}}</span>
                            <!-- <span class="cart">{{cartCount}}</span> -->
                        </router-link>
                    </li>
     
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <i class="uil uil-setting uil-nav"></i>
                            <span class="ml-2 nav-link-inner--text d-lg-none">Settings</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                            <router-link v-if="!logged" class="dropdown-item" :to="{name:'Register'}">Register</router-link>
                            <router-link v-if="!logged" class="dropdown-item" :to="{name:'Login'}">Login</router-link>
                            <router-link v-if="logged" class="dropdown-item" :to="{name:'Register'}">Welcome {{$root.user.name}}</router-link>
                            <div v-if="logged" class="dropdown-divider"></div>
                            <li style="cursor:pointer;" v-if="logged" class="dropdown-item" @click="logout()">Logout</li>
                        </div>
                    </li>
                </ul>
                
            </div>
        </div>
   </nav>
</div>

</template>
<script>
export default {
    name:'Nav',
    props:{logged:Boolean,cartCount:Number},
 
     methods:{
        logout(){
            localStorage.removeItem('token');
            localStorage.removeItem('product');
            localStorage.removeItem('user');
            this.$root.user = '';
            this.$root.cartCount = 0;
            this.$emit('changeLogin');
            this.$router.push({name:'Login'});
         }   
     }
}
</script>