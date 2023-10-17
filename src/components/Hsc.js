import React, {useState } from "react";
import './styles.css'
import axios from "../api/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hsc = props =>{
    const [year,setYear] = useState('');
    const [examtype,setExamtype] = useState('');
    const [subject,setSubject] = useState('');
    const [medium,setMedium] = useState('');
    const [group,setGroup] = useState('');
    const [standard,setStandard] = useState('');
    const [bool,setBool] = useState(false);
    const onYearChange = (event)=>{
        setYear(event.target.value);
    }
    const onExamTypeChange = (event)=>{
        setExamtype(event.target.value);
    }
    const onSubjectChange = (event)=>{
        setSubject(event.target.value);
    }
    const onMediumChange = (event)=>{
        setMedium(event.target.value);
    }
    const onGroupChange = (event)=>{
        setGroup(event.target.value);
        setBool(true);
    }
    const onStandardChange = (event)=>{
        setStandard(event.target.value);
    }
    const onSubmitHandler = async(event)=>{
        try{
            event.preventDefault();
            const {data} = await axios.post('/hsc',{standard:standard,year:year,examtype:examtype,subject:subject,medium:medium})
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
            console.log("Hsc Err",err);
        }
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler} className='form'>
                <ToastContainer/>
                <h1>HSC QN PAPERS</h1>
                <div className="row">
                    <div className="title">
                        <span>Standard:</span>
                        <span>Year:</span>
                        <span>Exam-Type:</span>
                        <span>Group</span>
                        {bool && <span>Subject:</span>}
                        <span>Medium:</span>
                    </div>
                    <div className="select">
                    <select name='standard' id='standard' onChange={onStandardChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                        </select>
                        <select name='year' id='year' onChange={onYearChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='2019'>2019</option>
                            <option value='2020'>2020</option>
                            <option value='2021'>2021</option>
                            <option value='2022'>2022</option>
                            <option value='2023'>2023</option>
                        </select>
                        <select name='exam-type' id='exam-type' onChange={onExamTypeChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='quaterly'>Quaterly Exam</option>
                            <option value='halfyearly'>Half Yearly Exam</option>
                            <option value='public'>Public Exam</option>
                        </select>
                        <select name='group' id='group' onChange={onGroupChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='Biology'>Biology</option>
                            <option value='ComputerScience'>ComputerScience</option>
                            <option value='Arts'>Arts</option>
                            <option value='BussinessMaths'>BussinessMaths</option>
                        </select>
                        {group ==='Biology' && <select name='subject' id='subject' onChange={onSubjectChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='biology'>Biology</option>
                            <option value='physics'>Physics</option>
                            <option value='maths'>Maths</option>
                            <option value='chemistry'>Chemistry</option>
                            <option value='english'>English</option>
                            <option value='tamil'>Tamil</option>
                        </select>}
                        {group ==='ComputerScience' && <select name='subject' id='subject' onChange={onSubjectChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='tamil'>Tamil</option>
                            <option value='english'>English</option>
                            <option value='computerScience'>ComputerScience</option>
                            <option value='physics'>Physics</option>
                            <option value='maths'>Maths</option>
                            <option value='chemistry'>Chemistry</option>
                        </select>}
                        {group==='Arts'  && <select name='subject' id='subject' onChange={onSubjectChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='tamil'>Tamil</option>
                            <option value='english'>English</option>
                            <option value='computerScience'>ComputerScience</option>
                            <option value='economics'>Economics</option>
                            <option value='accountancy'>Accoundancy</option>
                            <option value='commerce'>Commerce</option>
                        </select>}
                        {group==='BussinessMaths' && <select name='subject' id='subject' onChange={onSubjectChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='taamil'>Tamil</option>
                            <option value='english'>English</option>
                            <option value='bussinessMaths'>BussineesMaths</option>
                            <option value='economics'>Economics</option>
                            <option value='accountancy'>Accoundancy</option>
                            <option value='commerce'>Commerce</option>
                        </select>}
                        <select name='medium' id='medium' onChange={onMediumChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='tamil'>Tamil</option>
                            <option value='english'>English</option>
                        </select>
                    </div>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Hsc;