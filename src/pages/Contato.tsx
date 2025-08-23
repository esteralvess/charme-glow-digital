import React from 'react';
import { Phone, MapPin, Clock, Instagram, /* Facebook, Mail, */ MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button-premium';
import { Card } from '@/components/ui/card';

const Contato = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'WhatsApp',
      description: 'Resposta rápida e agendamento direto',
      action: 'Enviar Mensagem',
      primary: true,
      onClick: () => {
        const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços do Cheias de Charme Studio.');
        const whatsappUrl = `https://wa.me/5511958525413?text=${message}&utm_source=website&utm_medium=contato&utm_campaign=whatsapp_direto`;
        window.open(whatsappUrl, '_blank');
      }
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Veja nossos trabalhos e novidades',
      action: 'Seguir',
      primary: true,
      onClick: () => {
        window.open('https://www.instagram.com/cheiasdecharme.unhas', '_blank');
      }
    },
    // {
    //   icon: Facebook,
    //   title: 'Facebook',
    //   description: 'Conecte-se conosco na rede social',
    //   action: 'Visitar Página',
    //   primary: false,
    //   onClick: () => {
    //     window.open('https://facebook.com/cheiasdecharmestudio', '_blank');
    //   }
    // },
    // {
    //   icon: Mail,
    //   title: 'E-mail',
    //   description: 'Para consultas e informações detalhadas',
    //   action: 'Enviar E-mail',
    //   primary: false,
    //   onClick: () => {
    //     window.location.href = 'mailto:contato@cheiasdecharmestudio.com.br?subject=Contato pelo Site';
    //   }
    // }
  ];

  const businessInfo = {
    hours: [
      { day: 'Segunda a Sexta', time: '9h às 18h' },
      { day: 'Sábado', time: '9h às 17h' },
      { day: 'Domingo', time: 'Fechado' }
    ],
    location: {
      address: 'Praça João Pessoa, 59 - Centro, Suzano - SP, sala 8',
      neighborhood: 'Centro',
      reference: 'Próximo a Praça da Igreja e a Estação de Suzano'
    }
  };

  const faqs = [
    {
      question: 'Como faço para agendar um horário?',
      answer: 'O agendamento pode ser feito pelo WhatsApp, onde temos resposta rápida e conseguimos encontrar o melhor horário para você. Também aceitamos agendamentos por telefone ou pessoalmente.'
    },
    {
      question: 'Qual a política de cancelamento?',
      answer: 'Pedimos que cancelamentos sejam feitos com pelo menos 2 horas de antecedência. Isso nos permite reorganizar a agenda e atender outras clientes.'
    }
  ];

  return (
    <main className="min-h-screen pt-20 lg:pt-28">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-up">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Entre em Contato
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estamos aqui para cuidar de você. Entre em contato conosco para 
              agendar seu horário ou esclarecer qualquer dúvida.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card 
                  key={method.title}
                  className="card-premium p-6 text-center space-y-4 group hover:scale-105 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, width: '100%', maxWidth: '280px' }}
                >
                  <div className="flex justify-center">
                    <div className={`p-4 rounded-full ${method.primary ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                  
                  <Button 
                    variant={method.primary ? "primary" : "secondary"}
                    size="sm"
                    onClick={method.onClick}
                    className="w-full group-hover:shadow-premium transition-all duration-300"
                  >
                    {method.action}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hours */}
            <Card className="card-premium p-6 space-y-6 animate-fade-up">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-primary" />
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Horário de Funcionamento
                </h2>
              </div>
              
              <div className="space-y-3">
                {businessInfo.hours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="font-medium text-foreground">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-border/60">
                <p className="text-sm text-muted-foreground">
                  Para agendamentos fora do horário comercial, entre em contato pelo WhatsApp. 
                  Fazemos o possível para atender sua necessidade!
                </p>
              </div>
            </Card>

            {/* Location */}
            <Card className="card-premium p-6 space-y-6 animate-fade-up" style={{ animationDelay: '150ms' }}>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Nossa Localização
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="font-medium text-foreground">
                    {businessInfo.location.address}
                  </div>
                  <div className="text-muted-foreground">
                    {businessInfo.location.neighborhood}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {businessInfo.location.reference}
                  </div>
                </div>
                
                <Button 
                  variant="secondary" 
                  onClick={() => {
                    window.open('https://www.google.com/maps/place/Cheias+de+Charme/@-23.5353228,-46.3088095,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce7b34b113ee3d:0x23942b98ada2ba65!8m2!3d-23.5353228!4d-46.3088095!16s%2Fg%2F11xkyts5g1?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D', '_blank');
                  }}
                  className="w-full"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Ver no Mapa
                </Button>
              </div>
              
              <div className="pt-4 border-t border-border/60">
                <p className="text-sm text-muted-foreground">
                  Estacionamento disponível nas proximidades. 
                  Entre em contato para mais informações sobre como chegar.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12 animate-fade-up">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Perguntas Frequentes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Esclarecemos as principais dúvidas sobre nossos serviços e atendimento.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card 
                  key={index}
                  className="card-premium p-6 space-y-3 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <div className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Ainda Tem Dúvidas?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nossa equipe está sempre disponível para esclarecer suas dúvidas 
                e ajudar você a escolher o melhor tratamento.
              </p>
            </div>
            
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => {
                const message = encodeURIComponent('Olá! Tenho algumas dúvidas sobre os serviços. Podem me ajudar?');
                const whatsappUrl = `https://wa.me/5511958525413?text=${message}&utm_source=website&utm_medium=contato&utm_campaign=duvidas`;
                window.open(whatsappUrl, '_blank');
              }}
              className="group"
            >
              <MessageCircle className="w-5 h-5 mr-3 group-hover:animate-pulse" />
              Falar com Nossa Equipe
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;
