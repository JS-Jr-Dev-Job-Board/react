import { MemberCard } from './TeamStyles'

const TeamMember = ({ member }) => {
  return (
    <MemberCard>
      <img src={member.image} alt={member.name} />
      <h3>{member.name}</h3>
      <a href={member.github}>GitHub</a>
      <a href={member.linkedin}>LinkedIn</a>
    </MemberCard>
  )
}

export default TeamMember
