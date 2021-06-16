import styled from "styled-components";

export const Wrapper=styled.div`
    display:flex;
    align-items: flex-start;
    padding: 0px 16px;
    background: #F7F9FC;
    border: 1px solid #E4E9F2;
    box-sizing: border-box;
    border-radius: 8px;
    width: 380px;
    height: 48px;
    margin-left:20px;
    @media only screen and (max-width: 728px) {
        width: 320px;
    }
`;

export const SearchInput=styled.input`
    width:100%;
    background:transparent;
    border:none;
    margin-top:10px;
    padding-top:5px;
    outline:none;
    font-size:16px;

`

