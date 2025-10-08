import React, { useState, useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Sparkles, ArrowRight, CheckCircle, Gift, Building, Percent, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button-premium';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Constantes
const WEBHOOK_URL = 'https://webhooks.gerenc.com/webhook/parceria-empresa';
const COMPANIES = [
  { value: 'sicred', label: 'Sicred' },
] as const;

// Utilitário para validação de data
const isValidDate = (dateString: string): boolean => {
  const [day, month, year] = dateString.split('/').map(Number);
  const date = new Date(year, month - 1, day);
  
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day &&
    year >= 1900 &&
    year <= new Date().getFullYear() - 16 // Mínimo 16 anos
  );
};

// Validação personalizada para email corporativo
const isCorporateEmail = (email: string): boolean => {
  const personalDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com'];
  const domain = email.split('@')[1]?.toLowerCase();
  return !personalDomains.includes(domain);
};

// Esquema de validação Zod aprimorado
const formSchema = z.object({
  company: z.string().min(1, {
    message: 'Por favor, selecione uma empresa.',
  }),
  fullName: z
    .string()
    .min(2, { message: 'O nome precisa ter pelo menos 2 caracteres.' })
    .max(100, { message: 'O nome não pode ter mais de 100 caracteres.' })
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, { message: 'O nome deve conter apenas letras.' }),
  birthDate: z
    .string()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, { message: 'Use o formato DD/MM/AAAA.' })
    .refine(isValidDate, { message: 'Data de nascimento inválida.' }),
  corporateEmail: z
    .string()
    .email({ message: 'Por favor, insira um e-mail válido.' })
    .refine(isCorporateEmail, { message: 'Use um e-mail corporativo (não gmail, hotmail, etc.).' }),
  employeeId: z
    .string()
    .min(1, { message: 'A matrícula é obrigatória.' })
    .max(20, { message: 'A matrícula não pode ter mais de 20 caracteres.' }),
});

type FormData = z.infer<typeof formSchema>;

interface ApiResponse {
  success: boolean;
  message?: string;
}

// Hook personalizado para submissão do formulário
const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const submitForm = useCallback(async (data: FormData): Promise<boolean> => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Erro ${response.status}: ${response.statusText}`);
      }

      const result: ApiResponse = await response.json();
      
      if (result.success !== false) {
        toast.success('Cadastro realizado com sucesso!', {
          description: `Bem-vinda, ${data.fullName}! Seus benefícios foram ativados.`,
          icon: <Gift className="h-4 w-4" />,
        });
        return true;
      } else {
        throw new Error(result.message || 'Erro no processamento do cadastro.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Erro inesperado ao conectar com o servidor.';
      
      toast.error('Erro ao realizar o cadastro', {
        description: errorMessage,
      });
      
      console.error('Form submission error:', error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return { submitForm, isSubmitting };
};

// Componente de benefícios
const BenefitCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="space-y-3 p-4 rounded-lg bg-background/50 border border-border/50">
    <div className="flex justify-center">{icon}</div>
    <h3 className="font-semibold text-foreground text-center">{title}</h3>
    <p className="text-sm text-muted-foreground text-center leading-relaxed">
      {description}
    </p>
  </div>
);

// Componente principal
const ParceriaEmpresas: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { submitForm, isSubmitting } = useFormSubmission();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: '',
      fullName: '',
      birthDate: '',
      corporateEmail: '',
      employeeId: '',
    },
    mode: 'onChange',
  });

  const onSubmit = useCallback(async (values: FormData) => {
    const success = await submitForm(values);
    if (success) {
      setIsSubmitted(true);
      form.reset();
    }
  }, [submitForm, form]);

  // Formatação automática da data
  const handleDateChange = useCallback((value: string, onChange: (value: string) => void) => {
    const numbersOnly = value.replace(/\D/g, '');
    let formatted = numbersOnly;
    
    if (numbersOnly.length >= 2) {
      formatted = `${numbersOnly.slice(0, 2)}/${numbersOnly.slice(2)}`;
    }
    if (numbersOnly.length >= 4) {
      formatted = `${numbersOnly.slice(0, 2)}/${numbersOnly.slice(2, 4)}/${numbersOnly.slice(4, 8)}`;
    }
    
    onChange(formatted);
  }, []);

  // Dados dos benefícios memoizados
  const benefits = useMemo(() => [
    {
      icon: <Percent className="w-8 h-8 text-primary" />,
      title: '10% de Desconto Permanente',
      description: 'Em todos os pacotes de pé e mão tradicional, enquanto você fizer parte da equipe.',
    },
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: 'Presente de Boas-Vindas',
      description: 'Ganhe um mini spa dos pés com massagem no seu primeiro mês.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: 'Mais Cuidado e Bem-estar',
      description: 'Reserve um tempo para você e relaxe em um ambiente pensado no seu conforto.',
    },
  ], []);

  // Componente de sucesso
  const SuccessMessage: React.FC = () => (
    <div className="text-center space-y-6 animate-fade-up">
      <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
      <div className="space-y-2">
        <h3 className="font-display text-2xl font-semibold text-foreground">
          Cadastro concluído!
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
          Seu desconto permanente de 10% já está ativo! Agende seu primeiro pacote 
          e aproveite seu presente de boas-vindas.
        </p>
      </div>
      <Button
        onClick={() => setIsSubmitted(false)}
        variant="secondary"
        className="mt-4"
      >
        Fazer novo cadastro
      </Button>
    </div>
  );

  return (
    <main className="min-h-screen pt-20 lg:pt-28">
      {/* Header da Seção de Parcerias */}
      <section className="py-12 lg:py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Building className="w-4 h-4" />
              <span>Parceria Corporativa</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Clube de Vantagens para Empresas
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Um benefício exclusivo para colaboradoras de empresas parceiras. 
              Garanta seu bem-estar com descontos especiais e mimos exclusivos.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Cadastro */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="card-premium p-6 sm:p-8 space-y-8 animate-fade-up">
              {isSubmitted ? (
                <SuccessMessage />
              ) : (
                <>
                  <div className="text-center space-y-3">
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Ative Seus Benefícios
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Preencha os dados abaixo para garantir seu{' '}
                      <strong className="text-primary">desconto permanente de 10%</strong>{' '}
                      e seu presente especial durante toda sua jornada na empresa.
                    </p>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Empresa *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-11">
                                  <SelectValue placeholder="Selecione sua empresa" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {COMPANIES.map((company) => (
                                  <SelectItem key={company.value} value={company.value}>
                                    {company.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Nome Completo *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Digite seu nome completo"
                                className="h-11"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="birthDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Data de Nascimento *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="DD/MM/AAAA"
                                className="h-11"
                                maxLength={10}
                                {...field}
                                onChange={(e) => handleDateChange(e.target.value, field.onChange)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="corporateEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">E-mail Corporativo *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="seu.nome@empresa.com.br"
                                className="h-11"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="employeeId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Matrícula *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Digite sua matrícula funcional"
                                className="h-11"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-12 text-base font-semibold group"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                            Processando...
                          </>
                        ) : (
                          <>
                            Ativar meu desconto
                            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios da Parceria */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                O que você ganha com a parceria
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Benefícios exclusivos pensados especialmente para o seu bem-estar e conforto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ParceriaEmpresas;