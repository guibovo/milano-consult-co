import { Mail, Phone, MapPin } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import florImage from '@/assets/florencia-milano.jpeg';

const Index = () => {
  const services = [
    {
      title: "Gestión de Procesos Integrales",
      description: "Optimización y mejora continua de procesos organizacionales",
      details: [
        "Análisis y mapeo de procesos actuales",
        "Identificación de oportunidades de mejora",
        "Implementación de metodologías ágiles",
        "Monitoreo y seguimiento de resultados"
      ]
    },
    {
      title: "Optimización de Procesos y Reducción de Costos",
      description: "Estrategias eficientes para maximizar recursos",
      details: [
        "Auditoría de costos operativos",
        "Eliminación de desperdicios y redundancias",
        "Automatización de procesos",
        "ROI y métricas de eficiencia"
      ]
    },
    {
      title: "Definición de Perfiles de Puesto",
      description: "Estructuras claras para equipos de alto rendimiento",
      details: [
        "Análisis de competencias requeridas",
        "Descripción detallada de responsabilidades",
        "Definición de indicadores de desempeño",
        "Alineación con objetivos estratégicos"
      ]
    },
    {
      title: "Implementación de Normas y Auditorías",
      description: "Certificación y cumplimiento de estándares de calidad",
      details: [
        "Auditorías ISO 9001",
        "Implementación de sistemas de gestión",
        "Preparación para certificaciones",
        "Seguimiento y mejora continua"
      ]
    },
    {
      title: "Diseño de Organigramas",
      description: "Estructuras organizacionales eficientes y funcionales",
      details: [
        "Análisis de estructura actual",
        "Diseño de jerarquías claras",
        "Definición de líneas de reporte",
        "Adaptación a crecimiento organizacional"
      ]
    },
    {
      title: "Gestión de Empresas Familiares y PYMES",
      description: "Acompañamiento personalizado para empresas en crecimiento",
      details: [
        "Profesionalización de la gestión",
        "Planificación de sucesión",
        "Resolución de conflictos familiares",
        "Estrategias de crecimiento sostenible"
      ]
    },
    {
      title: "Counseling Organizacional y Laboral",
      description: "Facilitación de procesos de transformación humana",
      details: [
        "Coaching individual y grupal",
        "Resolución de conflictos laborales",
        "Desarrollo de liderazgo",
        "Mejora del clima organizacional"
      ]
    },
    {
      title: "Counseling Migratorio",
      description: "Acompañamiento en procesos de adaptación y cambio",
      details: [
        "Orientación en procesos migratorios",
        "Apoyo emocional en la adaptación",
        "Estrategias de integración laboral",
        "Acompañamiento en cambios culturales"
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Milano & Co.</h2>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                Acerca de mí
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
                Contacto
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Milano & Co.
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Potenciando personas, transformando empresas.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img 
                src={florImage} 
                alt="Florencia Milano" 
                className="rounded-full w-80 h-80 object-cover shadow-xl border-4 border-background"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Acerca de mí</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>
                  Soy Flor Milano, Licenciada en Relaciones Laborales, Auditora ISO 9001 y Counselor Organizacional, Laboral y Migratorio.
                </p>
                <p>
                  Mi enfoque se basa en cuatro pilares fundamentales: <span className="font-semibold text-primary">escucha activa, empatía, conexión y autenticidad</span>. Creo que cada organización es única y requiere soluciones a medida que respeten su cultura y valores.
                </p>
                <p>
                  Con más de 10 años de experiencia acompañando a empresas y profesionales, mi objetivo es facilitar procesos de transformación organizacional que generen entornos laborales más saludables, eficientes, sostenibles y humanos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                details={service.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Clientes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="w-32 h-32 bg-background rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-muted-foreground text-sm">Cliente {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Contacto</h2>
          <p className="text-2xl mb-12 text-foreground">
            ¿Querés transformar tu empresa? Estoy lista para acompañarte.
          </p>
          <div className="space-y-6 max-w-md mx-auto">
            <a 
              href="mailto:mariafmilano@gmail.com" 
              className="flex items-center justify-center gap-3 text-lg text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>mariafmilano@gmail.com</span>
            </a>
            <a 
              href="tel:+5493415788259" 
              className="flex items-center justify-center gap-3 text-lg text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>+54 9 341 578 8259</span>
            </a>
            <div className="flex items-center justify-center gap-3 text-lg text-foreground">
              <MapPin className="w-6 h-6" />
              <span>Rosario, Santa Fe, Argentina</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-secondary border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Milano & Co. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
