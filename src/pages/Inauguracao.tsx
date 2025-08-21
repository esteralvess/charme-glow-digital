import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Sparkles, ArrowRight, CheckCircle, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button-premium';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';

// 1. Defina o esquema de validação do formulário com Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome precisa ter pelo menos 2 caracteres.',
  }),
  email: z.string().email({
    message: 'Por favor, insira um e-mail válido.',
  }),
  // A nova regex é mais flexível para aceitar diferentes formatos de telefone
  phone: z.string().regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, {
    message: 'Formato de telefone inválido. Ex: (XX) XXXXX-XXXX.',
  }),
});

const Inauguracao = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  // 2. Função que será executada ao enviar o formulário
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Simula o envio de dados para o console
    console.log('RSVP recebido:', values);

    setIsSubmitted(true);
    
    // Exibe um toast de sucesso com as instruções do cupom
    toast.success('RSVP Recebido!', {
      description: `Obrigada por confirmar, ${values.name}! Enviamos seu cupom de 10% de desconto para o seu e-mail e WhatsApp.`,
      icon: <Gift className="h-4 w-4" />,
    });
  };

  return (
    <main className="min-h-screen pt-20 lg:pt-28">
      {/* Header da Inauguração */}
      <section className="py-12 lg:py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-up">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Inauguração Exclusiva</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Grande Inauguração
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Participe do nosso coquetel de inauguração e descubra um novo 
              conceito de beleza premium em Suzano-SP.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de RSVP e Cupom */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="card-premium p-6 sm:p-8 space-y-8 animate-fade-up">
              {isSubmitted ? (
                // Mensagem de sucesso após o envio do formulário
                <div className="text-center space-y-4 text-green-600">
                  <CheckCircle className="w-12 h-12 mx-auto text-primary" />
                  <h3 className="font-display text-xl font-semibold">Obrigada por confirmar!</h3>
                  <p className="text-muted-foreground">
                    Seu cupom de 10% de desconto foi enviado para o seu e-mail e WhatsApp. 
                    Esperamos por você em nossa inauguração!
                  </p>
                </div>
              ) : (
                // Conteúdo completo com título, descrição e formulário
                <>
                  <div className="text-center space-y-2">
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Confirme Sua Presença
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Garanta seu lugar no nosso evento e receba um cupom de 
                      <strong>10% de desconto</strong> para seu primeiro serviço.
                    </p>
                  </div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Seu Nome</FormLabel>
                            <FormControl>
                              <Input placeholder="Nome Completo" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Seu E-mail</FormLabel>
                            <FormControl>
                              <Input placeholder="exemplo@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Seu WhatsApp</FormLabel>
                            <FormControl>
                              <Input placeholder="(XX) XXXXX-XXXX" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg"
                        className="w-full group"
                      >
                        Confirmar Presença
                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Informações do Evento */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Detalhes da Inauguração
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Junte-se a nós para uma noite de beleza, celebração e surpresas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <Sparkles className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-semibold text-foreground">Data</h3>
                <p className="text-sm text-muted-foreground">Sexta-feira, 31 de Agosto</p>
              </div>
              <div className="space-y-2">
                <Sparkles className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-semibold text-foreground">Horário</h3>
                <p className="text-sm text-muted-foreground">A partir das 19h</p>
              </div>
              <div className="space-y-2">
                <Sparkles className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-semibold text-foreground">Local</h3>
                <p className="text-sm text-muted-foreground">Suzano - SP, Centro</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Inauguracao;