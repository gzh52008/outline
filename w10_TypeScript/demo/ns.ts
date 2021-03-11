
export namespace Goods{
    // 内部
    export interface IGoods{
        name:string,
        price:number
    }

    export type ns = number|string;
    
    let goodsInfo:IGoods = {
        name:'goods1',
        price:998
    }
    
}

export namespace Cart{
    export interface IGoods{
        name:string;
        price:number;
        qty:number
    }

    
}