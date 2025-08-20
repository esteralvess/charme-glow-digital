import React from 'react';
import { Phone, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button-premium';
import { Card } from '@/components/ui/card';

const Catalogo = () => {
  const categories = [
    {
      title: 'Manicure',
      services: [
        {
          name: 'Manicure Simples',
          description: 'Cuidado básico com as unhas, cutículas e esmaltação.',
          duration: '45 min',
          price: 'R$ 35',
          popular: false
        },
        {
          name: 'Manicure Premium',
          description: 'Tratamento completo com hidratação especial e esmaltação de alta qualidade.',
          duration: '60 min',
          price: 'R$ 50',
          popular: true
        },
        {
          name: 'Nail Art',
          description: 'Arte personalizada nas unhas com designs exclusivos.',
          duration: '90 min',
          price: 'R$ 80',
          popular: false
        }
      ]
    },
    {
      title: 'Estética Facial',
      services: [
        {
          name: 'Limpeza de Pele',
          description: 'Limpeza profunda para renovar e purificar a pele.',
          duration: '60 min',
          price: 'R$ 80',
          popular: true
        },
        {
          name: 'Hidratação Facial',
          description: 'Tratamento intensivo de hidratação com produtos premium.',
          duration: '45 min',
          price: 'R$ 90',
          popular: false
        },
        {
          name: 'Peeling Facial',
          description: 'Renovação celular para uma pele mais jovem e luminosa.',
          duration: '75 min',
          price: 'R$ 120',
          popular: false
        }
      ]
    },
    {
      title: 'Cuidados Especiais',
      services: [
        {
          name: 'Dia da Noiva',
          description: 'Pacote completo para o seu dia especial.',
          duration: '3 horas',
          price: 'A partir de R$ 300',
          popular: true
        },
        {
          name: 'Tratamento Anti-idade',
          description: 'Protocolo especializado para prevenir e tratar sinais de envelhecimento.',
          duration: '90 min',
          price: 'R$ 180',
          popular: false
        },
        {
          name: 'Spa Day',
          description: 'Experiência completa de relaxamento e cuidados.',
          duration: '4 horas',
          price: 'R$ 400',
          popular: false
        }
      ]
    }
  ];

  const handleWhatsAppClick = (serviceName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar o serviço: ${serviceName}`);
    const whatsappUrl = `https://wa.me/5511999999999?text=${message}&utm_source=website&utm_medium=catalogo&utm_campaign=${serviceName.toLowerCase().replace(/\s+/g, '_')}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen pt-20 lg:pt-28">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-up">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Catálogo de Serviços
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Descubra todos os nossos tratamentos de beleza e estética, 
              pensados especialmente para realçar sua elegância natural.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-8">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-center animate-fade-up">
                  {category.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Card 
                      key={service.name}
                      className="card-premium p-6 space-y-4 relative group hover:scale-105 transition-all duration-300 animate-fade-up"
                      style={{ animationDelay: `${(categoryIndex * 3 + serviceIndex) * 100}ms` }}
                    >
                      {service.popular && (
                        <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-current" />
                          <span>Popular</span>
                        </div>
                      )}
                      
                      <div className="space-y-3">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {service.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="font-semibold text-primary text-lg">
                          {service.price}
                        </div>
                      </div>
                      
                      <Button 
                        variant="primary" 
                        size="sm"
                        onClick={() => handleWhatsAppClick(service.name)}
                        className="w-full group-hover:shadow-premium transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Agendar Agora
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Não encontrou o que procurava?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Entre em contato conosco! Oferecemos consultas personalizadas para 
              criar o tratamento perfeito para suas necessidades específicas.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => handleWhatsAppClick('Consulta personalizada')}
              className="group"
            >
              <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalogo;