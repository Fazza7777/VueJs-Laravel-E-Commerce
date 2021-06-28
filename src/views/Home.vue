<template>
<div class="container my-5">
<div class="row">
  <div class="col-md-4">
    <sidebar/>
  </div>
</div>
</div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import mixins from '../mixin/mixin';
export default {
  components: { Sidebar },
  mixins:[mixins],
  name: 'Home',
 
}
</script>
