<template>
<div class="bg-primary">
    <nav class="navbar navbar-expand-lg navbar-dark container bg-primary py-2">
        <div class="container">
            <router-link class="navbar-brand text-white" :to="{name:'Home'}">Shopping</router-link>
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
                    <li class="nav-item">
                        <a class="nav-link nav-link-icon" href="#">
                            <i class="ni ni-favourite-28"></i>
                            <span class="nav-link-inner--text d-lg-none">Discover</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-icon" href="#">
                            <i class="ni ni-notification-70"></i>
                            <span class="nav-link-inner--text d-lg-none">Profile</span>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="ni ni-settings-gear-65"></i>
                            <span class="nav-link-inner--text d-lg-none">Settings</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                            <router-link v-if="!logged" class="dropdown-item" :to="{name:'Register'}">Register</router-link>
                            <router-link v-if="!logged" class="dropdown-item" :to="{name:'Login'}">Login</router-link>
                            <router-link v-if="logged" class="dropdown-item" :to="{name:'Register'}">Pyae Phyoe Naing</router-link>
                            <div v-if="logged" class="dropdown-divider"></div>
                            <router-link v-if="logged" class="dropdown-item" :to="{name:'Register'}">Logout</router-link>
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
    props:{logged:Boolean}
}
</script>