import React from 'react'
import Back_svg_logo from './back_svg_logo'

export default function navbar(props) {

  return (
    props.def_habbit.map((value, index, array) => {
      return <div key={1} className='Navbar'>

        {props.def_habbit[0].back ?
          <div key={2} className='Navbar_back_btn' onClick={props.back_out_function}>
            <Back_svg_logo></Back_svg_logo>
          </div> : ''
        }

        <div key={4} className='Navbar_title_box'>
          <h3 key={5} className='Navbar_title'>{props.def_habbit[0].title}</h3>
        </div>
        {props.def_habbit[0].option ?
          <div key={6} className='Navbar_option' onClick={props.open_info_section}>
            <div key={7} className='Navbar_option_box'>
              <div key={8} className='dot'></div>
              <div key={9} className='dot'></div>
              <div key={10} className='dot'></div>
            </div>
          </div> : ''
        }
      </div>

    })
  )
}
