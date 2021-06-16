import React from 'react';

import CompleteCheckIcon from '../../../assets/img/check_all_big.png';
import MarkComplete from '../../../assets/img/check_all_black.png';


export const CompleteIcon=({isCompleted=false,...props})=>{
    return (
        
        <img src={isCompleted?CompleteCheckIcon:MarkComplete} height="32" width="32" {...props}/>
        
    
    )
}