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
            "color" : "#1597E4"
        },
        {
            "text" : "Edit",
            "action" : handleEditClick,
            "color" : "#1597E4"
        },
        {
            "text" : "Delete",
            "action" : handleDeleteClick,
            "color" : "#1597E4"
        },
        
    ]
      

    return (
        <div className='flex mt-3'>
            {ButtonConfig.map((data)=>(
                 <div className='mx-2'>
                 <CustomButton props={data}/>
                 </div>
            ))}

            {isFormOpen && <JobForm />}
        </div>
       
    );
}

export default MainComponent;