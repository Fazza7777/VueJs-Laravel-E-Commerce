<template>
    <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start active">
              <div class="fw-bold">All Category</div>

            <span class="badge bg-white rounded-pill text-primary">{{count}}</span>        
        </li>
        <li v-for="c in cats" :key="c.id" class="list-group-item d-flex justify-content-between align-items-start">
        
            <div class="fw-bold">{{c.name}}</div>

            <span class="badge bg-primary rounded-pill text-white">{{c.product_count}}</span>
        </li>
    </ol>
</template>
<script>
import mixins from '../mixin/mixin';
export default {
    mixins:[mixins],
    name:'Sidebar',
     data(){
    return{
       cats:[],
       count:0,
    }
  },
  async beforeMount(){
  //console.log(await this.fetchData('categories'));
   const {success,categories,count} = await this.fetchData('categories');
   if(success){
      this.cats = categories;
      this.count = count;
   }
  }
}
</script>