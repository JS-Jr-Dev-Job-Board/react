import { Container, Teaser, TeamContainer } from './TeamStyles'
import profileData from './team_profile_data'
import TeamMember from './TeamMember'

function Team() {
  return (
    <Container>
      <h1>Career Shock Team</h1>
      <Teaser>
        This is a team of motivated Lambda School students who care about the
        field they are entering and helping other junior devs find a quality
        first job! Read About Our Talented Team Below:
      </Teaser>
      <TeamContainer>
        {profileData.map((member) => {
          console.log(member)
          return <TeamMember key={member.name} member={member} />
        })}
      </TeamContainer>
    </Container>
  )
}

export default Team
