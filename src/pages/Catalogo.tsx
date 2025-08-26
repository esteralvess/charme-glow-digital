import React, { useState } from 'react';
import { Phone, Star, Clock, Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button-premium';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Sobrancelha from '@/assets/sobrancelha.png';
import PeMao from '@/assets/pe-mao.png';
import PeMaoGel from '@/assets/pe-mao-gel.png';
import Mao from '@/assets/esmaltacao-mao.png';
import Micro from '@/assets/micro.png';
import Pe from '@/assets/pe.png';
import MaoGel from '@/assets/gel.png';
import SPA from '@/assets/SPApe.png';
import Cuticulagem from '@/assets/cuticula.png';
import Tratamento from '@/assets/tratamento.png';
import Henna from '@/assets/henna.png';
import Alogamento from '@/assets/alongamento.png';
import Restauracao from '@/assets/restauracao.png';
import Cera from '@/assets/cera.png';

// --- TODOS OS SERVIÇOS COM PREÇOS ATUALIZADOS ---
const allServices = [
  {
    category: 'Sobrancelhas',
    name: 'Design de Sobrancelha',
    description: 'Modelagem profissional que harmoniza e valoriza o formato do seu rosto, realçando seu olhar.',
    duration: '20 min',
    price: '29,98',
    popular: true,
    image: Sobrancelha,
    unidade: 'Ambas'
  },
  {
    category: 'Sobrancelhas',
    name: 'Sobrancelha de Henna',
    description: 'Aplicação de henna para preencher falhas e dar mais definição, com um resultado natural e marcante.',
    duration: '60 min',
    price: '49,98',
    popular: false,
    image: Henna,
    unidade: 'Ambas'
  },
  {
    category: 'Sobrancelhas',
    name: 'Micropigmentação',
    description: 'Técnica avançada para um design duradouro e sobrancelhas perfeitamente desenhadas fio a fio.',
    duration: '2 horas',
    price: '448,90',
    popular: true,
    image: Micro,
    unidade: 'Miguel Badra'
  },
  {
    category: 'Mãos e Pés',
    name: 'Pé - Esmaltação Tradicional',
    description: 'Cuidado completo dos pés com cutilagem, hidratação e a cor de esmalte da sua preferência.',
    duration: '60 min',
    price: '34,98',
    popular: false,
    image: Pe,
    unidade: 'Ambas'
  },
  {
    category: 'Mãos e Pés',
    name: 'Mão - Esmaltação Tradicional',
    description: 'Cuidado clássico das mãos, deixando suas unhas impecáveis com a esmaltação perfeita.',
    duration: '40 min',
    price: '29,98',
    popular: true,
    image: Mao,
    unidade: 'Ambas'
  },
  {
    category: 'Mãos e Pés',
    name: 'Pé - Esmaltação em Gel',
    description: 'Unhas dos pés perfeitas por semanas, com brilho intenso e secagem imediata. Ideal para viagens.',
    duration: '60 min',
    price: '59,98',
    popular: false,
    image: PeMaoGel,
    unidade: 'Ambas'
  },
  {
    category: 'Mãos e Pés',
    name: 'Mão - Esmaltação em Gel',
    description: 'A durabilidade e o brilho do esmalte em gel para unhas das mãos impecáveis por mais tempo.',
    duration: '60 min',
    price: '59,98',
    popular: true,
    image: MaoGel,
    unidade: 'Ambas'
  },
  {
    category: 'Mãos e Pés',
    name: 'SPA dos Pés',
    description: 'Um ritual de relaxamento e cuidado profundo para renovar e hidratar seus pés. Tratamento de rachaduras',
    duration: '1h 30 min',
    price: '79,90',
    popular: false,
    image: SPA,
    unidade: 'Ambas'
  },
  {
    category: 'Tratamentos de Unhas',
    name: 'Tratamento de Unha',
    description: 'Tratamento de unhas contaminadas, com fungos ou micoses, promovendo a saúde e a recuperação das unhas.',
    duration: '60 min | sessão',
    price: '49,90 | sessão',
    popular: false,
    image: Tratamento,
    unidade: 'Ambas'
  },
  {
    category: 'Outros Serviços',
    name: 'Tratamento de Olho de Peixe',
    description: 'Tratamento especializado para remoção de calos e pele ressecada nos pés. Utilizando técnicas de cauterização com jato de plasma.',
    duration: '30 min | sessão',
    price: '59,90 | sessão',
    popular: false,
    image: Tratamento,
    unidade: 'Ambas'
  },
  {
    category: 'Tratamentos de Unhas',
    name: 'Cuticulagem',
    description: 'Serviço de remoção e hidratação precisa das cutículas para um acabamento limpo e profissional. Esmaltacao opcional com base.',
    duration: '30 min',
    price: '24,98',
    popular: false,
    image: Cuticulagem,
    unidade: 'Ambas'
  },
  {
    category: 'Tratamentos de Unhas',
    name: 'Banho de Gel',
    description: 'Camada protetora de gel que aumenta a resistência da unha natural, evitando quebras.',
    duration: '60 min',
    price: '59,90',
    popular: false,
    image: PeMao,
    unidade: 'Ambas'
  },
  {
    category: 'Tratamentos de Unhas',
    name: 'Blindagem de Unha',
    description: 'Feitas com gel base, deixando as unhas flexíveis, evitando quebras e dando duração ao esmalte comum.',
    duration: '60 min',
    price: '59,90',
    popular: false,
    image: PeMao,
    unidade: 'Ambas'
  },
  {
    category: 'Tratamentos de Unhas',
    name: 'Restauração de Unha',
    description: 'Recuperação de unhas danificadas com técnicas de reconstrução. Ideal para quando quebra ou lasca alguma unha específica.',
    duration: '20 min',
    price: '9,90 por unha',
    popular: false,
    image: Restauracao,
    unidade: 'Ambas'
  },
  {
    category: 'Tratamentos de Unhas',
    name: 'Alongamento de Unha',
    description: 'Aumente o comprimento das suas unhas com naturalidade e resistência. Várias técnicas disponíveis.',
    duration: '3 horas',
    price: '159,90',
    popular: false,
    image: Alogamento,
    unidade: 'Ambas'
  },
  {
    category: 'Depilação Facial',
    name: 'Rosto Completo (cera)',
    description: 'Depilação facial com cera de alta qualidade para uma pele lisa e macia.',
    duration: '30 min',
    price: '34,99',
    popular: false,
    image: Cera,
    unidade: 'Miguel Badra'
  },
  {
    category: 'Depilação Facial',
    name: 'Buço (cera)',
    description: 'Remoção de pelos da região do buço com cera de alta qualidade.',
    duration: '20 min',
    price: '14,99',
    popular: false,
    image: Cera,
    unidade: 'Miguel Badra'
  },
  {
    category: 'Depilação Facial',
    name: 'Sobrancelha (cera)',
    description: 'Modelagem da sobrancelha utilizando a técnica de depilação com cera.',
    duration: '30 min',
    price: '24,99',
    popular: false,
    image: Cera,
    unidade: 'Miguel Badra'
  },
  {
    category: 'Depilação Facial',
    name: 'Queixo (cera)',
    description: 'Remoção de pelos da região do queixo com cera de alta qualidade.',
    duration: '20 min',
    price: '14,99',
    popular: false,
    image: Cera,
    unidade: 'Miguel Badra'
  },
  {
    category: 'Depilação Corporal',
    name: 'Axila (cera)',
    description: 'Depilação corporal com cera de alta qualidade para uma pele lisa e macia.',
    duration: '20 min',
    price: '19,98',
    popular: true,
    image: Cera,
    unidade: 'Miguel Badra'
  },
  {
    category: 'Depilação Corporal',
    name: 'Linha da Barriga (cera)',
    description: 'Depilação corporal com cera de alta qualidade para uma pele lisa e macia.',
    duration: '20 min',
    price: '19,98',
    popular: false,
    image: Cera,
    unidade: 'Miguel Badra'
  },
  {
    category: 'Depilação Corporal',
    name: 'Barriga Completa (cera)',
    description: 'Depilação corporal com cera de alta qualidade para uma pele lisa e macia.',
    duration: '40 min',
    price: '39,99',
    popular: false,
    image: Cera,
    unidade: 'Miguel Badra'
  },
  {
    category: 'Depilação Corporal',
    name: 'Glúteo (cera)',
    description: 'Depilação corporal com cera de alta qualidade para uma pele lisa e macia.',
    duration: '40 min',
    price: '39,99',
    popular: false,
    image: Cera,
    unidade: 'Miguel Badra'
  },
  {
    category: 'Depilação Corporal',
    name: 'Virilha Completa + Perianal (cera)',
    description: 'Depilação corporal com cera de alta qualidade para uma pele lisa e macia.',
    duration: '1 hora',
    price: '59,99',
    popular: true,
    image: Cera,
    unidade: 'Miguel Badra'
  },
  {
    category: 'Depilação Corporal',
    name: 'Virilha Simples + Perianal (cera)',
    description: 'Depilação corporal com cera de alta qualidade para uma pele lisa e macia.',
    duration: '30 min',
    price: '39,99',
    popular: false,
    image: Cera,
    unidade: 'Miguel Badra'
  },
  {
    category: 'Depilação Corporal',
    name: 'Perna Completa (cera)',
    description: 'Depilação corporal com cera de alta qualidade para uma pele lisa e macia.',
    duration: '40 min',
    price: '59,99',
    popular: false,
    image: Cera,
    unidade: 'Miguel Badra'
  },
  {
    category: 'Depilação Corporal',
    name: 'Meia Perna (cera)',
    description: 'Depilação corporal com cera de alta qualidade para uma pele lisa e macia.',
    duration: '30 min',
    price: '34,99',
    popular: false,
    image: Cera,
    unidade: 'Miguel Badra'
  },
  {
    category: 'Massagem',
    name: 'Reflexologia Podal',
    description: 'Técnica de massagem que estimula pontos reflexos nos pés, promovendo relaxamento e bem-estar.',
    duration: '2 horas',
    price: '79,90',
    popular: false,
    image: Cera,
    unidade: 'Ambas'
  },
  {
    category: 'Massagem',
    name: 'Massagem Corporal',
    description: 'Técnica de massagem que promove o relaxamento muscular e alívio do estresse.',
    duration: '2 horas',
    price: '134,90',
    popular: false,
    image: Cera,
    unidade: 'Miguel Badra'
  },
  {
    category: 'Massagem',
    name: 'Massagem Pés',
    description: 'Técnica de massagem que promove o relaxamento muscular e alívio do estresse.',
    duration: '2 horas',
    price: '59,90',
    popular: false,
    image: Cera,
    unidade: 'Ambas'
  },
];


const Catalogo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedUnidade, setSelectedUnidade] = useState('Todas');

  const handleWhatsAppClick = (serviceName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar o serviço: ${serviceName}`);
    const whatsappUrl = `https://wa.me/5511958525413?text=${message}&utm_source=website&utm_medium=catalogo&utm_campaign=${serviceName.toLowerCase().replace(/\s+/g, '_')}`;
    window.open(whatsappUrl, '_blank');
  };

  const categories = ['Todos', ...new Set(allServices.map(service => service.category))];

  // --- LÓGICA DE FILTRO AJUSTADA PARA MAIOR CLAREZA ---
  const filteredServices = allServices.filter(service => {
    // Filtro por Unidade
    const matchesUnidade = () => {
      // Se "Todas as Unidades" estiver selecionado, o serviço SEMPRE deve aparecer.
      if (selectedUnidade === 'Todas') {
        return true;
      }
      // Caso contrário, mostra apenas se o serviço for de "Ambas" ou da unidade específica.
      return service.unidade === 'Ambas' || service.unidade === selectedUnidade;
    };

    // Outros filtros
    const matchesCategory = selectedCategory === 'Todos' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Retorna true apenas se passar em todos os filtros
    return matchesCategory && matchesSearch && matchesUnidade();
  });

  return (
    <main className="min-h-screen pt-20 lg:pt-28">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-secondary/50">
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

      {/* Filtros e Pesquisa */}
      <section className="py-6 sticky top-16 lg:top-20 bg-background/80 backdrop-blur-md z-40 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="relative md:col-span-1">
              <Input 
                type="text"
                placeholder="Pesquisar por um serviço..."
                className="pl-10 h-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            
            <div className="md:col-span-1">
              <Select onValueChange={setSelectedUnidade} defaultValue="Todas">
                <SelectTrigger className="w-full h-12">
                  <SelectValue placeholder="Filtrar por unidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todas">Todas as Unidades</SelectItem>
                  <SelectItem value="Centro">Unidade Centro</SelectItem> 
                  <SelectItem value="Miguel Badra">Unidade Miguel Badra</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="md:col-span-1">
              <Select onValueChange={setSelectedCategory} defaultValue="Todos">
                <SelectTrigger className="w-full h-12">
                  <SelectValue placeholder="Filtrar por categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Card 
                key={service.name}
                className="flex flex-col overflow-hidden transition-all duration-300 animate-fade-up border-border/60 hover:shadow-lg rounded-[2rem]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative">
                  <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
                  {service.popular && (
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Popular</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="space-y-2 flex-grow">
                    
                    {service.unidade !== 'Ambas' && (
                      <div className="flex items-center space-x-1.5 mb-2">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                          Exclusivo Unidade {service.unidade}
                        </span>
                      </div>
                    )}

                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm pt-4 border-t">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="font-semibold text-primary text-lg">
                     <span>R$ {service.price}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="primary"
                    size="sm"
                    onClick={() => handleWhatsAppClick(service.name)}
                    className="w-full"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Agendar Agora
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Nenhum serviço encontrado. Tente uma pesquisa ou filtro diferente.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-secondary/50">
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
              variant="primary"
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