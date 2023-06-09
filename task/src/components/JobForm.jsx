import { useState} from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import postJob from '../apis/postJob';
const JobForm = ({setIsFormOpen}) => {
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});
   
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
        const { title, company, industry } = jobData;
        const nextErrors = {};
        if (!title) {
        nextErrors.title = 'Title is required';
        }
        if (!company) {
        nextErrors.company = 'company is required';
        }
        if (!industry) {
        nextErrors.industry = 'industry is required';
        }
        if (Object.keys(nextErrors).length > 0) {
        setErrors(nextErrors);
        return;
        }
        setStep((prevStep) => prevStep + 1);

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(jobData)
        postJob(jobData).then(()=>{
            console.log("data is sent")
            setJobData({
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
            })
            setIsFormOpen(false);
            window.location.reload();


        }).catch((err) =>{
             console.log(err)
        })

    };

    
   

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center " onClick={()=>{setIsFormOpen(false)}}>
            <div className="bg-white p-4 rounded-lg
w-[90%]  md:w-1/2" onClick={(e) => e.stopPropagation()} >
                {step === 1 ? <StepOne jobData={jobData} handleInputChange={handleInputChange} handleNext={handleNext} errors={errors}/> :
                    <StepTwo jobData={jobData} handleRadioChange={handleRadioChange} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />}
            </div>
        </div>

    )

}

export default JobForm