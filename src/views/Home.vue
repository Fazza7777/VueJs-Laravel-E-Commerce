<template>

</template>

<script>
// @ is an alias to /src
import mixins from '../mixin/mixin';
export default {
  mixins:[mixins],
  name: 'Home',
  beforeMount(){
    this.fetchData('tags');
  }
}
</script>
