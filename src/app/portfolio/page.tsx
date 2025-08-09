export default function Portfolio() {
  const projects = [
    { id: 1, name: 'E-commerce Site', client: 'Retail Company' },
    { id: 2, name: 'Corporate Website', client: 'Tech Startup' },
    { id: 3, name: 'Marketing Campaign', client: 'Fashion Brand' }
  ];

  return (
    <div className="portfolio-page">
      <h1>Our Portfolio</h1>
      
      <div className="project-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>Client: {project.client}</p>
          </div>
        ))}
      </div>
    </div>
  );
}