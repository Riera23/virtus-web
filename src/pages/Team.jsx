import '../styles/team.css';

const Team = () => {
  return (
    <section id="team" className="section">
      <div className="container">
        <header className="team-header">
          <h1>Nuestro Equipo</h1>
          <p>Liderazgo técnico y científico detrás de Virtus Tech</p>
        </header>
        <div className="team-grid">
          <article className="team-card">
            <img src="/team/founder1.jpg" alt="Agustin Marzioni" className="team-photo" />
            <h2 className="team-name">Agustín Marzioni</h2>
            <p className="team-role">Co-Founder</p>
            <p className="team-specialization"> aaaaaaaaaaaaaa </p>
            <p className="team-bio">



              {/* Replace with real bio */}
            </p>
          </article>
          <article className="team-card">
            <img src="/team/founder2.jpg" alt="Bautista Pelossi" className="team-photo" />
            <h2 className="team-name">Bautista Pelossi</h2>
            <p className="team-role">Co-Founder</p>
            <p className="team-specialization"> aaaaaaaaaaaaaaa </p>
            <p className="team-bio">
                
              {/* Replace with real bio */}
            </p>
          </article>
          <article className="team-card">
            <img src="/team/founder3.jpg" alt="Bartolomé Riera" className="team-photo" />
            <h2 className="team-name">Bartolomé Riera</h2>
            <p className="team-role">Co-Founder</p>
            <p className="team-specialization"> aaaaaaaaaaaaaaaaa </p>
            <p className="team-bio">

              {/* Replace with real bio */}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Team;