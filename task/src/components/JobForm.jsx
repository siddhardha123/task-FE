import { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import postData from '../apis/postData';
const JobForm = () => {
    const [step, setStep] = useState(1);
    const [jobData, setJobData] = useState({
        title: '',
        company: '',
        industry: '',
        location: '',
        remoteType: '',
        expMin: '',
        expMax: '',
        salaryMin: '',
        salaryMax: '',
        totalEmployees: '',
        applyType: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setJobData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRadioChange = (event) => {
        setJobData((prevData) => ({
            ...prevData,
            applyType: event.target.value,
        }));
    };

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(jobData)
        postData(jobData).then(()=>{
            console.log("data is sent")
        }).catch((err) =>{
             console.log(err)
        })
        // send POST request to MockAPI to save data
    };



    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg
w-[90%]  md:w-1/2">
                {step === 1 ? <StepOne jobData={jobData} handleInputChange={handleInputChange} handleNext={handleNext} /> :
                    <StepTwo jobData={jobData} handleRadioChange={handleRadioChange} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />}
            </div>
        </div>

    )

}

export default JobForm