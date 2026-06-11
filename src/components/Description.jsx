export default function Description() {
  return (
    <div style={{
      maxWidth: 960,
      margin: '60px auto 20px',
      padding: '0 64px',
      display: 'grid',
      gridTemplateColumns: '1fr 200px',
      gap: 48,
      alignItems: 'center',
    }}>
      <p style={{
        fontSize: 14,
        lineHeight: 1.9,
        color: 'var(--muted)',
        fontFamily: 'Comfortaa, sans-serif',
        fontWeight: 400,
      }}>
        Το UniOS είναι μια προσαρμοσμένη διανομή Linux βασισμένη στο Kubuntu, σχεδιασμένη για τις ανάγκες κάθε Πανεπιστημίου. Αναπτύχθηκε από φοιτητές της κοινότητας Open Source UoM, προσφέρει ένα ενιαίο, ασφαλές και έτοιμο-προς-χρήση περιβάλλον KDE Plasma, ιδανικό τόσο για πανεπιστημιακά εργαστήρια, όσο και για τον προσωπικό υπολογιστή κάθε χρήστη.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="/assets/uniosicon.png"
          alt="UniOS icon"
          style={{
            width: 150,
            filter: 'drop-shadow(0 0 24px rgba(196,125,181,0.4))',
            opacity: 0.85,
          }}
        />
      </div>
    </div>
  )
}
