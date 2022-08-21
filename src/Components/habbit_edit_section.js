import React from 'react'
export default function habbit_edit(props) {
    return (
        <>
        <div className='habbit_edit_section_background'></div>
        <div className='habbit_edit_section'>
            <div className='habbit_edit_box'>
                <div className='habbit_edit_sub_box'>
                    <h4 className='habbit_edit_title'>Title</h4>
                    <input className='habbit_edit_input' id='habbit_edit_input' autoComplete='off'></input>
                </div>
                <div className='habbit_edit_sub_btn_box'>
                    <button className='habbit_edit_sub_btn' onClick={props.open_option_edit_cancel}>Cancel</button>
                    <button className='habbit_edit_sub_btn' onClick={props.open_option_edit_done}>Done</button>
                </div>
            </div>
        </div>
        </>
    )
}
