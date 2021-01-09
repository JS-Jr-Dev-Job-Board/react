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
                <h1>About Us</h1>
                <h4>This is a team of motivated Lambda School students who care about the field they are entering and helping other junior devs find a quality first job! Read About Our Talented Team Below:</h4>
                {teamMembers.map((teamMember) => (
                    <TeamMember key = {teamMember.id} member = {teamMember} />
                ))}
        </div>
    )
}

export default AboutUs;