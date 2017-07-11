import React from 'react';
import StepListItem from './step_list_item';
// import StepForm from './step_form';

const StepList = (props) =>{
  console.log(props);
  return (
    <div>
      <ul>
        {props.steps.map((step)=>
          <StepListItem key={step.id} step={step} removeStep={props.removeStep}/>)
        }
      </ul>
    
    </div>
);};

export default StepList;
