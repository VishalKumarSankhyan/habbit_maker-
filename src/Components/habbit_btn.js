import React from 'react'

export default function habbit_btn(props) {
    return (
        <>
            {
                props.btn_status ? <div className='habbit_section_btn btn_active' id={props.value} onClick={() => { props.habbit_btn_click(props.temp_habbit) }}>
                    <p className='habbit_section_btn_inner'>
                        {props.value}
                    </p>
                </div> :  <div className='habbit_section_btn' id={props.value} onClick={() => { props.habbit_btn_click( props.temp_habbit) }}>
                    <p className='habbit_section_btn_inner'>
                        {props.value}
                    </p>
                </div>
            }
        </>
    )
}
