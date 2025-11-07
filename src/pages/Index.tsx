import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Menu, X, Instagram, Linkedin } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import florImage from '@/assets/florencia-profile.jpeg';
import autopico from '@/assets/autopico.jpg';
import centibox from '@/assets/centibox.jpg';
import watchman from '@/assets/watchman.jpg';
import magiplast from '@/assets/magiplast.jpg';
import centinela from '@/assets/centinela.jpg';
import sisep from '@/assets/sisep.png';

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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<any>();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Update current slide when carousel changes
  useEffect(() => {
    if (!carouselApi) return;

    const updateSlide = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on('select', updateSlide);
    updateSlide();

    return () => {
      carouselApi.off('select', updateSlide);
    };
  }, [carouselApi]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-navbar backdrop-blur-md z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[hsl(var(--petroleo))] font-caveat">Milano & Co.</h2>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-navbar-foreground hover:text-primary transition-colors">
                Acerca de mí
              </button>
              <button onClick={() => scrollToSection('services')} className="text-navbar-foreground hover:text-primary transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-navbar-foreground hover:text-primary transition-colors">
                Contacto
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-navbar-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-navbar-foreground hover:text-primary transition-colors text-left py-2"
                >
                  Acerca de mí
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-navbar-foreground hover:text-primary transition-colors text-left py-2"
                >
                  Servicios
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-navbar-foreground hover:text-primary transition-colors text-left py-2"
                >
                  Contacto
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[hsl(var(--petroleo))] font-caveat">
            Milano & Co.
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-roboto">
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
              <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--petroleo))] font-caveat">Acerca de mí</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center text-[hsl(var(--petroleo))] font-caveat">Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                details={service.details}
                isExpanded={expandedCard === index}
                onToggle={() => setExpandedCard(expandedCard === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-[hsl(var(--petroleo))] font-caveat">Clientes</h2>
          
          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 items-center justify-items-center mx-auto">
            <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center p-12 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-200">
              <img src={autopico} alt="Autopico" className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center p-12 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-200">
              <img src={centibox} alt="Centibox" className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center p-12 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-200">
              <img src={watchman} alt="Watchman Region Centro" className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center p-12 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-200">
              <img src={magiplast} alt="Magiplast" className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center p-12 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-200">
              <img src={centinela} alt="El Centinela" className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center p-12 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-200">
              <img src={sisep} alt="SISEP Argentina" className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>

          {/* Mobile View - Carousel */}
          <div className="md:hidden max-w-sm mx-auto space-y-6">
            <Carousel 
              className="w-full"
              opts={{ loop: true }}
              setApi={setCarouselApi}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center p-8 shadow-lg border border-gray-200">
                    <img src={centibox} alt="Centibox" className="w-full h-full object-contain" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center p-8 shadow-lg border border-gray-200">
                    <img src={watchman} alt="Watchman Region Centro" className="w-full h-full object-contain" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center p-8 shadow-lg border border-gray-200">
                    <img src={magiplast} alt="Magiplast" className="w-full h-full object-contain" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center p-8 shadow-lg border border-gray-200">
                    <img src={centinela} alt="El Centinela" className="w-full h-full object-contain" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center p-8 shadow-lg border border-gray-200">
                    <img src={sisep} alt="SISEP Argentina" className="w-full h-full object-contain" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center p-8 shadow-lg border border-gray-200">
                    <img src={autopico} alt="Autopico" className="w-full h-full object-contain" />
                  </div>
                </CarouselItem>
              </CarouselContent>
              {/* <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" /> */}
            </Carousel>
            
            {/* Dot indicators */}
            <div className="flex justify-center gap-2">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-primary w-6' 
                      : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--petroleo))] font-caveat">Contacto</h2>
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
            <a 
              href="https://www.instagram.com/milano__co/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-lg text-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span>@milano__co</span>
            </a>
            <a 
              href="https://linkedin.com/company/milano-company/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-lg text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span>Milano Company</span>
            </a>
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
