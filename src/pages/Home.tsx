import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Clock, Shield, Heart, Sparkles, Phone, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button-premium';
import { Card } from '@/components/ui/card';
import Sobrancelha from '@/assets/sobrancelha.png';
import PeMaoGel from '@/assets/pe-mao-gel.png';
import MaoGel from '@/assets/gel.png';
import MaoFundo from '@/assets/mao-fundo-2.png';

const Home = () => {
  const services = [
    {
      title: 'Pacote Clássico',
      description: 'O cuidado completo para o dia a dia. Mãos e pés com esmaltação tradicional para um look impecável.',
      price: 'R$ 89,90',
      image: PeMaoGel,
      highlights: ['Mão e Pé Tradicional', 'Esfoliação', 'Hidratação Suave']
    },
    {
      title: 'Pacote Realce',
      description: 'A combinação perfeita para realçar sua beleza, unindo o cuidado das mãos e pés com um design de sobrancelha.',
      price: 'R$ 95,90',
      image: Sobrancelha,
      highlights: ['Mão e Pé Tradicional', 'Design de Sobrancelha', 'Harmonização do Olhar']
    },
    {
      title: 'Pacote Durabilidade',
      description: 'Praticidade e brilho duradouro. Mãos com a resistência do esmalte em gel e pés com o cuidado tradicional.',
      price: 'R$ 114,90',
      image: MaoGel,
      highlights: ['Mão com Esmalte em Gel', 'Pé Tradicional', 'Brilho por mais tempo']
    }
  ];

  const [googleReviews, setGoogleReviews] = React.useState<any[]>([]);

  React.useEffect(() => {
    // Substitua pela sua API ou webhook que retorna reviews do Google
    fetch('https://webhooks.gerenc.com/webhook/google-reviews')
      .then(res => res.json())
      .then(data => {
        setGoogleReviews(data.reviews?.slice(0, 3) || []);
      })
      .catch(err => console.error('Erro ao buscar avaliações do Google:', err));
  }, []);

  const handleWhatsAppClick = (utmCampaign: string) => {
    let message = 'Olá! Gostaria de agendar um horário no Cheias de Charme Studio.';
    if (utmCampaign === 'agendar_encaixe') {
      message = 'Olá! Gostaria de verificar a disponibilidade para um Atendimento Express.';
    }
    const whatsappUrl = `https://wa.me/5511958525413?text=${encodeURIComponent(message)}&utm_source=website&utm_medium=cta&utm_campaign=${utmCampaign}`;
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
            <div className="text-center lg:text-left animate-fade-up pt-16 lg:pt-0 mt-10">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Unhas que encantam, charme que marca.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mt-8">
                No Studio Cheias de Charme, cada detalhe é cuidadosamente pensado para valorizar sua beleza única. Manicure e estética premium em Suzano-SP.
              </p>
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
                {/*}
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={handleCalendarClick}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Ver Disponibilidade
                </Button>
                */}
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
        <div className="hidden lg:flex absolute top-0 right-0 h-full w-full lg:w-1/2 z-0 items-end justify-center">
          <img
            src={MaoFundo}
            alt="Manicure premium no Cheias de Charme Studio"
            className="w-full h-auto max-h-[80%] object-contain"
            loading="eager"
          />
        </div>
      </section>

      {/* Services Section */}
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

      {/* Testimonials Section 
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
            {googleReviews.map((review, index) => (
              <Card 
                key={review.id || index}
                className="card-premium p-6 space-y-4 animate-fade-up rounded-[3rem]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-foreground italic leading-relaxed">
                  "{review.comment || review.text}"
                </blockquote>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">
                    {review.author_name || review.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {review.service || 'Serviço Avaliado'}
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
            <Button 
              variant="primary" 
              size="lg" 
              className="group w-full"
              onClick={() => window.open('https://g.page/SEU_LINK_GOOGLE_REVIEW', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Deixar a Sua Avaliação
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
      */}

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