import React from 'react'
export default function habbit_maker(props) {
    return (
        <>
        <div className='habbit_maker_section_background'></div>
        <div className='habbit_maker_section'>
            <div className='habbit_maker_box'>
                <div className='habbit_maker_sub_box'>
                    <h4 className='habbit_maker_title'>Title</h4>
                    <input className='habbit_maker_input' id='habbit_maker_input' autoComplete='off'></input>
                </div>
                <div className='habbit_maker_sub_btn_box'>
                    <button className='habbit_maker_sub_btn' onClick={props.habbit_cancel_button}>Cancel</button>
                    <button className='habbit_maker_sub_btn' onClick={props.habbit_add_btn}>Done</button>
                </div>
            </div>
        </div>
        </>
    )
}
