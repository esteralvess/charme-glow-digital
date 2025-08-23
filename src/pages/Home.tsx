import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Clock, Shield, Heart, Sparkles, Phone, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button-premium';
import { Card } from '@/components/ui/card';
import Sobrancelha from '@/assets/sobrancelha.png';
import PeMaoGel from '@/assets/pe-mao-gel.png';
import MaoGel from '@/assets/gel.png';
import MaoFundo from '@/assets/mao-fundo-2.png'; // Sua nova imagem com fundo

const Home = () => {
  const services = [
    {
      title: 'Pacote Clássico',
      description: 'O cuidado completo para o dia a dia. Mãos e pés com esmaltação tradicional para um look impecável.',
      price: '49,90',
      image: PeMaoGel,
      highlights: ['Mão e Pé Tradicional', 'Esfoliação', 'Hidratação Suave']
    },
    {
      title: 'Pacote Realce',
      description: 'A combinação perfeita para realçar sua beleza, unindo o cuidado das mãos e pés com um design de sobrancelha.',
      price: '79,98',
      image: Sobrancelha,
      highlights: ['Mão e Pé Tradicional', 'Design de Sobrancelha', 'Harmonização do Olhar']
    },
    {
      title: 'Pacote Durabilidade',
      description: 'Praticidade e brilho duradouro. Mãos com a resistência do esmalte em gel e pés com o cuidado tradicional.',
      price: '89,98',
      image: MaoGel,
      highlights: ['Mão com Esmalte em Gel', 'Pé Tradicional', 'Brilho por mais tempo']
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
    let message = 'Olá! Gostaria de agendar um horário no Cheias de Charme Studio.';
    if (utmCampaign === 'agendar_encaixe') {
      message = 'Olá! Gostaria de verificar a disponibilidade para um Atendimento Express.';
    }
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}&utm_source=website&utm_medium=cta&utm_campaign=${utmCampaign}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCalendarClick = () => {
    window.open('https://calendar.google.com', '_blank');
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Coluna da Esquerda: Textos e Botões */}
            <div className="text-center lg:text-left animate-fade-up pt-16 lg:pt-0">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Unhas que encantam, charme que marca.
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mt-8">
                No Studio Cheias de Charme, cada detalhe é cuidadosamente pensado para valorizar sua beleza única. Manicure e estética premium em Suzano-SP.
              </p>

              {/* Imagem no Mobile (abaixo do texto) */}
              <div className="lg:hidden mt-8 flex justify-center">
                <img
                  src={MaoFundo}
                  alt="Manicure premium no Cheias de Charme Studio"
                  className="w-full max-w-xs h-auto object-contain rounded-2xl"
                  loading="eager"
                />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => handleWhatsAppClick('hero_primary')}
                  className="group"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Agendar Agora
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={handleCalendarClick}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Ver Disponibilidade
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground mt-10">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Higiene Impecável</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-primary" />
                  <span>Qualidade Comprovada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Atendimento Express</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Imagem no Desktop */}
        <div className="hidden lg:flex absolute top-0 right-0 h-full w-full lg:w-1/2 z-0 items-end justify-center">
          <img
            src={MaoFundo}
            alt="Manicure premium no Cheias de Charme Studio"
            className="w-full h-auto max-h-[80%] object-contain"
            loading="eager"
          />
        </div>
      </section>

      {/* Services Section (O resto do código permanece o mesmo) */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-up">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Nossos Pacotes em Destaque
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combinações pensadas para oferecer uma experiência completa de cuidado e beleza.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="card-premium group hover:scale-105 transition-all duration-500 overflow-hidden animate-fade-up rounded-[3rem]"
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

      {/* Atendimento Express Section */}
      <section className="py-20 lg:py-32 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-4xl mx-auto text-center animate-fade-up p-8 lg:p-16">
            <div className="absolute inset-0 bg-primary rounded-[2rem] -z-10"></div>
            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
                Precisa de Atendimento Imediato?
              </h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed mt-8">
                Aqui no <span className="font-semibold text-white">Studio Cheias de Charme</span>, 
                sempre temos horários disponíveis para você.  
                E se surgir uma necessidade de última hora, oferecemos o 
                <span className="font-semibold text-white"> Atendimento Express</span>: um encaixe imediato com taxa adicional, 
                para garantir que sua beleza não espere.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/atendimento-express">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="group bg-white text-primary hover:bg-white/10 w-full"
                  >              
                    <Sparkles className="w-5 h-5 mr-4" />
                    Saiba Mais
                  </Button>
                </Link>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="group bg-transparent border-white text-white hover:bg-white/20"
                  onClick={() => handleWhatsAppClick('agendar_encaixe')}
                >              
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Encaixe
                </Button>
              </div>
            </div>
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
                className="card-premium p-6 space-y-4 animate-fade-up rounded-[3rem]"
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
          <div className="text-center mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/avaliacoes">
              <Button variant="secondary" size="lg" className="group w-full">
                Ver Mais Avaliações
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/avaliacoes/deixar-avaliacao">
              <Button variant="primary" size="lg" className="grou w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Deixar a Sua Avaliação
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    {/* Launch Cocktail Section */}
      <section className="py-20 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
                Você é nossa convidada especial.
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Participe do nosso coquetel de lançamento e celebre conosco.
              </p>
            </div>
            <div className="pt-4">
              <Link to="/lancamento">
                <Button 
                  variant="secondary" 
                  size="xl" 
                  className="group bg-primary-foreground/20 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/30"
                >
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