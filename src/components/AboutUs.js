import React from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

//  Create a state to hold everyone on the team. For now we'll pass in an object, later we'll fetch it from an api first
const teamState = atom({
    key: 'teamState',
    default: [
        {
            
        }
    ]
})

function AboutUs() {

    return (
        <div className = "About-Us">
            {/* We might need to move the RecoilRoot bit into the index folder, as it's suppsed to be in the root component. That's easy to change, but I didn't want to possibly conflict with any of the other branches out right now */}
            <RecoilRoot>    

            </RecoilRoot>
        </div>
    )
}

export default AboutUs;