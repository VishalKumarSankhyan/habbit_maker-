import React from 'react'
import Habbit_btn from './habbit_btn'

export default function habbit_section(props) {

    var habbit_temp_btn_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    let temp_day_arr_list;
    var temp_dispose_arr = [];

    return (
        <div className='habbit_section'>
            <div className='habbit_section_box'>
                {
                    props.temp_habbit.map((value_1, index_1) => {
                        temp_day_arr_list = habbit_temp_btn_array.map((element, i) => {
                            temp_dispose_arr = Object.entries(props.temp_habbit[0]);
                            return <Habbit_btn btn_status={temp_dispose_arr[i + 2][1]} key={i} value={element} habbit_btn_click={props.habbit_btn_click} temp_habbit ={props.temp_habbit[0].sno+'_'+element}></Habbit_btn>    
                        })
                        return temp_day_arr_list;
                    })
                }
            </div>
        </div>
    )
}
