export default function Hero() {
  return (
    <div style={{ padding: '90px 64px 20px', maxWidth: 960, margin: '0 auto' }}>
      <h1 style={{
        fontFamily: 'Comfortaa, sans-serif',
        fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
        fontWeight: 700,
        lineHeight: 1.12,
        color: 'var(--text)',
        marginBottom: 40,
        letterSpacing: '-0.01em',
      }}>
        UniOS: ΤΟ ΛΕΙΤΟΥΡΓΙΚΟ<br />
        ΣΥΣΤΗΜΑ ΤΟΥ<br />
        ΚΑΘΕ ΠΑΝΕΠΙΣΤΗΜΙΟΥ
      </h1>

      {/* Download pill button centered like in preview */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
        <a href="#" style={{
          display: 'inline-block',
          border: '2px solid var(--pink)',
          borderRadius: 50,
          padding: '11px 56px',
          color: 'var(--pink-light)',
          fontFamily: 'Comfortaa, sans-serif',
          fontWeight: 600,
          fontSize: 15,
          textDecoration: 'none',
          letterSpacing: '0.05em',
          background: 'transparent',
          transition: 'background .2s, color .2s',
        }}
        onMouseEnter={e => { e.target.style.background = 'rgba(196,125,181,0.15)'; e.target.style.color = '#fff' }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--pink-light)' }}
        >
          Download
        </a>
      </div>
    </div>
  )
}
