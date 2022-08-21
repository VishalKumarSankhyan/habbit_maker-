import React from 'react'

export default function footer_button(props) {
  return (
    <div className='footer_button_section'>
        <button className='footer_cancel_button' onClick={props.back_out_function}>Cancel</button>
        <button className='footer_done_button' onClick={props.Done_habbit_btn}>Done</button>
    </div>
  )
}
