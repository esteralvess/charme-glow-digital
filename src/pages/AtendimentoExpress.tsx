import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Clock, Shield, Heart, Star, Sparkles, DollarSign, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button-premium';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const AtendimentoExpress = () => {
  const TAXA_POR_MINUTO = 1.00; // R$1,00 por minuto

  const servicos = [
    { nome: 'Mão - Esmaltação Tradicional', duracao: 45 },
    { nome: 'Pé - Esmaltação Tradicional', duracao: 60 },
    { nome: 'Mão - Esmaltação em Gel', duracao: 60 },
    { nome: 'Pé - Esmaltação em Gel', duracao: 75 },
    { nome: 'Design de Sobrancelha', duracao: 30 },
    { nome: 'SPA dos Pés', duracao: 90 },
    { nome: 'Blindagem de Gel', duracao: 60 },
  ];

  const [servicoSelecionado, setServicoSelecionado] = useState(servicos[0]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de agendar um Atendimento Express para o serviço de ${servicoSelecionado.nome}.`
    );
    const whatsappUrl = `https://wa.me/5511958525413?text=${message}&utm_source=website&utm_medium=cta&utm_campaign=agendamento_express`;
    window.open(whatsappUrl, '_blank');
  };

  const handleServiceChange = (serviceName: string) => {
    const service = servicos.find(s => s.nome === serviceName);
    if (service) {
      setServicoSelecionado(service);
    }
  };

  const taxaCalculada = (servicoSelecionado.duracao * TAXA_POR_MINUTO).toFixed(2);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-40 from-primary/30 via-secondary/30 to-primary/30 text-center animate-fade-up relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Apenas <span className="text-primary">R$1,00 por minuto</span> para
            <br />
            garantir sua beleza imediatamente.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Horários disponíveis para encaixes imediatos. Pague apenas pelo tempo do seu serviço.
            Abaixo, explicamos como funciona.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-up">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Calculadora da sua Taxa Adicional
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Escolha o serviço desejado para ter uma estimativa do valor do seu Atendimento Express.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto p-6 sm:p-8 rounded-[2rem] animate-fade-up shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">1. Selecione o Serviço</label>
                <Select onValueChange={handleServiceChange} defaultValue={servicoSelecionado.nome}>
                  <SelectTrigger className="w-full text-lg py-6">
                    <SelectValue placeholder="Escolha um serviço..." />
                  </SelectTrigger>
                  <SelectContent>
                    {servicos.map((s) => (
                      <SelectItem key={s.nome} value={s.nome}>
                        {s.nome}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Duração Estimada</p>
                  <p className="font-bold text-2xl text-foreground">{servicoSelecionado.duracao} min</p>
                </div>
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Taxa Adicional</p>
                  <p className="font-bold text-2xl text-primary">R$ {taxaCalculada}</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                *Este é um valor estimado. Após a confirmação do agendamento, o valor exato será calculado e enviado via WhatsApp.
              </p>

              <Button
                variant="primary"
                size="lg"
                className="w-full group text-lg py-6"
                onClick={handleWhatsAppClick}
              >
                <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                Agendar Encaixe Express
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center animate-fade-up">
            <div className="space-y-3">
              <Shield className="w-10 h-10 text-primary mx-auto" />
              <h3 className="font-display text-xl font-semibold text-foreground">Higiene Impecável</h3>
              <p className="text-sm text-muted-foreground">Protocolos rigorosos de limpeza e esterilização para sua total segurança.</p>
            </div>
            <div className="space-y-3">
              <Star className="w-10 h-10 text-primary mx-auto" />
              <h3 className="font-display text-xl font-semibold text-foreground">Qualidade Garantida</h3>
              <p className="text-sm text-muted-foreground">Mesmo no atendimento express, mantemos nosso padrão de excelência e atenção aos detalhes.</p>
            </div>
            <div className="space-y-3">
              <Heart className="w-10 h-10 text-primary mx-auto" />
              <h3 className="font-display text-xl font-semibold text-foreground">Sua Beleza, Sem Espera</h3>
              <p className="text-sm text-muted-foreground">Resolvemos sua necessidade de última hora para que você esteja sempre impecável.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AtendimentoExpress;