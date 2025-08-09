export default function Services() {
  const services = [
    { id: 1, name: 'Web Development', description: 'Custom website solutions' },
    { id: 2, name: 'Digital Marketing', description: 'Boost your online presence' },
    { id: 3, name: 'Consulting', description: 'Expert business advice' }
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      
      <div className="service-list">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}