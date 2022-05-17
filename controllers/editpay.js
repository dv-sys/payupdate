var debug = require('debug')('app')
const { myExecute } = require("../helper/corefuncs");

//with Promise
const editpay = function (req,res){
    const voucher = req.body.voucher;
    const query = `SELECT id FROM receipt WHERE voucher=${voucher}`;
    
    myExecute(query).then((result)=>{
        const recid = result[0]['id'];
        editpay1(recid,editpay2);
    })
}

function editpay1(recid,editpay2){
    const query1 = `SELECT invno,adjamt FROM receiptg WHERE linkid=${recid}`;
    myExecute(query1).then((result1)=>{
        editpay2(result1);
    })    
}

const editpay2 = function(result){
    const cnt = result.length
    for(let z=0; z < cnt; z++ ){
        let invno = result[z]['invno'];
        let adjamt = result[z]['adjamt'];
        const query2 = `UPDATE sales SET paid=(coalesce(paid,0) + ${adjamt})  WHERE invno=${invno}`;
        myExecute(query2).then((result2)=>{
            console.log('Updated Successfully');
        })
    }
}

/*
//With Async Await 
const editpay = async (req,res) => {
    const voucher = req.body.voucher;

    const query = `SELECT id FROM receipt WHERE voucher=${voucher}`;
    const result = await myExecute(query);
    if(result.length > 0 ){
        const recid = result[0]['id'];

        const query1 = `SELECT invno,adjamt FROM receiptg WHERE linkid=${recid}`;
        const result1 = await myExecute(query1);
        const cnt = result1.length
        for(let z=0; z < cnt; z++ ){
            let invno = result1[z]['invno'];
            let adjamt = result1[z]['adjamt'];
            const query2 = `UPDATE sales SET paid=(coalesce(paid,0) + ${adjamt})  WHERE invno=${invno}`;
            try{
                const result2 = await myExecute(query2);
                res.end('Updated Successfully');
            }
            catch(err){
                res.status(412).send(err.message);
            }    
        }
    }
}*/  

module.exports = editpay;