const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Servicios</h2>
        <div className="services-grid">
          <div className="services-card">
            <h3>AI Clinical Decision Support</h3>
            <p>Implementamos modelos de IA para asistir en decisiones clínicas críticas, mejorando la precisión y velocidad de diagnósticos.</p>
          </div>
          <div className="services-card">
            <h3>Medical Data Analysis</h3>
            <p>Análisis avanzado de grandes volúmenes de datos médicos para identificar patrones y tendencias ocultas.</p>
          </div>
          <div className="services-card">
            <h3>Predictive Healthcare Modeling</h3>
            <p>Modelos predictivos para anticipar riesgos hospitalarios y optimizar recursos en tiempo real.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;