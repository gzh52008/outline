/**
 * 操作本地存储数据
 * 添加
 * 修改
 * 删除
 * 监听：当数据有修改时，自动刷新组件
 */
import {useState} from 'react';

 export function useStorage(key){
    let initData = localStorage.getItem(key);
    try{
        initData = JSON.parse(initData)
    }catch(err){
        initData = initData;
    }

    let [data,changeData] = useState(initData);

    const setData = function(newData){
        
        // 删除
        if(newData === 'delete'+key[0].toUpperCase()+key.slice(1)){
            localStorage.removeItem(key);
            changeData(null);
            return 
        }

        // 添加/修改
        if(typeof newData === 'object'){
            newData = JSON.stringify(newData);
        }
        localStorage.setItem(key,newData);
        changeData(newData);
        
    }

    return [data,setData]
 }

//  const [userInfo,changeUser] = useStorage('userInfo')
// changeUser('deleteUserInfo')