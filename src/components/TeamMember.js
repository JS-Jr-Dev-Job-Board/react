import React from 'react';

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