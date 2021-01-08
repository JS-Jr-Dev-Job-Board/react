import React from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

//  Create a state to hold everyone on the team. For now we'll pass in an object, later we'll fetch it from an api first
const teamMemberState = atom({
    key: 'teamMemberState',
    default: [
        {
            name: "Simone Ballard",
            pic: "src\img\simone-ballardPNG.png",
            description: "Lorem ipsum"
        },
        {
            name: "Aszalea Calderon",
            pic: "src\img\aszelea-calderonPNG.png",
            description: "Lorem ipsum"
        },
        {
            name: "Mike Hill",
            pic: "src\img\mike-hillPNG.png",
            description: "Lorem ipsum"
        }
    ],
});

function AboutUs() {
    const teamMembers = useRecoilValue(teamMemberState);

    return (
        <div className = "About-Us">
            {/* We might need to move the RecoilRoot bit into the index folder, as it's suppsed to be in the root component. That's easy to change, but I didn't want to possibly conflict with any of the other branches out right now */}
            <RecoilRoot>    
                <h1>About Us</h1>
                <h4>A blurb</h4>
                {teamMembers.map((teamMember) => (
                    <TeamMember key = {teamMember.id} member = {teamMember} />
                ))}
            </RecoilRoot>
        </div>
    )
}

export default AboutUs;