<template>
    <div class="container my-5" v-if="isLoading">
        <div class="row py-3"></div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="d-inline text-primary">
                            <router-link :to="{name:'Home'}" class="mr-2 uil-nav"><i class="uil uil-angle-left-b"></i>
                            </router-link> <b>All Product</b>
                        </h4>
                        <span class="float-right text-success"><i class="uil uil-shopping-cart-alt mr-3 uil-nav"></i>
                            Shop Now</span>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12" v-for="(p) in product" :key="p.id">
                <div class="card shadow">
                    <div class="card-header py-2">
                        {{p.name}}
                        <span @click="addToCart(p)" class="btn btn-sm btn-primary float-right"><i
                                class="uil uil-shopping-cart-alt" style="font-size:16px;"></i></span>
                    </div>
                    <div class="card-body">
                        <p class="text-center">
                            <img :src="assetUrl+'product/'+p.images.split(',')[0]" width="100" height="100" alt="">
                        </p>
                        <div class="d-flex justify-content-between">
                            <router-link :to="`/product/${p.id}`" class="btn btn-sm btn-info"> 
                                 <i class="uil uil-eye"></i> More
                            </router-link>
                            <span class="badge badge-danger mb-1">{{p.price}} MMK</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-3 d-flex justify-content-center">
                <button :disabled="paginateLoader" @click="paginate" class="btn  text-center d-block"
                    style="width:90px;height:85px;background:#4A5FD8;">
                    <i class="uil uil-arrow-to-bottom text-white" style="font-size:45px;"></i>
                </button>
            </div>

        </div>
    </div>
    <loading v-else />
</template>
<script>
    import Loading from '../components/Loading.vue';
    import mixins from '../mixin/mixin';
    export default {
        components: {
            Loading
        },
        mixins: [mixins],
        name: "AllProduct",
        data() {
            return {
                product: [],
                isLoading: false,
                assetUrl: this.$assetUrl,
                page: 1,
                paginateLoader: false
            }
        },
        methods: {
            async getAllProduct() {
                let products = await this.fetchData(`${this.$baseUrl}products`);
                if (products.next_page_url == null) {
                    this.page = 1;
                    this.paginateLoader = true;
                }
                this.product = products.data
                this.isLoading = true;
               // console.log(this.product);
            },
            addToCart(product){
                this.addCart(product);
            },
            async paginate() {
                this.page++;
                let products = await this.fetchData(`${this.$baseUrl}products?page=${this.page}`);
                if (products.next_page_url == null) {
                    this.page = 1;
                    this.paginateLoader = true;
                }
                this.product = [...this.product, ...products.data];
                // console.log(products);
            }
        },
        beforeMount() {
            this.getAllProduct();
        }
    }
</script>