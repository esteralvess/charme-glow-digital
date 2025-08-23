import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button-premium';
import { Card } from '@/components/ui/card';

const Avaliacoes = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({
    totalReviews: 0,
    averageRating: 0,
    fiveStars: 0,
    fourStars: 0,
    threeStars: 0,
    twoStars: 0,
    oneStars: 0
  });

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Olá! Vi as avaliações no site e gostaria de agendar um horário.'
    );
    const whatsappUrl = `https://wa.me/5511999999999?text=${message}&utm_source=website&utm_medium=avaliacoes&utm_campaign=agendamento`;
    window.open(whatsappUrl, '_blank');
  };

  const formatDate = (dateString: string | number) => {
    const date = typeof dateString === 'number' ? new Date(dateString) : new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // 🚀 Buscar avaliações do Webhook do n8n
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('https://webhooks.gerenc.com/webhook/google-reviews');
        const data = await res.json();

        if (data?.result?.reviews) {
          const googleReviews = data.result.reviews.map((r: any, i: number) => ({
            id: i,
            name: r.author_name,
            service: 'Cliente Google',
            rating: r.rating,
            date: r.time * 1000, // timestamp convertido em milissegundos
            comment: r.text,
            verified: true
          }));

          setReviews(googleReviews);

          setStats({
            totalReviews: data.result.user_ratings_total,
            averageRating: data.result.rating,
            fiveStars: googleReviews.filter((r: any) => r.rating === 5).length,
            fourStars: googleReviews.filter((r: any) => r.rating === 4).length,
            threeStars: googleReviews.filter((r: any) => r.rating === 3).length,
            twoStars: googleReviews.filter((r: any) => r.rating === 2).length,
            oneStars: googleReviews.filter((r: any) => r.rating === 1).length
          });
        }
      } catch (err) {
        console.error('Erro ao buscar avaliações:', err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <main className="min-h-screen pt-20 lg:pt-28">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-up">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Avaliações das Nossas Clientes
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A satisfação das nossas clientes é nossa maior conquista. 
              Veja o que elas dizem sobre nossa experiência de cuidado.
            </p>
          </div>
        </div>
      </section>

      {/* Botão para nova avaliação */}
      <section className="py-8 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
              <Button 
                variant="primary" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://www.google.com/maps/place/?q=place_id:ChIJPe4TsTR7zpQRZbqirZgrlCM', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Deixar a Sua Avaliação
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2 animate-fade-up">
                <div className="text-3xl sm:text-4xl font-bold text-primary font-display">
                  {stats.totalReviews}+
                </div>
                <div className="text-muted-foreground">Avaliações</div>
              </div>
              <div className="space-y-2 animate-fade-up" style={{ animationDelay: '150ms' }}>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-3xl sm:text-4xl font-bold text-primary font-display">
                    {stats.averageRating.toFixed(1)}
                  </span>
                  <Star className="w-8 h-8 fill-primary text-primary" />
                </div>
                <div className="text-muted-foreground">Nota Média</div>
              </div>
              <div className="space-y-2 animate-fade-up" style={{ animationDelay: '300ms' }}>
                <div className="text-3xl sm:text-4xl font-bold text-primary font-display">
                  {stats.totalReviews > 0 ? Math.round((stats.fiveStars / stats.totalReviews) * 100) : 0}%
                </div>
                <div className="text-muted-foreground">5 Estrelas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card 
                key={review.id}
                className="card-premium p-6 space-y-4 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  {review.verified && (
                    <div className="flex items-center space-x-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                      <Heart className="w-3 h-3 fill-current" />
                      <span>Verificada</span>
                    </div>
                  )}
                </div>
                
                <blockquote className="text-foreground leading-relaxed">
                  "{review.comment}"
                </blockquote>
                
                <div className="space-y-2 pt-2 border-t border-border/60">
                  <div className="font-semibold text-foreground">
                    {review.name}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{review.service}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(review.date)}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Pronta Para Sua Própria Experiência Especial?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Junte-se às nossas clientes satisfeitas e descubra por que somos 
              referência em cuidados de beleza em Suzano-SP.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="group"
            >
              <Heart className="w-5 h-5 mr-3 group-hover:animate-pulse" />
              Quero Agendar Meu Horário
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Avaliacoes;
