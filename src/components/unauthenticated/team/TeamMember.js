import { MemberCard } from './TeamStyles'
import { GlobalExternalLink } from '../../global/styles/LinksGlobalStyles'

const TeamMember = ({ member }) => {
  return (
    <MemberCard>
      <a href={member.linkedin}>
        <img src={member.image} alt={member.name} />
      </a>
      <h3>{member.name}</h3>
      <GlobalExternalLink href={member.github}>GitHub</GlobalExternalLink>
      <GlobalExternalLink href={member.linkedin}>LinkedIn</GlobalExternalLink>
    </MemberCard>
  )
}

export default TeamMember
