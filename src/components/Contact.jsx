const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Since no backend, just log or alert
    alert('Mensaje enviado (simulado)');
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contacto</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Mensaje" rows="5" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;