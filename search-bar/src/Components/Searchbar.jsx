

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from "styled-components"
const Searchbar = ({setQuery,suggestion}) => {
   const [inputText,setInputText]=useState("")
   const [active,setActive]=useState(0)

   const handleInputText= (e)=>{
    setInputText(e.target.value)
   }

   useEffect(()=>{
     setQuery(inputText)
   },[inputText,setQuery])
    return (
        <div>
            <Wrapper>
            <SearchbarWrapper>
            <Input value={inputText} onChange={handleInputText} />
            </SearchbarWrapper>
       {  !!suggestion.length &&   <SuggestionBox limit={5} active={active}>
            {
                suggestion.map((item,index)=>{
                    return(
                        <div key={index} onMouseOver={()=>{
                               setActive(index+1) 
                        }}>
                                {item}
                        </div>

                    )
                })
            }
            </SuggestionBox>
       }
            </Wrapper>
        </div>
    );
};

const SearchbarWrapper=styled.div`
border :1px solid black;
display:flex;
align-item:center;
padding: 5px 10px
`;

const Input= styled.input`
border:none;
outline:none;
font-size:22px;
`
const Wrapper =styled.div`
max-width:400px;
margin:auto;`


const SuggestionBox=styled.div`
border:1px solid black
display:flex;
flex-direction:column;
max-height:${({limit})=>`${limit*23}px`};
margin:auto;
overflow:auto;
& * {
    flex:1;
    text-align:left;
    padding:10px
    padding-left:30px;
    border:1px solid black
}
& :nth-child(${({active})=>active}){
    background:teal;
    cursor:pointer
}
`


export default Searchbar;