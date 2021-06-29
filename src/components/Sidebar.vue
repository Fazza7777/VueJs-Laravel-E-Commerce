<template>
    <ol class="list-group list-group-numbered mb-5">
        <li class="list-group-item d-flex justify-content-between align-items-start active">
              <div class="fw-bold">All Category</div>

            <!-- <span class="badge bg-white rounded-pill text-primary">{{cats.count}}</span>         -->
        </li>
        <li v-for="c in cats" :key="c.id" class="list-group-item ">
            <router-link :to="`/product/productByCat/${c.id}`" class="d-flex justify-content-between align-items-start">
               <div class="fw-bold">{{c.name}}</div>
               <span class="badge bg-primary rounded-pill text-white">{{c.product_count}}</span>
            </router-link>
           
        </li>
        <li class="list-group-item d-flex justify-content-end align-items-start py-2">
            <span class="badge badge-primary">View All</span>
        </li>
    </ol>
        <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start active">
              <div class="fw-bold">All Sub Category</div>

            <!-- <span class="badge bg-white rounded-pill text-primary">{{subCats.count}}</span>         -->
        </li>
        <li v-for="c in subCats" :key="c.id" class="list-group-item  ">       
           <router-link :to="`/product/productBySubCat/${c.id}`" class="d-flex justify-content-between align-items-start">
                <div class="fw-bold">{{c.name}}</div>
                <span class="badge bg-primary rounded-pill text-white">{{c.product_count}}</span>
           </router-link>
        </li>
        <li class="list-group-item d-flex justify-content-end align-items-start py-2">
            <span class="badge badge-primary">View All</span>
        </li>
    </ol>
</template>
<script>
import mixins from '../mixin/mixin';
export default {
    mixins:[mixins],
    name:'Sidebar',
    props:['cats','subCats'],
}
</script>