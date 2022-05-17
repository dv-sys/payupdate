const client = require("./dbconnection");

//with Promise code
function myExecute(query){
    console.log('Query Fire : ' , query )
        return new Promise((resolve,reject)=>{
            const result = client.query(query,(error,result)=>{
                if(!error){
                    resolve(result.rows);
                }
                else{
                    reject(error);
                }
            });   
        });

        myPromise
        .then((data)=>{
            console.log('Res Data : ' , data)
            return data;
        })
        .catch((err)=>{
            throw err.message;                
        })  
        
    client.end
}


/*
//with Async Await
async function myExecute(query){
    console.log('Query Fire : ' , query )
    try{
        const result = await client.query(query);
        return result.rows;    
    }
    catch(err){
        throw err.message;
    }
    client.end
}*/

module.exports = {myExecute};