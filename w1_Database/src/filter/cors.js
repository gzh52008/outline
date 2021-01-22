module.exports = function cors (req, res, next){
    
    res.header("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST,PUT,PATCH");
    res.set("Access-Control-Allow-Headers", "Content-Type,Authorization");

    // 处理预请求，预请求不需要响应内容，只需要响应200状态码
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
}