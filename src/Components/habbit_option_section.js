import React from 'react'
import Habbit_option from './habbit_option'

export default function habbit_option_section(props) {
    return (
        <div className='habbit_option_section'>
            {
                props.init_habbit_maker.map((element, i) => {
                    return <Habbit_option  open_option_edit={()=>{props.open_option_edit(element)}} key={i} title={element.title} open_habbit= {() => { props.open_habbit(element) }} open_option_delete={() => { props.open_option_delete(element) }} ></Habbit_option>
                })
            }

        </div>
    )
}
