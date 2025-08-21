import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Sparkles, ArrowRight, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button-premium';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

// 1. Defina o esquema de validação do formulário
const reviewSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome precisa ter pelo menos 2 caracteres.',
  }),
  service: z.string().min(2, {
    message: 'Por favor, informe o serviço avaliado.',
  }),
  rating: z.string({
    required_error: 'Por favor, selecione uma nota.',
  }),
  comment: z.string().min(10, {
    message: 'Sua avaliação precisa ter pelo menos 10 caracteres.',
  }),
});

const DeixarAvaliacao = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: '',
      service: '',
      rating: '',
      comment: '',
    },
  });

  const onSubmit = (values: z.infer<typeof reviewSchema>) => {
    // Simula o envio de dados
    console.log('Nova avaliação enviada:', values);

    // Exibe um toast de sucesso
    toast.success('Avaliação enviada com sucesso!', {
      description: 'Agradecemos o seu feedback.',
      icon: <Check className="h-4 w-4" />,
    });

    // Redireciona de volta para a página de avaliações
    navigate('/avaliacoes');
  };

  return (
    <main className="min-h-screen pt-20 lg:pt-28">
      {/* Header da Página */}
      <section className="py-12 lg:py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-up">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Deixe sua Avaliação
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sua opinião é muito importante para nós! Compartilhe sua experiência.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Avaliação */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="card-premium p-6 sm:p-8 space-y-8 animate-fade-up">
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
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Serviço Avaliado</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Manicure Premium" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nota</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione sua nota de 1 a 5" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="5">
                                <div className="flex items-center space-x-2">
                                    <span>5 Estrelas</span> <Star className="w-4 h-4 fill-primary text-primary" />
                                </div>
                            </SelectItem>
                            <SelectItem value="4">
                                <div className="flex items-center space-x-2">
                                    <span>4 Estrelas</span> <Star className="w-4 h-4 fill-primary text-primary" />
                                </div>
                            </SelectItem>
                            <SelectItem value="3">
                                <div className="flex items-center space-x-2">
                                    <span>3 Estrelas</span> <Star className="w-4 h-4 fill-primary text-primary" />
                                </div>
                            </SelectItem>
                            <SelectItem value="2">
                                <div className="flex items-center space-x-2">
                                    <span>2 Estrelas</span> <Star className="w-4 h-4 fill-primary text-primary" />
                                </div>
                            </SelectItem>
                            <SelectItem value="1">
                                <div className="flex items-center space-x-2">
                                    <span>1 Estrela</span> <Star className="w-4 h-4 fill-primary text-primary" />
                                </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Comentário</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Conte-nos sobre sua experiência..." 
                            className="min-h-[100px]"
                            {...field} 
                          />
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
                    Enviar Avaliação
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DeixarAvaliacao;