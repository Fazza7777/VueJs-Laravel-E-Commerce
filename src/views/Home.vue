<template>
<div v-if="isLoading" class="container my-4">
  <div class="row">
      <div class="col-md-4">
        <sidebar :cats="cats" :subCats='subCats'/>
      </div>
      <div class="col-md-8">
         <div class="card shadow  w-100 mb-3 " style="max-height:300px" >
           <div class="card-header">
              <h4 class="d-inline"><i class="uil uil-shopping-cart-alt mr-3 text-success uil-nav"></i> Shop Now</h4>
              <button class="btn btn-sm btn-primary float-right ">All Product</button>
           </div>
             <div class="card-body text-center">
               <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                <div v-for="(c,index) in cats" :key="c.id" class="carousel-item" :class="{active : index==0}">
                    <img :src="assetUrl+c.image" class="d-block" width="200" height="200" style="margin:0 auto;">
                  </div>
                </div>
             </div>
             </div>
         </div>
         <div class="card" v-for="(tag,index) in tags" :key="index" >
           <div class="card-header" v-if="tag.product.length >0">
              <h3  class="d-inline">{{tag.name}}</h3>
              <router-link :to="`/product/productByTag/${tag.id}`" class="d-in float-right btn btn-sm btn-info"> View All</router-link>
           </div>
           <div class="card-body" v-if="tag.product.length >0">
                <div class="row">
                    <div class="col-md-4 col-6" v-for="(p,index) in tag.product" :key="index">         
                          <div class="card">
                            <div class="card-header">{{p.name}}</div>
                            <div class="card-body">
                              <p class="text-center">
                                <img :src="assetUrl+'product/'+p.images.split(',')[0]" width="100" height="100" alt="">
                              </p>
                              <div class="d-flex justify-content-between">
                                <span class="btn btn-sm btn-primary"> <i class="uil uil-eye"></i></span>
                                <span class="badge badge-danger mb-1">{{p.price}} MMK</span>
                                 
                              </div>
                            </div>
                          </div>
                    </div>
                </div>
           </div>
         </div>
       
      </div>
  </div>
</div>
<loading v-else />
</template>

<script>
import Loading from '../components/Loading.vue';
import Sidebar from '../components/Sidebar.vue';
import mixins from '../mixin/mixin';
export default {
 components: { Sidebar, Loading },
  mixins:[mixins],
  name: 'Home',
  data(){
    return{
      cats:[],
      subCats:[],
      tags:[],
      assetUrl : this.$assetUrl,
      isLoading : false
    }
  },
  async beforeMount(){
    this.cats = await this.fetchData(`${this.$baseUrl}categories`);
    this.subCats = await this.fetchData(`${this.$baseUrl}subcats`);
    this.tags = await this.fetchData(`${this.$baseUrl}tags`);
    for(let tag of this.tags){
       tag.product = await this.fetchData(`${this.$baseUrl}productByTag/${tag.id}`);
    }
    this.isLoading = true
  }
}
</script>
