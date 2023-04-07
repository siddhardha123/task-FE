import { useState,useEffect } from 'react';
import JobForm from './JobForm';
import CustomButton from './shared/CustomButton';
import JobCard from './shared/JobCard';
import getJobs from '../apis/getJobs';
const MainComponent = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [jobs,setJobs] = useState()
    useEffect(()=>{
        getJobs().then((data)=>{
                setJobs(data)
                console.log(jobs)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    // const jobs = [
    //     {
    //         "title": "UI UX Designer",
    //         "company": "Great Vibes",
    //         "industry": "Information Technology",
    //         "location": "Chennai,Tamil Nadu,India",
    //         "remoteType": "In-office",
    //         "expMin": "1",
    //         "expMax": "2",
    //         "salaryMin": "30,000",
    //         "salaryMax": "50,000",
    //         "totalEmployees": "51-200",
    //         "applyType": "External apply"
    //     },
    //     {
    //         "title": "UI UX Designer",
    //         "company": "Great Vibes",
    //         "industry": "Information Technology",
    //         "location": "Chennai,Tamil Nadu,India",
    //         "remoteType": "In-office",
    //         "expMin": "1",
    //         "expMax": "2",
    //         "salaryMin": "30,000",
    //         "salaryMax": "50,000",
    //         "totalEmployees": "51-200",
    //         "applyType": "External apply"
    //     },
    //     {
    //         "title": "UI UX Designer",
    //         "company": "Great Vibes",
    //         "industry": "Information Technology",
    //         "location": "Chennai,Tamil Nadu,India",
    //         "remoteType": "In-office",
    //         "expMin": "1",
    //         "expMax": "2",
    //         "salaryMin": "30,000",
    //         "salaryMax": "50,000",
    //         "totalEmployees": "51-200",
    //         "applyType": "External apply"
    //     },
    //     {
    //         "title": "UI UX Designer",
    //         "company": "Great Vibes",
    //         "industry": "Information Technology",
    //         "location": "Chennai,Tamil Nadu,India",
    //         "remoteType": "In-office",
    //         "expMin": "1",
    //         "expMax": "2",
    //         "salaryMin": "30,000",
    //         "salaryMax": "50,000",
    //         "totalEmployees": "51-200",
    //         "applyType": "External apply"
    //     },
        

    // ]
    const handleCreateJobClick = () => {
        setIsFormOpen(true);
        console.log("clicked")
    };

    const handleEditClick = () => {
        // implement edit functionality
    };

    const handleDeleteClick = () => {
        // implement delete functionality
    };
    const ButtonConfig = [
        {
            "text": "create Job",
            "action": handleCreateJobClick,
        },
        {
            "text": "Edit",
            "action": handleEditClick,
        },
        {
            "text": "Delete",
            "action": handleDeleteClick,
        },

    ]


    return (
        <>

            <div className='flex mt-3'>
                {ButtonConfig.map((data) => (
                    <div className='mx-2'>
                        <CustomButton props={data} style={"bg-blue-200"} />
                    </div>
                ))}

                {isFormOpen && <JobForm />}


            </div>
            <div className='grid grid-cols-2 gap-8 p-10 bg-gray-200' >
            {jobs  && jobs.map((job)=>(
                <JobCard {...job}/>
            ))}
            </div>
            
        </>


    );
}

export default MainComponent;