import React from 'react'
import Edit_svg_icon from './edit_svg_icon'
import Delete_svg_icon from './delete_svg_icon'

export default function habbit_option(props) {
  return (
    <div className='habbit_option_box'>
                <div className='habbit_title_box' onClick={props.open_habbit} >
                    <h4 className='habbit_title'>
                        {props.title}
                    </h4>
                </div>

                <div className='Navbar_option' onClick={props.open_option_edit}>
                   <Edit_svg_icon></Edit_svg_icon>
                </div>

                <div className='Navbar_option' onClick={props.open_option_delete}>
                    <Delete_svg_icon></Delete_svg_icon>
                </div>
            </div>
  )
}
