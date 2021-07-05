<template>
    <div class="container my-5">
        <div class="row pt-5"></div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header ">
                        <h3 class="text-primary">Add Cart Item List</h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Count</th>
                                    <th>Control</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(cart,ind) in addCart" :key="cart.id">
                                    <td>{{ind+1}}</td>
                                    <td>{{cart.name}}</td>
                                    <td>
                                        <img :src="assetUrl+'product/'+cart.images.split(',')[0]" width="80" height="80"
                                            alt="">
                                    </td>
                                    <td>{{cart.price}} MMK</td>
                                    <td>{{cart.count}}</td>
                                    <td>
                                        <button class="btn btn-primary btn-sm"
                                            @click="changeProductCount(cart.id,cart.count+1)">
                                            <i class="uil uil-plus"></i>
                                        </button>
                                        <button class="btn btn-warning btn-sm"
                                            @click="changeProductCount(cart.id,cart.count > 1 ? cart.count-1 : 1)">
                                            <i class="uil uil-minus"></i>
                                        </button>
                                    </td>
                                    <td>{{cart.price * cart.count}} MMK</td>
                                    <td>
                                        <button @click="removeProduct(ind)" class="btn btn-danger btn-sm">
                                            <i class="uil uil-trash-alt" ></i></button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td class="text-right" colspan="6">Grand Total</td>
                                    <td colspan="1">{{grandTotal}} MMK</td>
                                    <td>
                                        <button @click="checkOut()" class="btn btn-success btn-sm pt-0">
                                            <span class="mt-1">
                                                <i class="uil uil-usd-circle" style="font-size:18px"></i> Check Out
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CartView',
        data() {
            return {
                assetUrl: this.$assetUrl,
                addCart: [],
                grandTotal: 0,
            }
        },
        methods: {

            loadAllProduct() {
                let data = localStorage.getItem('product');
                this.addCart = data ? JSON.parse(data) : [];
                this.grandTotal = 0;
                this.addCart.forEach(cart => {
                    this.grandTotal += cart.price * cart.count;
                });

            },
            changeProductCount(id, count) {
                let data = localStorage.getItem('product');
                let products = JSON.parse(data);
                products.forEach(product => {
                    if (product.id == id) {
                        product.count = count;
                    }
                });
                localStorage.setItem('product', JSON.stringify(products));
                this.loadAllProduct();
            },
            removeProduct(index) {
                let data = localStorage.getItem('product');
                let products = JSON.parse(data);
                products.splice(index, 1);
                localStorage.setItem('product', JSON.stringify(products));
                this.loadAllProduct();
                this.$emit('changeCartCount');
                if (this.addCart.length < 1) {
                    this.$router.push('/');
                }
            },
           async checkOut(){
                let token = localStorage.getItem('token');
 
                if(token){
                    let data = localStorage.getItem('product');
                    let productsData = JSON.parse(data);
                    if(productsData.length > 0){
                        let arr = [];
                       productsData.forEach(product=>{
                           arr.push({id:product.id,count:product.count});
                       });
                       let sendOrderProducts = {orders:arr}; // server catch orders:{ }
                       let response = await fetch(this.$baseUrl+'order',{
                                method:'post',
                                headers:{
                                    'content-type':'application/json',
                                    'Authorization':`Bearer ${token}`
                                    },
                                body : JSON.stringify(sendOrderProducts)
                           });
                           let data = await response.json();
                           if(data.success){
                               localStorage.removeItem('product');
                               this.$emit('changeCartCount');
                               this.$router.push({name:'Home'});
                            } 
                    }
                }else{
                 this.$router.push({name:'Login'});
                } 
             }   
        },
        beforeMount() {
            this.loadAllProduct();
            if (this.addCart.length < 1) {
                this.$router.push('/');
            }
        }
    }
</script>