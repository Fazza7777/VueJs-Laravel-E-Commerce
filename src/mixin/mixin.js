export default {
    methods: {
        async fetchData(route){
            let response = await fetch(`http://127.0.0.1:8000/api/${route}`);
            if(response.status == 200){
               let data = await response.json();
               console.log(data);
            }
      
          }
    }
}