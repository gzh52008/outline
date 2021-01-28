import React from 'react'
import classNames from 'classnames'

function TodoButton(props){
    console.log('Button.props=',props)
    return <button style={{margin:'0 5px'}} className={classNames("btn btn-sm",props.className)} onClick={props.onClick}>{props.children}</button>
}

export default TodoButton;