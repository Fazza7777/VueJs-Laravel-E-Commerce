export default {
    methods: {
        async fetchData(url){
            let response = await fetch(url);
             let res =  await response.json(); // convert to json
             if(res.status == 200){
                return res.data;
             }else{
                 return [];
             }
            
        
        },
        async sendData(url,data){
            let response = await fetch(url,{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            });
            return await response.json(); // convert to json
     
        },
        addCart(product){
            let productData  = localStorage.getItem('product');
            let productArr = productData ? JSON.parse(productData) : [];
            for(let p of productArr){
              if(p.id == product.id){
               alert('Item already exist');
                return;
              }
            }
            product.count = 1;
            productArr.push(product);
            localStorage.setItem('product',JSON.stringify(productArr));
            this.$emit('changeCartCount');
        },
    }
   
}