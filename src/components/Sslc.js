import React from "react";
import './styles.css';
import { useState } from "react";
import axios from "../api/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Sslc = props =>{
    const [year,setYear] = useState('');
    const [examtype,setExamType] = useState('');
    const [medium,setMedium] = useState('');
    const [subject,setSubject] = useState();

    const onYearChange = (event)=>{
        setYear(event.target.value);
    }
    const onExamTypeChange = (event)=>{
        setExamType(event.target.value);
    }
    const onSubjectChange = (event)=>{
        setSubject(event.target.value);
    }
    const onMediumChange = (event)=>{
        setMedium(event.target.value);
    }
    const onSubmitHandler = async(event)=>{
        try{
            event.preventDefault();
            const {data} = await axios.post('/sslc',{year:year,examtype:examtype,subject:subject,medium:medium});
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
            console.log("Sslc error",err);
        }
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler} className='form'>
                <ToastContainer/>
                <h1>SSLC QN PAPERS</h1>
                <div className="row">
                    <div className="title">
                        <span>Year:</span>
                        <span>Exam-Type:</span>
                        <span>Subject:</span>
                        <span>Medium:</span>
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
                        <select name='exam-type' id='exam-type' onChange={onExamTypeChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='Quaterly'>Quaterly Exam</option>
                            <option value='Halfyearly'>Half Yearly Exam</option>
                            <option value='Annually'>Public Exam</option>
                        </select>
                        <select name='subject' id='subject' onChange={onSubjectChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='Tamil'>Tamil</option>
                            <option value='English'>English</option>
                            <option value='Maths'>Maths</option>
                            <option value='Science'>Science</option>
                            <option value='Social-Science'>Social Science</option>
                        </select>
                        <select name='medium' id='medium' onChange={onMediumChange}>
                            <option selected disabled hidden>Choose Here</option>
                            <option value='Tamil'>Tamil</option>
                            <option value='English'>English</option>
                        </select>
                    </div>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Sslc;