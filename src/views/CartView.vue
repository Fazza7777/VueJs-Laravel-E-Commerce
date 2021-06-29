<template>
    <div class="container my-5">
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
                                        <img :src="assetUrl+'product/'+cart.images.split(',')[0]" width="30" height="30"
                                            alt="">
                                    </td>
                                    <td>{{cart.price}} MMK</td>
                                    <td>{{cart.count}}</td>
                                    <td>
                                        <button class="btn btn-success btn-sm" @click="changeProductCount(cart.id,cart.count+1)" >
                                            <i class="uil uil-plus"></i>
                                        </button>
                                        <button class="btn btn-warning btn-sm" @click="changeProductCount(cart.id,cart.count > 1 ? cart.count-1 : 1)">
                                            <i class="uil uil-minus"></i>
                                        </button>
                                    </td>
                                    <td>{{cart.price * cart.count}} MMK</td>
                                    <td>
                                        <button @click="removeProduct(ind)" class="btn btn-danger btn-sm"><i class="uil uil-trash-alt"></i></button>
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
                addCart: []
            }
        },
        methods: {
          
            loadAllProduct() {
                let data = localStorage.getItem('product');
                this.addCart = data ? JSON.parse(data) : [];
                console.log(this.addCart);
            },
              changeProductCount(id, count) {
                let data = localStorage.getItem('product');
                let products = JSON.parse(data);
                products.forEach(product =>{ 
                    if(product.id == id){
                        product.count = count;
                    }
                });
                localStorage.setItem('product',JSON.stringify(products));
                this.loadAllProduct();
            },
            removeProduct(index){
                let data = localStorage.getItem('product');
                let products = JSON.parse(data);
                products.splice(index,1);
                localStorage.setItem('product',JSON.stringify(products));
                this.loadAllProduct();
                this.$emit('changeCartCount');

            }
        },
        beforeMount() {
            this.loadAllProduct();
        }
    }
</script>