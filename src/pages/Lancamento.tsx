import React from 'react';
import { Sparkles, Phone, ArrowRight, Star, Calendar, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button-premium';
import { Card } from '@/components/ui/card';
import spaRoom from '@/assets/spa-room.jpg';

const Lancamento = () => {
  const launches = [
    {
      title: 'Protocolo Diamond Glow',
      subtitle: 'O mais novo tratamento facial premium',
      description: 'Revolucionário protocolo anti-idade que combina microdermoabrasão com infusão de séruns personalizados. Resultados visíveis desde a primeira sessão.',
      image: spaRoom,
      price: 'R$ 250',
      originalPrice: 'R$ 300',
      features: [
        'Microdermoabrasão com cristais de diamante',
        'Infusão de séruns personalizados',
        'Máscara de colágeno premium',
        'Massagem facial relaxante',
        'Hidratação intensiva'
      ],
      duration: '90 minutos',
      promotion: 'Promoção de Lançamento - 15% OFF',
      available: true,
      new: true
    },
    {
      title: 'Manicure Crystal Effect',
      subtitle: 'Tecnologia inovadora para unhas brilhantes',
      description: 'Nova técnica que proporciona um brilho cristalino duradouro às unhas, com acabamento profissional que dura até 3 semanas.',
      features: [
        'Base fortalecedora premium',
        'Técnica Crystal Effect exclusiva',
        'Brilho diamantado duradouro',
        'Secagem instantânea',
        'Proteção UV'
      ],
      price: 'R$ 80',
      originalPrice: 'R$ 95',
      duration: '75 minutos',
      promotion: 'Primeiras 50 clientes - Desconto especial',
      available: true,
      new: true
    }
  ];

  const upcomingServices = [
    {
      title: 'Ritual Relaxante Premium',
      description: 'Experiência completa de spa com aromaterapia, massagem e cuidados faciais.',
      launchDate: '2024-02-15',
      earlyAccess: true
    },
    {
      title: 'Extensão de Cílios 5D',
      description: 'Técnica avançada para um olhar mais expressivo e natural.',
      launchDate: '2024-03-01',
      earlyAccess: true
    }
  ];

  const handleWhatsAppClick = (service: string, campaign: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar o novo serviço: ${service}`);
    const whatsappUrl = `https://wa.me/5511999999999?text=${message}&utm_source=website&utm_medium=lancamento&utm_campaign=${campaign}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEarlyAccessClick = (service: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de garantir acesso antecipado ao serviço: ${service}`);
    const whatsappUrl = `https://wa.me/5511999999999?text=${message}&utm_source=website&utm_medium=lancamento&utm_campaign=early_access`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen pt-20 lg:pt-28">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-up">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Novidades Exclusivas</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Lançamentos
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Descubra as mais recentes inovações em beleza e estética. 
              Tratamentos exclusivos com tecnologia de ponta para resultados excepcionais.
            </p>
          </div>
        </div>
      </section>

      {/* New Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {launches.map((launch, index) => (
              <Card 
                key={launch.title}
                className="card-premium overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src={launch.image}
                      alt={launch.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent lg:bg-gradient-to-r" />
                    
                    {launch.new && (
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Novo</span>
                      </div>
                    )}
                    
                    {launch.promotion && (
                      <div className="absolute bottom-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {launch.promotion}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 space-y-6">
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                          {launch.title}
                        </h2>
                        <p className="text-primary font-semibold">
                          {launch.subtitle}
                        </p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {launch.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Inclui:</h3>
                      <ul className="space-y-2">
                        {launch.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & Duration */}
                    <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-primary">{launch.price}</span>
                          {launch.originalPrice && (
                            <span className="text-muted-foreground line-through">
                              {launch.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{launch.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      variant="hero" 
                      size="lg"
                      onClick={() => handleWhatsAppClick(launch.title, launch.title.toLowerCase().replace(/\s+/g, '_'))}
                      className="w-full group"
                      disabled={!launch.available}
                    >
                      <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                      {launch.available ? 'Agendar Agora' : 'Em Breve'}
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Services */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12 animate-fade-up">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Em Breve
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Fique por dentro dos próximos lançamentos e garante seu acesso antecipado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingServices.map((service, index) => (
                <Card 
                  key={service.title}
                  className="card-premium p-6 space-y-4 animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <div className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">
                        Em Breve
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/60">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>Lançamento: {new Date(service.launchDate).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                  
                  {service.earlyAccess && (
                    <Button 
                      variant="secondary" 
                      size="sm"
                      onClick={() => handleEarlyAccessClick(service.title)}
                      className="w-full"
                    >
                      <Gift className="w-4 h-4 mr-2" />
                      Acesso Antecipado
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <div className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Seja a Primeira a Saber
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Receba em primeira mão informações sobre nossos lançamentos, 
                promoções exclusivas e novidades do mundo da beleza.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => handleWhatsAppClick('Lista VIP', 'newsletter')}
                className="group w-full sm:w-auto"
              >
                <Sparkles className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                Entrar na Lista VIP
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Lancamento;