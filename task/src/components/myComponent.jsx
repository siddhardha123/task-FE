import { useState } from 'react';
import JobForm from './JobForm';
import CustomButton from './shared/CustomButton';
const MainComponent = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
   
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
    const  ButtonConfig = [
         {
            "text" : "create Job",
            "action" : handleCreateJobClick,
        },
        {
            "text" : "Edit",
            "action" : handleEditClick,
        },
        {
            "text" : "Delete",
            "action" : handleDeleteClick,
        },
        
    ]
      

    return (
        <div className='flex mt-3'>
            {ButtonConfig.map((data)=>(
                 <div className='mx-2'>
                 <CustomButton props={data} style={"bg-blue-200"}/>
                 </div>
            ))}

            {isFormOpen && <JobForm />}
        </div>
       
    );
}

export default MainComponent;