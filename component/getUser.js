
      async function getUser(user)
      {
        try{
         var res=await fetch(`https://api.github.com/users/${user}`);
 
         var data=await res.json();
         return data;
        }catch(e)
        {
            console.log("Error"+e)
        }
 
      }
   
  export default getUser