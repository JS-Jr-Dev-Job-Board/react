import React from 'react'
const TeamMember = ({ member }) => {
  return (
    <div className='member'>
      {/* Add image */}
      <h3>{member.name}</h3>
      {/* Add description */}
    </div>
  )
}

export default TeamMember
