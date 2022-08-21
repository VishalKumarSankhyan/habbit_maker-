import React from 'react'

export default function habbit_info_section(props) {
    return (
        <>
            <div className='habbit_info_section_background'></div>
            <div className='habbit_info_section'>
                <div className='habbit_info_box'>
                    <div className='habbit_info_sub_box'>
                        <h4 className='habbit_info_title'>App Name - Habbit maker</h4>
                    </div>
                    <div className='habbit_info_sub_box'>
                        <h4 className='habbit_info_title'>Version - 1.0</h4>
                    </div>
                    <div className='habbit_info_sub_box'>
                        <h4 className='habbit_info_title'>Developed by - VKS</h4>
                    </div>
                    <div className='habbit_info_sub_btn_box'>
                        <button className='habbit_info_sub_btn' onClick={props.close_info_section}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
