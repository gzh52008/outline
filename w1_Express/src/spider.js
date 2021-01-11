const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const db = require('./db/mongodb')

// 目标地址
const url = 'http://store.lining.com/shop/goodsCate-sale,desc,1,15s15_122,15_122_m,15_122_ls15_122_10,15_122_10_m,15_122_10_l-0-0-15_122_10,15_122_10_m,15_122_10_l-0s0-0-0-min,max-0.html';

// 发起请求，获取目标地址内容
request(url,(err,res,body)=>{
    const $ = cheerio.load(body);
    let goodslist = [];
    $('.selItem').each((idx,el)=>{
        let $el = $(el);
        let $price = $el.find('.price');

        let imgurl = $el.find('.selMainPic img').attr('orginalsrc');
        let name = $el.find('.hgoodsName').text();
        let price = $price.text().slice(1)*1;
        let sku = $price.attr('sku');
        let imgs = Array.from($el.find('.swiper_content img').map((idx,el)=>$(el).attr('orginalsrc')));
        let goods = {
            sku,
            name,
            imgurl,
            price,
            imgs,
        }
        

        // 2. 爬取图片到本地

        // 获取图片名称
        const filename = path.basename(imgurl);

        const fileStream = fs.createWriteStream('../public/img/'+filename);

        // request请求图片地址，返回一个数据流Stream
        request(imgurl).pipe(fileStream);
        goods.imgurl = filename;
        goodslist.push(goods);
    });

    console.log('goodslist=',goodslist);
    db.create('goods',goodslist)
});