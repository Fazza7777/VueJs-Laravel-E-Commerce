export default {
    methods: {
        async fetchData(route){
            let response = await fetch(`http://127.0.0.1:8000/api/${route}`);
            if(response.status == 200){
               let data = await response.json(); // convert to json
               console.log(data);
            }
      
        },
        async sendData(url,data){
            let response = await fetch(url,{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            });
            return await response.json(); // convert to json
     
        }
    }
}