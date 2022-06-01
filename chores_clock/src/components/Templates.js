import React from 'react'
import { ReactComponent as Template } from '../images/template.svg'
import styled from 'styled-components'

function Templates() {

    const TemplatesButton = styled.div`
    padding-top: 3px;
    padding-right: 5px;
    `;
    const TemplatesText = styled.div`
    height: 50%;
    font-size: 70%;
    padding: 0%;
    margin: 0%;
    `;

    return (
        <TemplatesButton>
            <Template className='Templates' style={{
                height: "50%",
                width: "35px",
                paddingLeft: "10px"
            }}/>
            <TemplatesText>Templates</TemplatesText>
        </TemplatesButton>
  
    )
    

}
  
  export default Templates