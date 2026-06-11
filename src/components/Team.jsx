const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const DiscordIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
  </svg>
)

const SocialDot = ({ children }) => (
  <div style={{
    width: 28,
    height: 28,
    borderRadius: '50%',
    background: 'rgba(196,125,181,0.15)',
    border: '1px solid rgba(196,125,181,0.35)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--pink-light)',
    cursor: 'pointer',
    flexShrink: 0,
  }}>
    {children}
  </div>
)

const Avatar = ({ letter }) => (
  <div style={{
    width: 62,
    height: 62,
    borderRadius: '50%',
    border: '2px solid rgba(196,125,181,0.4)',
    background: 'rgba(196,125,181,0.06)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontFamily: 'Comfortaa, sans-serif',
    fontSize: 22,
    fontWeight: 700,
    color: 'var(--pink)',
  }}>
    {letter}
  </div>
)

const members = [
  { name: 'Apostolos Chalis',       role: 'Main Developer',       align: 'right', socials: ['gh','dc'] },
  { name: 'Emanuela Ravha',         role: 'Developer & Designer',  align: 'left',  socials: ['gh','dc'] },
  { name: 'Malamatenia Soulioti',   role: 'Main Designer',         align: 'right', socials: ['dc'] },
  { name: 'Ioannis Mihadalis',      role: 'Developer',             align: 'left',  socials: ['gh','dc'] },
  { name: 'Alexandra Iordanidou',   role: 'Community Operator',    align: 'right', socials: ['gh','dc'] },
  { name: 'Konstantina Deligionni', role: 'Developer',             align: 'left',  socials: ['gh','dc'] },
]

// Each member row is a pill that spans ~75% of width, aligned left or right.
// Avatar sits at the inner edge (right end of left-pill, left end of right-pill).
// Text (name, role, socials) is adjacent to the avatar, on the inside.
function MemberRow({ name, role, align, socials }) {
  const isRight = align === 'right'

  return (
    <div style={{
      display: 'flex',
      justifyContent: isRight ? 'flex-end' : 'flex-start',
      marginBottom: 12,
    }}>
      <div style={{
        width: '72%',
        border: '1.5px solid rgba(196,125,181,0.4)',
        borderRadius: 50,
        padding: '14px 22px',
        display: 'flex',
        flexDirection: isRight ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: 18,
        background: 'rgba(196,125,181,0.03)',
      }}>
        {/* Avatar always at the outer edge */}
        <Avatar letter={name[0]} />

        {/* Text block */}
        <div style={{ textAlign: isRight ? 'right' : 'left', flex: 1 }}>
          <div style={{
            fontFamily: 'Comfortaa, sans-serif',
            fontSize: 14,
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: 2,
          }}>{name}</div>
          <div style={{
            fontFamily: 'Comfortaa, sans-serif',
            fontSize: 11.5,
            color: 'var(--muted)',
            marginBottom: 10,
          }}>{role}</div>
          <div style={{
            display: 'flex',
            gap: 7,
            justifyContent: isRight ? 'flex-end' : 'flex-start',
          }}>
            {socials.includes('gh') && <SocialDot><GithubIcon /></SocialDot>}
            {socials.includes('dc') && <SocialDot><DiscordIcon /></SocialDot>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <div style={{
      maxWidth: 900,
      margin: '0 auto',
      padding: '60px 48px 120px',
    }}>
      <h2 style={{
        fontFamily: 'Comfortaa, sans-serif',
        fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
        fontWeight: 700,
        color: 'var(--text)',
        marginBottom: 52,
        lineHeight: 1.15,
      }}>
        Η ΟΜΑΔΑ<br />ΜΑΣ
      </h2>

      {members.map((m, i) => <MemberRow key={i} {...m} />)}
    </div>
  )
}
