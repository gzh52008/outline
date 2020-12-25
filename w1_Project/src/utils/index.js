// function formatData(obj={}){
// let {code=200,data=[],msg='success'} = obj;
function formatData({code=200,data=[],msg="success"}={}){
    if(code === 400){
        msg = 'fail'
    }
    return {
        code,
        data,
        msg
    }
}

module.exports = {
    formatData
}