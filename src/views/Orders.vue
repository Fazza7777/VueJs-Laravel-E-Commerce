<template>
    <div class="container my-5">
        <div class="row py-5"></div>
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="card">
                    <div class="card-header py-2"><h3 class="text-primary"><i class="uil uil-list-ol-alt mr-2"></i> Your Order List</h3></div>
                </div>
                <div class="accordion" id="accordionExample" v-for="(order,ind) in orders" :key='order.id'>
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                    :data-target="`#collapse`+ind" aria-expanded="true" :aria-controls="`collapse`+ind">
                                  <span class="mr-5">
                                      <i class="uil uil-shopping-cart text-success"></i> - Order  {{ind+1}} 
                                  </span>
                                  <span class="ml-5">
                                     <i class="uil uil-percentage mr-2"></i> Count - {{order.count}}
                                  </span>
                                    <span class="ml-5">
                                      <i class="uil uil-bill mr-2"></i> Total Price - {{order.total}}
                                  </span>
                                </button>
                            </h2>
                        </div>

                        <div :id="'collapse'+ind" class="collapse" :class="{'show':ind==0}" aria-labelledby="headingOne"
                            data-parent="#accordionExample">
                            <div class="card-body">
                               <table class="table table-bordered">
                                   <thead class="bg-primary text-white">
                                       <tr>
                                           <th>NO</th>
                                           <th>Name</th>
                                           <th>Image</th>
                                           <th>Price</th>
                                           <th>Count</th>
                                           <th>Total</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       <tr v-for="(product,ind) in order.order_item" :key="product.id">
                                           <td>{{ind+1}}</td>
                                           <td>{{product.name}}</td>
                                           <td>
                                               <img :src="this.$assetUrl+'product/'+product.images.split(',')[0]" width="48" height="50" alt="">
                                           </td>
                                           <td>{{product.price}}</td>
                                           <td>{{product.count}}</td>
                                           <td>{{product.count * product.price}}</td>
                                       </tr>
                                   </tbody>
                                   <tbody>
                                       <tr>
                                           <td colspan="3" class="text-right">Grand Toal</td>
                                           <td colspan="2">{{order.total}}</td>
                                       </tr>
                                   </tbody>
                               </table>
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
        name: 'Orders',
        data() {
            return {
                orders: []

            }
        },
        methods: {
            async getMyOrder(token) {
                let res = await fetch(this.$baseUrl + 'myOrder', {
                    method: 'get',
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                let response = await res.json();
                if (response.success) {
                    this.orders = response.data;
                    //console.log(response.data);
                } else {
                    this.orders = [];
                }
            }
        },
        beforeMount() {
            let token = localStorage.getItem('token');
            if (token) {
                this.getMyOrder(token);
            } else {
                this.$router.push({
                    name: 'Login'
                });
            }
        }
    }
</script>