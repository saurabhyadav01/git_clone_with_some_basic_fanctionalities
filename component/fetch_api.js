
  
     
      async function fetch_api(api)
     {
       try{
        var res=await fetch(api);

        var data=await res.json();
        console.log(data)
       }catch(e)
       {
           console.log("Error"+e)
       }

     }
     //   fetch_api()
    
    //return fetch_api
 export default fetch_api