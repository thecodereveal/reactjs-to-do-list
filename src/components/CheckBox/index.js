import styled from "styled-components"


const CheckBoxWrapper=styled.input`
    height:20px;
    width:20px;
    display:flex;

`;

const CheckBoxLabel=styled.span`
    padding-left:10px;
    color:white;
    padding-right:10px;
`

export const CheckBox=(props)=>{

    return (
        <>
        <CheckBoxWrapper name={props.name} type="checkbox" checked={props.isChecked} disabled={props.isDisabled} onChange={props.onHandleChange}/>
        <CheckBoxLabel>{props.title}</CheckBoxLabel>
        </>
    )
}