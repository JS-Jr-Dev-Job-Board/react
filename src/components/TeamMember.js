import React from 'react';
import {
    // I'm not sure we need these import actually, at least on this page
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

function TeamMember({member}) {

    return (
        <div className = "member">
            {/* Add image */}
            <h3>{member.name}</h3>
            {/* Add description */}
        </div>
    )
};

export default TeamMember;