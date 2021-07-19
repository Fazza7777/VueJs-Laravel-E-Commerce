<template>
    <div class="container my-5" v-if="isLoading">
        <div class="row py-3"></div>
        <div class="row">
            <div class="col-12">
                <div class="card py-0">
                    <div class="card-header py-3">
                        <h4 class="d-inline text-primary ">
                            <a href="#" @click="back()" class="mr-2 uil-nav"><i class="uil uil-angle-left-b"></i>
                            </a> Back
                        </h4>
                        <span class="text-warning float-right">Product Detail</span>
                    </div>
                </div>
            </div>
            <div class=" col-12 ">
                 <div class="card shadow">
                     <div class="card-header d-flex justify-content-between">
                         <h3 class="text-center text-primary d-inline">{{product.name}}</h3>
                        <span class="btn btn-sm btn-primary mb-1 ">{{product.tag.name}}</span>  
                         <span @click="addToCart(product)" class="btn btn-sm btn-primary float-right">
                             <i class="uil uil-shopping-cart-alt" style="font-size:16px;"></i>
                        </span>
                     </div>
                     <div class="card-body">
                          <p class="text-center" >
                              <img :src="assetUrl+'product/'+product.images" width="300" height="300">
                          </p>
                          <div class="d-flex justify-content-between">
                              <button class="btn btn-danger btn-sm">{{ product.price }} MMK</button>
                              <button class="btn btn-success btn-sm">Category : {{ product.cat.name }} </button>
                              <button class="btn btn-info btn-sm">Sub Cat : {{ product.subcat.name }} </button>
                          </div>
                          <hr>
                          <p>
                              <b>Colors : </b> <span class="badge badge-primary">{{product.colors}}</span>
                          </p>
                           <p>
                              <b>Sizes : </b> <span class="badge badge-primary">{{product.sizes}}</span>
                          </p>
                         
                          <div v-if="$root.user.name">
                               <hr>
                            <div v-if="!product.save">
                                <form @submit.prevent="save()">
                                    <input type="hidden" v-model="product_id">
                                    <button class="btn btn-dark btn-sm">
                                            <i class="uil uil-bookmark" style="font-size:16px;"></i> Save Product
                                    </button>
                                </form>  
                            </div> 
                            <div v-else>
                                <form @submit.prevent="unsave()">
                                    <input type="hidden" v-model="product_id">
                                    <button class="btn btn-warning btn-sm">
                                            <i class="uil uil-bookmark" style="font-size:16px;"></i> UnSave 
                                    </button>
                                </form>  
                            </div> 
                          </div>
                     </div>
                     <div class="card-footer">
                         <p>{{product.description}}</p>
                     </div>
                 </div>
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
        name: "ViewProduct",
        data() {
            return {
                isLoading: false,
                id : null,
                product:'',
                product_id :'',
                assetUrl:this.$assetUrl
            }
        },
       
        methods: {
         async save(){
             let token = localStorage.getItem('token');
             let url = this.$baseUrl+'save-product';
             let data = {product_id:this.product_id};
             let response = await fetch(url,{
                                method:'post',
                                headers:{
                                    'content-type':'application/json',
                                    'Authorization':`Bearer ${token}`
                                    },
                                body : JSON.stringify(data)
                           });
              let res = await response.json();  
              if(res.status == 200 ){
                this.product = res.data;
                 if(this.product.images.search(',') !== -1){
                  this.product.images = this.product.images.split(',')[0]
              }
              }                         
         },
          async unsave(){
             let token = localStorage.getItem('token');
             let url = this.$baseUrl+'unsave-product';
             let data = {product_id:this.product_id};
             let response = await fetch(url,{
                                method:'post',
                                headers:{
                                    'content-type':'application/json',
                                    'Authorization':`Bearer ${token}`
                                    },
                                body : JSON.stringify(data)
                           });
              let res = await response.json();
              if(res.status == 200){
                 this.product = res.data;
                  if(this.product.images.search(',') !== -1){
                  this.product.images = this.product.images.split(',')[0]
              }
              }             
         },
          addToCart(product){
            this.addCart(product);
          },
           async getProduct(){
               let url = this.$baseUrl+'product/'+this.id;
               this.product = await this.fetchData(url);
               //console.log(this.product)
               this.product_id = this.product.id;
              if(this.product.images.search(',') !== -1){
                  this.product.images = this.product.images.split(',')[0]
                //  console.log(this.product.images);
              }
               this.isLoading = true;
           },
           back(){
               window.history.back(-1);
           }
        },
        beforeMount() {
            this.id = this.$route.params.id;
            if(this.id){
                this.getProduct();
            }
        }
    }
</script>