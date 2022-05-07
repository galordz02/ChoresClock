import React from 'react'
import '../styles/NewActivityAndTemplates.css'
import { ReactComponent as Template } from '../images/template.svg'

function NewActivityAndTemplates() {

  return <div className='NAAT'>
    <div className='NAButton'>
      <i className="bi bi-plus-lg "></i>
      <div>New Activity</div>
    </div>
    <div className='TemplatesButton'>
      <Template className='Templates'/>
      <div className='TemplatesText'>Templates</div>
    </div>
  </div>
}

export default NewActivityAndTemplates