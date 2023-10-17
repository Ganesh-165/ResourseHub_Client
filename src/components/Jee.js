import React from "react";
import {useState} from "react";
import './styles.css';
import axios from "../api/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Jee = ()=>{
    const [year,setYear] = useState('');
    const [month,setMonth] = useState('');
    const [type,setType] = useState('');
    const [shift,setShift] = useState('');
    const onYearChange = (event)=>{
        setYear(event.target.value);
    }
    const onMonthChange = (event)=>{
        setMonth(event.target.value);
    }
    const onShiftChange = (event)=>{
        setShift(event.target.value);
    }
    const onTypeChange = (event)=>{
        setType(event.target.value);
    }
    const onSubmitHandler = async(event)=>{
        try{
            event.preventDefault();
            const {data} = await axios.post('/jee',{year:year,type:type,month:month,shift:shift})
            if(data?.startsWith('drive')){
                window.open('https://'+data,'_blank','noopener,noreferrer');
            }
            else {
                toast.error("Paper Not Inserted", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }catch(err){
            console.log("Jee err",err);
        }
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler} className='form'>
                <ToastContainer/>
                <h1>JEE QN PAPERS</h1>
                <div className="row">
                    <div className="title">
                        <span>Year:</span>
                        <span>Type:</span>
                        <span>Month:</span>
                        <span>Shift:</span>
                    </div>
                    <div className="select">
                        <select name='year' id='year' onChange={onYearChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='2019'>2019</option>
                            <option value='2020'>2020</option>
                            <option value='2021'>2021</option>
                            <option value='2022'>2022</option>
                            <option value='2023'>2023</option>
                        </select>
                        <select name='type' id='type' onChange={onTypeChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='Jee-Main'>JEE Main</option>
                            <option value='Jee-Advance'>JEE Advance</option>
                        </select>
                        <select name='attempt' id='attempt' onChange={onMonthChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='Attempt-1'>Attempt-1</option>
                            <option value='Attempt-2'>Attempt-2</option>
                        </select>
                        <select name='shift' id='shift' onChange={onShiftChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='Shift1'>Shift1</option>
                            <option value='Shift2'>Shift2</option>
                        </select>
                    </div>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Jee;