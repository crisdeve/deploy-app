import styled, { css } from "styled-components";

export const InputStyles = styled.input(({type}) => {

  if(type==='file'){
    return css`
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
    width: 148px;
    height: 46px;
    cursor: pointer; 
  `;
  }

})

export const Div = styled.div(({type}) => {

  if(type==='file'){
    return css`
    
    position: relative;

    cursor: pointer;
    p{
      
    }
  `;
  }

})