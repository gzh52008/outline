import React from 'react'

function RenderProp(props) {
    console.log('RenderProp=', props);
    let user = { name: 'laoxie', age: 19, gender: '男' }
    return (
        <div>
            <header>
                {
                    props.renderHeader(user)
                }
            </header>
            <main>
                {
                    props.children({})
                }
            </main>
        </div>
    )
}

export default RenderProp;