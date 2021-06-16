import { SearchInput, Wrapper } from "./searchstyles"
import SearchIcon from '../../assets/img/search.png'
import styled from "styled-components"

const IconImg=styled.img`

padding-top:10px;

`;

export const SeachBar=()=>{
    return (
        <Wrapper>
            <IconImg  src={SearchIcon}/>
            <SearchInput placeholder={`Search Task..`} type={`text`} />
        </Wrapper>
    )
}