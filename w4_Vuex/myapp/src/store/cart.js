export default {
    state:{
        step:1,
        goodslist:[]
    },
    getters:{
        totalPrice(state){
            return state.goodslist.reduce((prev,item)=>prev+item.price,0);
        }
    },
    mutations:{
        add(state,goods){
            state.goodslist.unshift(goods);
        },
        remove(state,{id}){
            state.goodslist = state.goodslist.filter(item=>item._id!==id)
        },
        clear(state){
            state.goodslist = []
        },
        changeQty(state,{id,qty}){
            state.goodslist = state.goodslist.map(item=>{
                if(item._id == id){
                    item.qty = qty;
                }
                return item;
            })
        }
    },
    actions:{
        initCart(){
            
        }
    }
}