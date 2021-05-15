import React from 'react'
import {
  // RecoilRoot,
  atom,
  // selector,
  // useRecoilState,
  useRecoilValue,
} from 'recoil'
import styled from 'styled-components'
import TeamMember from './TeamMember'

//  Create a state to hold everyone on the team. For now we'll pass in an object, later we'll fetch it from an api first
const teamMemberState = atom({
  key: 'teamMemberState',
  default: [
    {
      name: 'Aszalea Calderon',
      pic: 'srcimgaszelea-calderonPNG.png',
      description: 'Lorem ipsum',
    },
  ],
})

function AboutUs() {
  const teamMembers = useRecoilValue(teamMemberState)

  const Container = styled.div`
    display: flex;
    background: #eee;
  `

  const Teaser = styled.h4`
    color: ${(pr) => pr.theme.white};
  `

  return (
    <Container>
      <h1>About Us</h1>
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

export default AboutUs
