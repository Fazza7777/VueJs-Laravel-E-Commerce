<template>
    <ol class="list-group list-group-numbered mb-5">
        <li class="list-group-item d-flex justify-content-between align-items-start active">
            <div class="fw-bold">All Category</div>
        </li>
        <li v-for="c in cats" :key="c.id" class="list-group-item ">
            <router-link :to="`/product/productByCat/${c.id}`" class="d-flex justify-content-between align-items-start">
                <div class="fw-bold">{{c.name}}</div>
                <span class="badge bg-primary rounded-pill text-white">{{c.product_count}}</span>
            </router-link>

        </li>
        <li class="list-group-item d-flex justify-content-end align-items-start py-2">
            <router-link to="/allproduct" class="btn btn-sm btn-primary" style="cursor:pointer">View All</router-link>
        </li>
    </ol>
    <ol class="list-group list-group-numbered mb-5">
        <li class="list-group-item d-flex justify-content-between align-items-start active">
            <div class="fw-bold">All Sub Category</div>
        </li>
        <li v-for="c in subCats" :key="c.id" class="list-group-item  ">
            <router-link :to="`/product/productBySubCat/${c.id}`"
                class="d-flex justify-content-between align-items-start">
                <div class="fw-bold">{{c.name}}</div>
                <span class="badge bg-primary rounded-pill text-white">{{c.product_count}}</span>
            </router-link>
        </li>
        <li class="list-group-item d-flex justify-content-end align-items-start py-2">
            <router-link to="/allproduct" class="btn btn-sm btn-primary" style="cursor:pointer">View All</router-link>
        </li>
    </ol>
     <ol class="list-group list-group-numbered"  v-if="$root.user.name">
         <router-link :to="{name:'SaveProduct'}">
               <li class="list-group-item active" >
                    <div class="fw-bold d-flex justify-content-between"><span>Save Product</span> <i class="uil uil-bookmark nav-uil"></i></div>
                </li>
         </router-link>
       
        <hr class="my-0 bg-white">
      <li class="list-group-item active">
            <div class="fw-bold d-flex justify-content-between"><span>Profile</span> <i class="uil uil-user nav-uil"></i></div>
        </li>
    </ol>
</template>
<script>
    import mixins from '../mixin/mixin';
    export default {
        mixins: [mixins],
        name: 'Sidebar',
        props: ['cats', 'subCats'],
      
    }
</script>