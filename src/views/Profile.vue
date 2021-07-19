<template>
    <div class="container my-5">
        <div class="row py-3"></div>
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card shadow">
                    <div class="card-header py-3">
                        <h3 class="text-primary">
                            <i class="uil uil-user-circle uil-nav mr-2"></i> Your Profile
                        </h3>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6">
                                <div class="card">
                                    <div class="card-header text-warning"><i class="uil uil-info-circle mr-2"></i>
                                        Details</div>
                                    <div class="card-body">
                                        <form @submit.prevent="detail()">

                                            <div class="form-group">
                                                <label for="name">Name</label>
                                                <input :class="{'is-invalid':errors.name}" type="text"
                                                    v-model="user.name" class="form-control">
                                                <small v-if="errors.name"
                                                    class="text text-danger"><strong>{{errors.name[0]}}</strong></small>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="email">Email</label>
                                                        <input :class="{'is-invalid':errors.email}" type="email"
                                                            v-model="user.email" class="form-control">
                                                        <small v-if="errors.email"
                                                            class="text text-danger"><strong>{{errors.email[0]}}</strong></small>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="phone">Phone</label>
                                                        <input :class="{'is-invalid':errors.phone}" type="number"
                                                            v-model="user.phone" class="form-control">
                                                        <small v-if="errors.phone"
                                                            class="text text-danger"><strong>{{errors.phone[0]}}</strong></small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="address">Address</label>
                                                <textarea :class="{'is-invalid':errors.address}" v-model="user.address"
                                                    class="form-control"></textarea>
                                                <small v-if="errors.address"
                                                    class="text text-danger"><strong>{{errors.address[0]}}</strong></small>
                                            </div>
                                            <button class="btn btn-primary">Update</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card">
                                    <div class="card-header text-warning"><i class="uil uil-lock-access mr-2"></i>
                                        Change Password</div>
                                    <div class="card-body">
                                        <form @submit.prevent="changePassword()">
                                            <div class="form-group">
                                                <label for="current_password">Current Password</label>
                                                <input :class="{'is-invalid':errors.current_password}" type="password"
                                                    v-model="password.current_password" class="form-control">
                                                <small v-if="errors.current_password"
                                                    class="text text-danger"><strong>{{errors.current_password[0]}}</strong></small>
                                            </div>
                                            <div class="form-group">
                                                <label for="new_password">New Password</label>
                                                <input :class="{'is-invalid':errors.new_password}" type="password"
                                                    v-model="password.new_password" class="form-control">
                                                <small v-if="errors.new_password"
                                                    class="text text-danger"><strong>{{errors.new_password[0]}}</strong></small>
                                            </div>
                                            <div class="form-group">
                                                <label for="confirm_password">Confirm Password</label>
                                                <input :class="{'is-invalid':errors.confirm_password}" type="password"
                                                    v-model="password.confirm_password" class="form-control">
                                                <small v-if="errors.confirm_password"
                                                    class="text text-danger"><strong>{{errors.confirm_password[0]}}</strong></small>
                                            </div>
                                            <button class="btn btn-primary">Change</button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Profile',

        data() {
            return {
                user: '',
                errors: '',
                password:{
                    current_password:'',
                    new_password:'',
                    confrim_password:'',
                }
            }
        },
        methods: {
          async detail() {
                let token = localStorage.getItem('token');
                let url = this.$baseUrl + 'profile-update';
                let response = await fetch(url, {
                    method: 'post',
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(this.user)
                });
                let data = await response.json();
                if(data.status == 200){
                    this.errors = '';
                    localStorage.removeItem('user');
                    localStorage.setItem('user',JSON.stringify(data.user));
                    this.user = data.user;
                    this.$root.user = data.user;
                }else{
                    this.errors = data.errors
                }
            },
           async changePassword() {
                let token = localStorage.getItem('token');
                let url = this.$baseUrl + 'change-password';
                let response = await fetch(url, {
                    method: 'post',
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(this.password)
                });
                let data = await response.json();
                if(data.status == 200){
                        this.errors = '';
                        this.password = {current_password:'', new_password:'', confrim_password:''}
                        localStorage.removeItem('user');
                        localStorage.setItem('user',JSON.stringify(data.user));
                        this.user = data.user;
                        this.$root.user = data.user;
                }else{   
                    this.errors = data.errors
                }
            }  
        },
        beforeMount() {
            let user = localStorage.getItem('user');
            if (user) {
                this.user = JSON.parse(user);
            } else {
                this.$router.push({
                    name: 'Login'
                });
            }
        }
    }
</script>