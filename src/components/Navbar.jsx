export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 48px',
      background: 'rgba(14,7,20,0.80)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(196,125,181,0.12)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <img src="/assets/unios-logo.png" alt="UniOS" style={{ height: 26 }} />
      <ul style={{ display: 'flex', gap: 32, listStyle: 'none' }}>
        {['GitHub','Εγχειρίδιο','Συνεισφορά με Κώδ.','Wiki','Επικοινωνία'].map(l => (
          <li key={l}>
            <a href="#" style={{
              color: 'var(--muted)',
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 500,
              fontFamily: 'Comfortaa, sans-serif',
              transition: 'color .2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--pink-light)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
