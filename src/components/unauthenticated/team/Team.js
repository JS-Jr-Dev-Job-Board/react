import React from 'react'
import { atom, useRecoilValue } from 'recoil'
import TeamMember from './TeamMember'
import { Container, Teaser } from './TeamStyles'

//  Create a state to hold everyone on the team. For now we'll pass in an object, later we'll fetch it from an api first
const teamMemberState = atom({
  key: 'teamMemberState',
  default: [
    {
      name: 'Batman',
      pic: 'srcimgaszelea-calderonPNG.png',
      description: 'Lorem ipsum',
    },
    {
      name: 'Batman',
      pic: 'srcimgaszelea-calderonPNG.png',
      description: 'Lorem ipsum',
    },
    {
      name: 'Batman',
      pic: 'srcimgaszelea-calderonPNG.png',
      description: 'Lorem ipsum',
    },
  ],
})

const Team = () => {
  const teamMembers = useRecoilValue(teamMemberState)

  return (
    <Container>
      <h1>Career Shock Team</h1>
      <Teaser>
        This is a team of motivated Lambda School students who care about the
        field they are entering and helping other junior devs find a quality
        first job! Read About Our Talented Team Below:
      </Teaser>
      {teamMembers.map((teamMember) => (
        <TeamMember key={teamMember.id} member={teamMember} />
      ))}
    </Container>
  )
}

export default Team
