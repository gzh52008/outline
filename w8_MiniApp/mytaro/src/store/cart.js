import { observable } from 'mobx'

const counterStore = observable({
  carlist: [],
  add2cart(goods){
    this.carlist.unshift(goods)
  },
  // changeQtyAsync() {
  //   setTimeout(() => {
  //     this.counter++
  //   }, 1000)
  // }
})

export default counterStore