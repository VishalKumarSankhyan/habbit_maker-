import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Habbit_section from './Components/habbit_section';
import Habbit_option_section from './Components/habbit_option_section';
import Habbit_maker from './Components/habbit_maker';
import Footer_button from './Components/footer_button';
import Habbit_add_btn from './Components/habbit_add_btn';
import Habbit_edit from './Components/habbit_edit_section';
import Habbit_info from './Components/habbit_info_section';

function App() {

  var def_habbit_arr = {
    title: 'Habbit Maker',
    option: true,
    back: false
  }

  const habbit_array = {
    sno: 1,
    title: 'Gym',
    day_1: false,
    day_2: false,
    day_3: false,
    day_4: false,
    day_5: false,
    day_6: false,
    day_7: false,
    day_8: false,
    day_9: false,
    day_10: false,
    day_11: false,
    day_12: false,
    day_13: false,
    day_14: false,
    day_15: false,
    day_16: false,
    day_17: false,
    day_18: false,
    day_19: false,
    day_20: false,
    day_21: false
  }

  let init_habbit_maker;
  let temp_json_arr = habbit_array;

  if (localStorage.getItem('habbit_maker') === null) {
    init_habbit_maker = [];
  }
  else {
    init_habbit_maker = JSON.parse(localStorage.getItem('habbit_maker'));
  }

  var [def_habbit, setdef_habbit] = useState([def_habbit_arr]);

  var [habbit, setHabbit] = useState(init_habbit_maker);

  useEffect(() => {
    localStorage.setItem('habbit_maker', JSON.stringify(habbit));
  }, [habbit])

  const [temp_habbit, set_temp_Habbit] = useState([temp_json_arr]);

  var habbit_btn_array = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]];
  var [habbit_button_array, set_habbit_btn_array] = useState(habbit_btn_array);

  /* add */
  const habbit_add_btn = () => {
    var habbit_maker_section = document.querySelector('.habbit_maker_section');
    var input_value = document.querySelector('#habbit_maker_input').value;
    var habbit_maker_section_background = document.querySelector('.habbit_maker_section_background');
    var habbit_add_button = document.querySelector('.habbit_add_button');
    var App_body = document.querySelector('.App_body');
    var sno = init_habbit_maker.length;
    if ((localStorage.getItem('habbit_maker')) === '[]') {
      sno = 1;
    }
    else {
      sno = (habbit[habbit.length - 1].sno) + 1;
    }

    var temp_json = {
      sno: sno,
      title: input_value,
      day_1: false,
      day_2: false,
      day_3: false,
      day_4: false,
      day_5: false,
      day_6: false,
      day_7: false,
      day_8: false,
      day_9: false,
      day_10: false,
      day_11: false,
      day_12: false,
      day_13: false,
      day_14: false,
      day_15: false,
      day_16: false,
      day_17: false,
      day_18: false,
      day_19: false,
      day_20: false,
      day_21: false
    }
    setHabbit([...habbit, temp_json]);

    habbit_maker_section.style.display = "none";
    document.querySelector('#habbit_maker_input').value = '';
    habbit_maker_section_background.style.display = 'none';
    habbit_add_button.style.display='flex';
    App_body.style.overflow ='';
  }
  /* update habbit info */
  const habbit_btn_click = (e) => {
    e = e.split('_');
    var habbit_btn_sno = parseInt(e[0]);
    var habbit_btn_index = parseInt(e[1]);

    const new_temp_habbit_state = temp_habbit.map((obj) => {
      obj.sno = habbit_btn_sno;
      if (habbit_btn_index === 1) {
        if (obj.day_1) {
          obj.day_1 = false;
        }
        else {
          obj.day_1 = true;
        }
      }
      if (habbit_btn_index === 2) {
        if (obj.day_2) {
          obj.day_2 = false;
        }
        else {
          obj.day_2 = true;
        }
      }
      if (habbit_btn_index === 3) {
        if (obj.day_3) {
          obj.day_3 = false;
        }
        else {
          obj.day_3 = true;
        }
      }
      if (habbit_btn_index === 4) {
        if (obj.day_4) {
          obj.day_4 = false;
        }
        else {
          obj.day_4 = true;
        }
      }
      if (habbit_btn_index === 5) {
        if (obj.day_5) {
          obj.day_5 = false;
        }
        else {
          obj.day_5 = true;
        }
      }
      if (habbit_btn_index === 6) {
        if (obj.day_6) {
          obj.day_6 = false;
        }
        else {
          obj.day_6 = true;
        }
      }
      if (habbit_btn_index === 7) {
        if (obj.day_7) {
          obj.day_7 = false;
        }
        else {
          obj.day_7 = true;
        }
      }
      if (habbit_btn_index === 8) {
        if (obj.day_8) {
          obj.day_8 = false;
        }
        else {
          obj.day_8 = true;
        }
      }
      if (habbit_btn_index === 9) {
        if (obj.day_9) {
          obj.day_9 = false;
        }
        else {
          obj.day_9 = true;
        }
      }
      if (habbit_btn_index === 10) {
        if (obj.day_10) {
          obj.day_10 = false;
        }
        else {
          obj.day_10 = true;
        }
      }
      if (habbit_btn_index === 11) {
        if (obj.day_11) {
          obj.day_11 = false;
        }
        else {
          obj.day_11 = true;
        }
      }
      if (habbit_btn_index === 12) {
        if (obj.day_12) {
          obj.day_12 = false;
        }
        else {
          obj.day_12 = true;
        }
      }
      if (habbit_btn_index === 13) {
        if (obj.day_13) {
          obj.day_13 = false;
        }
        else {
          obj.day_13 = true;
        }
      }
      if (habbit_btn_index === 14) {
        if (obj.day_14) {
          obj.day_14 = false;
        }
        else {
          obj.day_14 = true;
        }
      }
      if (habbit_btn_index === 15) {
        if (obj.day_15) {
          obj.day_15 = false;
        }
        else {
          obj.day_15 = true;
        }
      }
      if (habbit_btn_index === 16) {
        if (obj.day_16) {
          obj.day_16 = false;
        }
        else {
          obj.day_16 = true;
        }
      }
      if (habbit_btn_index === 17) {
        if (obj.day_17) {
          obj.day_17 = false;
        }
        else {
          obj.day_17 = true;
        }
      }
      if (habbit_btn_index === 18) {
        if (obj.day_18) {
          obj.day_18 = false;
        }
        else {
          obj.day_18 = true;
        }
      }
      if (habbit_btn_index === 19) {
        if (obj.day_19) {
          obj.day_19 = false;
        }
        else {
          obj.day_19 = true;
        }
      }
      if (habbit_btn_index === 20) {
        if (obj.day_20) {
          obj.day_20 = false;
        }
        else {
          obj.day_20 = true;
        }
      }
      if (habbit_btn_index === 21) {
        if (obj.day_21) {
          obj.day_21 = false;
        }
        else {
          obj.day_21 = true;
        }
      }

      return obj;
    })
    set_temp_Habbit(new_temp_habbit_state);
  }

  /*Save */
  const Done_habbit_btn = () => {
    var habbit_section_var = document.querySelector('.habbit_section');
    var habbit_option_section = document.querySelector('.habbit_option_section');
    var footer_button_section = document.querySelector('.footer_button_section');
    var habbit_add_button = document.querySelector('.habbit_add_button');

    const new_def_state = def_habbit.map((obj) => {
      obj.title = 'Habbit Maker';
      obj.option = true;
      obj.back = false;
      return obj;
    })
   

    const new_temp_habbit = habbit.map((obj) => {
      if (parseInt(obj.sno) === parseInt(temp_habbit[0].sno)) {
        obj.day_1 = temp_habbit[0].day_1;
        obj.day_2 = temp_habbit[0].day_2;
        obj.day_3 = temp_habbit[0].day_3;
        obj.day_4 = temp_habbit[0].day_4;
        obj.day_5 = temp_habbit[0].day_5;
        obj.day_6 = temp_habbit[0].day_6;
        obj.day_7 = temp_habbit[0].day_7;
        obj.day_8 = temp_habbit[0].day_8;
        obj.day_9 = temp_habbit[0].day_9;
        obj.day_10 = temp_habbit[0].day_10;
        obj.day_11 = temp_habbit[0].day_11;
        obj.day_12 = temp_habbit[0].day_12;
        obj.day_13 = temp_habbit[0].day_13;
        obj.day_14 = temp_habbit[0].day_14;
        obj.day_15 = temp_habbit[0].day_15;
        obj.day_16 = temp_habbit[0].day_16;
        obj.day_17 = temp_habbit[0].day_17;
        obj.day_18 = temp_habbit[0].day_18;
        obj.day_19 = temp_habbit[0].day_19;
        obj.day_20 = temp_habbit[0].day_20;
        obj.day_21 = temp_habbit[0].day_21;
      }
      return obj;
    })
    setHabbit(new_temp_habbit);
    setdef_habbit(new_def_state)
    habbit_section_var.style.display = 'none';
    habbit_option_section.style.display = 'flex';
    footer_button_section.style.display = 'none';
    habbit_add_button.style.display='flex';
  }
  /* Delete */
  const open_option_delete = (item) => {
    setHabbit(habbit.filter((e) => {
      return e !== item;
    }))
  }
  /* open */
  const open_habbit = (item) => {
    var habbit_section_var = document.querySelector('.habbit_section');
    var habbit_option_section = document.querySelector('.habbit_option_section');
    var footer_button_section = document.querySelector('.footer_button_section');
    var habbit_add_button = document.querySelector('.habbit_add_button');
    const new_state = temp_habbit.map((obj) => {
      obj.title = item.title;
      obj.sno = item.sno;
      obj.day_1 = item.day_1;
      obj.day_2 = item.day_2;
      obj.day_3 = item.day_3;
      obj.day_4 = item.day_4;
      obj.day_5 = item.day_5;
      obj.day_6 = item.day_6;
      obj.day_7 = item.day_7;
      obj.day_8 = item.day_8;
      obj.day_9 = item.day_9;
      obj.day_10 = item.day_10;
      obj.day_11 = item.day_11;
      obj.day_12 = item.day_12;
      obj.day_13 = item.day_13;
      obj.day_14 = item.day_14;
      obj.day_15 = item.day_15;
      obj.day_16 = item.day_16;
      obj.day_17 = item.day_17;
      obj.day_18 = item.day_18;
      obj.day_19 = item.day_19;
      obj.day_20 = item.day_20;
      obj.day_21 = item.day_21;

      return obj;
    })
    set_temp_Habbit(new_state);
    const new_def_state = def_habbit.map((obj) => {
      obj.title = item.title;
      obj.option = false;
      obj.back = true;
      return obj;
    })

    /*console.log("new state -",new_state)*/
    set_temp_Habbit(new_state);
    setdef_habbit(new_def_state)
    habbit_section_var.style.display = 'flex';
    habbit_option_section.style.display = 'none';
    footer_button_section.style.display = 'flex';
    habbit_add_button.style.display = 'none';
  }

  const back_out_function = () => {
    var habbit_section_var = document.querySelector('.habbit_section');
    var habbit_option_section = document.querySelector('.habbit_option_section');
    var footer_button_section = document.querySelector('.footer_button_section');
    var habbit_add_button = document.querySelector('.habbit_add_button');
    const new_def_state = def_habbit.map((obj) => {
      obj.title = 'Habbit Maker';
      obj.option = true;
      obj.back = false;
      return obj;
    })
    setdef_habbit(new_def_state)
    habbit_section_var.style.display = 'none';
    habbit_option_section.style.display = 'flex';
    footer_button_section.style.display = 'none';
    habbit_add_button.style.display='flex';
  }

  const open_habbit_maker = () => {
    var habbit_maker_section = document.querySelector('.habbit_maker_section');
    var habbit_maker_section_background = document.querySelector('.habbit_maker_section_background');
    var habbit_add_button = document.querySelector('.habbit_add_button');
    var App_body = document.querySelector('.App_body');
    habbit_maker_section.style.display = "block";
    habbit_maker_section_background.style.display = 'flex';
    habbit_add_button.style.display='none';
    App_body.style.overflow ='hidden';
  }

  const habbit_cancel_button = () => {
    var habbit_maker_section = document.querySelector('.habbit_maker_section');
    var habbit_maker_section_background = document.querySelector('.habbit_maker_section_background');
    var habbit_add_button = document.querySelector('.habbit_add_button');
    var App_body = document.querySelector('.App_body');
    document.querySelector('#habbit_maker_input').value = '';
    habbit_maker_section.style.display = 'none';
    habbit_maker_section_background.style.display = 'none';
    habbit_add_button.style.display='flex';
    App_body.style.overflow ='';
  }
var habbit_edit_arr;
  const open_option_edit = (e) =>{
    habbit_edit_arr = e;
    var habbit_edit_section_background = document.querySelector('.habbit_edit_section_background');
    var habbit_edit_section = document.querySelector('.habbit_edit_section');
    var habbit_edit_input = document.querySelector('.habbit_edit_input');
    var App_body = document.querySelector('.App_body');
    habbit_edit_input.value = e.title;
    habbit_edit_section.style.display='block';
    habbit_edit_section_background.style.display='flex';
    App_body.style.overflow ='hidden';
  }

  const open_option_edit_cancel =()=>{
    var habbit_edit_section_background = document.querySelector('.habbit_edit_section_background');
    var habbit_edit_section = document.querySelector('.habbit_edit_section');
    var App_body = document.querySelector('.App_body');
    habbit_edit_section.style.display='none';
    habbit_edit_section_background.style.display='none';
    App_body.style.overflow ='';
  }

  const open_option_edit_done =()=>{
    var habbit_edit_section_background = document.querySelector('.habbit_edit_section_background');
    var habbit_edit_section = document.querySelector('.habbit_edit_section');
    var habbit_edit_input = document.querySelector('.habbit_edit_input');
    var App_body = document.querySelector('.App_body');
    const new_edit_habbit = habbit.map((obj) => {
      if (parseInt(obj.sno) === parseInt(habbit_edit_arr.sno)) {
        obj.title = habbit_edit_input.value;
      }
      return obj;
    })
    console.log(new_edit_habbit)
    setHabbit(new_edit_habbit);

    habbit_edit_section.style.display='none';
    habbit_edit_section_background.style.display='none';
    App_body.style.overflow ='';
  }

  const open_info_section=()=>{
    var habbit_info_section_background = document.querySelector('.habbit_info_section_background');
    var habbit_info_section = document.querySelector('.habbit_info_section');
    var App_body = document.querySelector('.App_body');
    habbit_info_section.style.display='block';
    habbit_info_section_background.style.display='block';
    App_body.style.overflow ='hidden';
  }
  const close_info_section=()=>{
    var habbit_info_section_background = document.querySelector('.habbit_info_section_background');
    var habbit_info_section = document.querySelector('.habbit_info_section');
    var App_body = document.querySelector('.App_body');
    habbit_info_section.style.display='none';
    habbit_info_section_background.style.display='none';
    App_body.style.overflow ='';
  }

  return (
    <div className="App_body">

      <Navbar def_habbit={def_habbit} back_out_function={back_out_function} open_info_section ={open_info_section}></Navbar>

      <Habbit_option_section init_habbit_maker={habbit} open_habbit={open_habbit} open_option_delete={open_option_delete} open_option_edit={open_option_edit}></Habbit_option_section>

      <Habbit_section temp_habbit={temp_habbit} habbit_button_array={habbit_button_array} habbit_btn_click={habbit_btn_click} temp_json_arr={temp_json_arr}></Habbit_section>

      <Footer_button back_out_function={back_out_function} Done_habbit_btn={Done_habbit_btn}></Footer_button>

      <Habbit_maker habbit_add_btn={habbit_add_btn} habbit_cancel_button={habbit_cancel_button}></Habbit_maker>

      <Habbit_add_btn open_habbit_maker={open_habbit_maker}></Habbit_add_btn>

      <Habbit_edit open_option_edit_cancel={open_option_edit_cancel} open_option_edit_done={open_option_edit_done}></Habbit_edit>

      <Habbit_info close_info_section={close_info_section}></Habbit_info>

    </div>
  );
}

export default App;
