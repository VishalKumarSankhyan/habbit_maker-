import React from 'react'

export default function habbit_add_btn(props) {
  return (
    <div className='habbit_add_button' onClick={props.open_habbit_maker}>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
      </svg>
    </div>
  )
}
