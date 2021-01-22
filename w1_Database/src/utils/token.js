const jwt = require('jsonwebtoken');

const key = 'laoxie&jingjing'

function create(data,expiresIn=60*60*24){
    const token = jwt.sign(data, key,{
        expiresIn
    });
    return token;
}

async function verify(token){
    try{
       await decode(token);
       return true;
    }catch(err){
        return false;
    }
    
}
function decode(token){
    return new Promise((resolve,reject)=>{
        jwt.verify(token, cert, function(err, decoded) {
            if(err){
                reject(err);
                return
            }
            resolve(decoded);
        });

    })
}


module.exports = {
    create,
    verify
}