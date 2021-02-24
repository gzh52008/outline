import React,{useReducer} from 'react';

const initState = [
    { id: 1, name: "goods1", price: 98, qty: 2 },
    { id: 2, name: "goods2", price: 198, qty: 2 },
    { id: 3, name: "goods3", price: 998, qty: 1 },
];
const reducer = function (state, action) {
    switch (action.type) {
        // action:{type:'add',goods}
        case 'add':
            return [action.goods, ...state];

        // action:{type:'remove',id}
        case 'remove':
            return state.filter(item => item.id != action.id)
        case 'clear':
            return []
    }
}

export const myContext = React.createContext(null)

function Provider(props){
    const store = useReducer(reducer, initState);
    return (
        <myContext.Provider value={store}>
            {props.children}
        </myContext.Provider>
    )
}

export default Provider;