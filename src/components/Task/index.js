import { useState } from "react";
import styled from "styled-components"
import { CheckBox } from "../CheckBox";
import { CompleteIcon } from "../Icons/CompleteIcon";
import { EditItcon } from "../Icons/EditIcon";


const TaskWrapper=styled.div`
    background: #FFFFFF;
    border-radius: 6px;
    height:42px;
    width:620px;
    display:flex;
    align-items:center;
    padding-right:10px;
    margin-top:20px;
    margin-bottom:20px;

    @media only screen and (max-width: 728px) {
        width:100%;
    }
`;


const TaskLabel=styled.p`
color: #000000;
font-size:18px;
flex-grow:1;

`;





export const Task=(props)=>{

    const [checked,setChecked]=useState(false);

    const handleChange=(evt)=>{
        const target=evt.target;

        if(target.checked){
            setChecked(true);
        }
        else{
            setChecked(false);
        }

    }


    return (
        <TaskWrapper style={props.completed?{opacity:'0.5'}:{}}>
            {props.completed?<CompleteIcon isCompleted={true}/>:<CheckBox isCompleted={props.completed} onHandleChange={(evt) => handleChange(evt)}/>}
            <TaskLabel>{props.label}</TaskLabel>

            {checked && !props.completed?
            <>
            <EditItcon />
            <CompleteIcon isCompleted={false}/>
            
            </>

            :
            ''
            }
        </TaskWrapper>
    )
}