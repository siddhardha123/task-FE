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
    const handleCreateJobClick = () => {
        setIsFormOpen(true);
        console.log("clicked")
    };

    const ButtonConfig = [
        {
            "text": "create Job",
            "action": handleCreateJobClick,
        }
    ]


    return (
        <>

            <div className='flex mt-3' >
                {ButtonConfig.map((data) => (
                    <div className='mx-2'>
                        <CustomButton props={data} style={"bg-blue-200"} />
                    </div>
                ))}
             
                {isFormOpen && <JobForm  setIsFormOpen={setIsFormOpen}/>}


            </div>
            <div className='md:grid md:grid-cols-2 gap-8 p-10 bg-gray-200 mt-10' >
            {jobs && jobs.map((job)=>(
                <JobCard {...job}/>
            ))}
            </div>
            
        </>


    );
}

export default MainComponent;