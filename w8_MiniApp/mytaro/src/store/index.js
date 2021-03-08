import counterStore from './counter'
import cartStore from './cart'
import userStore from './user'

const store = {
    counter:counterStore,
    cart:cartStore,
    user:userStore
}

  export default  store;