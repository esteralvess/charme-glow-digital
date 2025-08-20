import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Clock, Shield, Heart, Sparkles, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button-premium';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-manicure.jpg';
import spaRoom from '@/assets/spa-room.jpg';
import nailTools from '@/assets/nail-tools.jpg';
import facialTreatment from '@/assets/facial-treatment.jpg';

const Home = () => {
  const services = [
    {
      title: 'Manicure Premium',
      description: 'Cuidado completo para suas unhas com produtos de alta qualidade e técnicas profissionais.',
      price: 'A partir de R$ 35',
      image: nailTools,
      highlights: ['Esmaltação perfeita', 'Cutículas impecáveis', 'Hidratação especial']
    },
    {
      title: 'Estética Facial',
      description: 'Tratamentos personalizados para realçar a beleza natural da sua pele.',
      price: 'A partir de R$ 80',
      image: facialTreatment,
      highlights: ['Limpeza profunda', 'Hidratação intensiva', 'Produtos premium']
    },
    {
      title: 'Cuidados Especiais',
      description: 'Serviços exclusivos para momentos únicos e ocasiões especiais.',
      price: 'Sob consulta',
      image: spaRoom,
      highlights: ['Atendimento personalizado', 'Ambiente relaxante', 'Experiência premium']
    }
  ];

  const testimonials = [
    {
      name: 'Ana Carolina',
      text: 'Simplesmente perfeito! O atendimento é impecável e o resultado sempre supera minhas expectativas.',
      rating: 5,
      service: 'Manicure Premium'
    },
    {
      name: 'Mariana Silva',
      text: 'Profissionalismo e qualidade incomparáveis. Já sou cliente há mais de um ano e sempre saio satisfeita.',
      rating: 5,
      service: 'Estética Facial'
    },
    {
      name: 'Fernanda Costa',
      text: 'O ambiente é acolhedor e relaxante. Cada detalhe é pensado para proporcionar uma experiência única.',
      rating: 5,
      service: 'Cuidados Especiais'
    }
  ];

  const handleWhatsAppClick = (utmCampaign: string) => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário no Cheias de Charme Studio.');
    const whatsappUrl = `https://wa.me/5511999999999?text=${message}&utm_source=website&utm_medium=cta&utm_campaign=${utmCampaign}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCalendarClick = () => {
    // Placeholder para integração com Google Calendar
    window.open('https://calendar.google.com', '_blank');
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Manicure premium no Cheias de Charme Studio"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Desperte Sua
                <span className="text-gradient block">Elegância Natural</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                No Cheias de Charme Studio, cada detalhe é pensado para realçar sua beleza única. 
                Manicure e estética premium em Suzano-SP.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => handleWhatsAppClick('hero_primary')}
                className="group w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                Agendar Agora
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="secondary" 
                size="xl"
                onClick={handleCalendarClick}
                className="w-full sm:w-auto"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Ver Disponibilidade
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Higiene Impecável</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-primary" />
                <span>5.0 Estrelas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Horário Flexível</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-up">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experiências personalizadas que celebram sua beleza única com o mais alto padrão de qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="card-premium group hover:scale-105 transition-all duration-500 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <ul className="space-y-1">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center space-x-2 text-sm">
                          <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-semibold text-primary text-lg">
                        {service.price}
                      </span>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => handleWhatsAppClick(`service_${service.title.toLowerCase().replace(/\s+/g, '_')}`)}
                      >
                        Agendar
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/catalogo">
              <Button variant="primary" size="lg" className="group">
                Ver Todos os Serviços
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-up">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              O Que Nossas Clientes Dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A satisfação das nossas clientes é nossa maior inspiração e motivação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="card-premium p-6 space-y-4 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.service}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/avaliacoes">
              <Button variant="secondary" size="lg" className="group">
                Ver Mais Avaliações
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Launch Cocktail Section */}
      <section className="py-20 lg:py-32 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Você é nossa convidada especial.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Participe do nosso coquetel de lançamento e celebre conosco.
              </p>
            </div>
            
            <div className="pt-4">
              <Link to="/lancamento">
                <Button variant="secondary" size="xl" className="group">
                  <Sparkles className="w-5 h-5 mr-3" />
                  Confirmar Presença
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Pronta Para Se Sentir
                <span className="text-gradient block">Ainda Mais Especial?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Agende seu horário agora e descubra como podemos realçar sua beleza natural 
                com nosso atendimento personalizado e ambiente acolhedor.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => handleWhatsAppClick('cta_bottom')}
                className="group w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                Agendar pelo WhatsApp
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/contato">
                <Button variant="secondary" size="xl" className="w-full sm:w-auto">
                  <Heart className="w-5 h-5 mr-3" />
                  Outras Formas de Contato
                </Button>
              </Link>
            </div>

            <div className="pt-8 border-t border-border/60">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <Shield className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold text-foreground">Segurança Total</h3>
                  <p className="text-sm text-muted-foreground">Protocolos rigorosos de higiene e esterilização</p>
                </div>
                <div className="space-y-2">
                  <Star className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold text-foreground">Qualidade Premium</h3>
                  <p className="text-sm text-muted-foreground">Produtos e técnicas de alta qualidade</p>
                </div>
                <div className="space-y-2">
                  <Heart className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold text-foreground">Cuidado Personalizado</h3>
                  <p className="text-sm text-muted-foreground">Atendimento único para cada cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;