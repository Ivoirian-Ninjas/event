import React from 'react'

export default function ProgressBar(props) {
    console.log(props)
    return (
    <div className="stepShow">
        <p className={`stepMenu ${props.currentStep == 1 && 'currentActive'}`} onClick={()=> props.goToStep(1)} >Step 1</p>
        <p className={`stepMenu ${props.currentStep == 2 && 'currentActive'}`} onClick={()=> (props.typeOfSpace != '' && props.capacity != '' && props.region != '') && props.goToStep(2)}>Step 2</p>
        <p className={`stepMenu ${props.currentStep == 3 && 'currentActive'}`} onClick={()=> (props.country != '' && props.city != '' && props.street != '') && props.goToStep(3)}>Step 3</p>
        <p className={`stepMenu ${props.currentStep == 4 && 'currentActive'}`} onClick={()=> (props.name != '' && props.placeDesc != '' && props.activities.length != 0) && props.goToStep(4)}>Step 4</p>
        <p className={`stepMenu ${props.currentStep == 5 && 'currentActive'}`} onClick={()=> (props.name != '' && props.placeDesc != '' && props.activities.length != 0) && props.goToStep(5)}>Step 5</p>
        <p className={`stepMenu ${props.currentStep == 6 && 'currentActive'}`} onClick={()=> (props.images.length != 0) && props.goToStep(6)}>Step 6</p>
        <p className={`stepMenu ${props.currentStep == 7 && 'currentActive'}`} onClick={()=> (props.price !='' && props.s_day != '' && props.e_day != '' && props.time.length != 0) && props.goToStep(7)}>Step 7</p>
        <p className={`stepMenu ${props.currentStep == 8 && 'currentActive'}`} onClick={()=> (props.rules != '') && props.goToStep(8)}>Step 8</p>
        <p className={`stepMenu ${props.currentStep == 9 && 'currentActive'}`} onClick={()=>  (props.policy != '') && props.goToStep(9)}>Step 9</p>
    </div>
    )
}
