import { observable } from 'mobx'

const userStore = observable({
  userInfo: {},
    login(user){
        this.userInfo = user;
    },
    logout(){
        this.userInfo = {}
    }
})

export default userStore