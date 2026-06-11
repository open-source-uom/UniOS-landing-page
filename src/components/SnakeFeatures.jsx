const features = [
  {
    label: 'Έτοιμο περιβάλλον εργασίας',
    icon: '/assets/icon1.png',
    iconSide: 'right',
    text: 'Ανάψτε τον υπολογιστή και είστε ήδη έτοιμοι να δουλέψετε. Ενεργό θέμα, καλή ρύθμιση και όλα τα βασικά εργαλεία στη θέση τους, χωρίς να χρειαστεί να ρυθμίσετε τίποτα μόνοι σας.',
  },
  {
    label: 'Αυτόματα προγράμματα',
    icon: '/assets/icon2.png',
    iconSide: 'left',
    text: 'Μέσω του UniBackpack, επιλέγεις πανεπιστήμιο και τμήμα και εγκαθίστανται αυτόματα όλα τα προγράμματα που θα χρειαστείς: compilers, editors, εργαλεία ανάπτυξης, γλώσσες, graphing, χωρίς χάσιμο χρόνου.',
  },
  {
    label: 'Σύνδεση και ασφάλεια',
    icon: '/assets/icon3.png',
    iconSide: 'right',
    text: 'Κάθε υπολογιστής στο πανεπιστήμιο λειτουργεί άρτια με το ίδιο σύστημα. Χωρίς ασυμβατότητες μεταξύ υπολογιστών, χωρίς "εδώ δεν λειτουργεί το laptop μου".',
  },
  {
    label: 'Από φοιτητές, για φοιτητές',
    icon: '/assets/icon4.png',
    iconSide: 'left',
    text: 'Το UniOS αναπτύσσεται ανοιχτά από την κοινότητα Open Source UoM. Αν θέλεις να εισφέρεις ή έχεις ιδέες, η κοινότητα είναι ανοιχτή, ανεξάρτητη, εθελοντική και πάντα ζητά νέα μέλη!',
  },
]

// The snake connector after each feature (except last):
// odd index (0,2) → curve goes right then down to next (right-opening curve)
// even index (1,3) → curve goes left then down to next (left-opening curve)
// Per preview: after feature 0 (icon right) → connector curves RIGHT side
//              after feature 1 (icon left)  → connector curves LEFT side

function CurveRight() {
  // Tall rounded rectangle open on the right, connecting bottom-center to top-center of next pill
  return (
    <div style={{
      width: '60%',
      marginLeft: 'auto',
      height: 60,
      borderRight: '2px solid rgba(196,125,181,0.45)',
      borderTop: '2px solid rgba(196,125,181,0.45)',
      borderBottom: '2px solid rgba(196,125,181,0.45)',
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
    }} />
  )
}

function CurveLeft() {
  return (
    <div style={{
      width: '60%',
      marginRight: 'auto',
      height: 60,
      borderLeft: '2px solid rgba(196,125,181,0.45)',
      borderTop: '2px solid rgba(196,125,181,0.45)',
      borderBottom: '2px solid rgba(196,125,181,0.45)',
      borderTopLeftRadius: 40,
      borderBottomLeftRadius: 40,
    }} />
  )
}

function Feature({ label, icon, iconSide, text }) {
  return (
    <div style={{ position: 'relative' }}>
      {/* Pill row: icon on one side, pill centered */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '60px 1fr 60px',
        alignItems: 'center',
        gap: 12,
      }}>
        {/* Left slot */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {iconSide === 'left' && (
            <img src={icon} alt="" style={{ width: 44, height: 'auto', filter: 'drop-shadow(0 0 8px rgba(196,125,181,0.5))' }} />
          )}
        </div>

        {/* Centered pill */}
        <div style={{
          border: '2px solid rgba(196,125,181,0.5)',
          borderRadius: 50,
          padding: '10px 32px',
          textAlign: 'center',
          fontFamily: 'Comfortaa, sans-serif',
          fontSize: 13,
          fontWeight: 700,
          color: 'var(--pink-light)',
          letterSpacing: '0.04em',
          whiteSpace: 'nowrap',
        }}>
          {label}
        </div>

        {/* Right slot */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {iconSide === 'right' && (
            <img src={icon} alt="" style={{ width: 44, height: 'auto', filter: 'drop-shadow(0 0 8px rgba(196,125,181,0.5))' }} />
          )}
        </div>
      </div>

      {/* Body text */}
      <p style={{
        textAlign: 'center',
        fontSize: 13,
        color: 'var(--muted)',
        lineHeight: 1.85,
        padding: '18px 32px 24px',
        fontFamily: 'Comfortaa, sans-serif',
        maxWidth: 480,
        margin: '0 auto',
      }}>
        {text}
      </p>
    </div>
  )
}

export default function SnakeFeatures() {
  return (
    <div style={{ maxWidth: 680, margin: '40px auto 80px', padding: '0 40px' }}>
      {features.map((f, i) => (
        <div key={i}>
          <Feature {...f} />
          {i < features.length - 1 && (
            i % 2 === 0 ? <CurveRight /> : <CurveLeft />
          )}
        </div>
      ))}
    </div>
  )
}
