<template>
    <div  class="loading">
        <div class="spinner-grow text-success" style="width: 3rem; height: 3rem;" role="status">
         <span class="sr-only">Loading...</span>
       </div>
       <div class="spinner-grow text-danger mx-2" style="width: 3rem; height: 3rem;" role="status">
         <span class="sr-only">Loading...</span>
       </div>
       <div class="spinner-grow text-warning" style="width: 3rem; height: 3rem;" role="status">
         <span class="sr-only">Loading...</span>
       </div>
   </div>
</template>
<script>
export default {
    name:'Loading'
}
</script>