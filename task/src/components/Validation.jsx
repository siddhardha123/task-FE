
import React,{useState} from "react";

const JobForm = () => {
    const [step, setStep] = useState(1);
    const [jobData, setJobData] = useState({
    title: '',
    description: '',
    location: '',
    applyType: '',
    // other fields
    });
    
    const [errors, setErrors] = useState({});
    
    const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJobData((prevData) => ({
    ...prevData,
    [name]: value,
    }));
    setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: '',
    }));
    };
    
    const handleRadioChange = (event) => {
    setJobData((prevData) => ({
    ...prevData,
    applyType: event.target.value,
    }));
    };
    
    const handleNext = () => {
    const { title, description, location } = jobData;
    const nextErrors = {};
    if (!title) {
    nextErrors.title = 'Title is required';
    }
    if (!company) {
    nextErrors.company = 'company is required';
    }
    if (!industry) {
    nextErrors.industry = 'Industry is required';
    }
    if (Object.keys(nextErrors).length > 0) {
    setErrors(nextErrors);
    return;
    }
    setStep((prevStep) => prevStep + 1);
    };
    
    const handleSubmit = (event) => {
    event.preventDefault();
    // send POST request to MockAPI to save data
    };
    
    const renderStep1 = () => (
    <div className="flex flex-col space-y-4">
    <label  className="font-bold" htmlFor="title">
     Title:
     <input
       className="border border-gray-400 rounded px-3 py-2"
       type="text"
       name="title"
       value={jobData.title}
       onChange={handleInputChange}
       required
     />
   </label>
    
    {errors.title && (
    <span className="text-red-500">{errors.title}</span>
    )}
    <input
         type="text"
         name="title"
         value={jobData.title}
         onChange={handleInputChange}
         required
       />
    {errors.description && (
    <span className="text-red-500">{errors.description}</span>
    )}
    <textarea
         name="description"
         value={jobData.description}
         onChange={handleInputChange}
         required
       ></textarea>
    {errors.location && (
    <span className="text-red-500">{errors.location}</span>
    )}
    <input
         type="text"
         name="location"
         value={jobData.location}
         onChange={handleInputChange}
         pattern="[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d"
         required
       />
    <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleNext}>Next</button>
    </div>
    );
    
    const renderStep2 = () => (
    <div className="flex flex-col space-y-4">
    <label>
    Apply Type:
    <input
    type="radio"
    name="applyType"
    value="quickApply"
    checked={jobData.applyType === 'quickApply'}
    onChange={handleRadioChange}
    required
    />{' '}
    Quick Apply
    </label>
    <label>
    <input
    type="radio"
    name="applyType"
    value="externalApply"
    checked={jobData.applyType === 'externalApply'}
    onChange={handleRadioChange}
    required
    />{' '}
    External Apply
    </label>
    <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleSubmit}>Save</button>
    </div>
    );
    
    return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full sm:w-1/2">
    {step === 1 ? renderStep1() : renderStep2()}
    </div>
    </div>
    );
    }

export default JobForm;