# Cheias de Charme Studio - Site Premium

Site desenvolvido para o estúdio de beleza Cheias de Charme Studio, especializado em manicure e estética em Suzano-SP.

## 🎨 Design & Características

- **Estética Premium**: Design inspirado em marcas de luxo com paleta refinada
- **Mobile-First**: Otimizado para dispositivos móveis
- **Performance**: Carregamento rápido com lazy loading e code splitting
- **SEO Otimizado**: Meta tags, structured data e otimizações para buscadores
- **Acessibilidade**: Conformidade com padrões WCAG

## 🛠 Tecnologias Utilizadas

- **React 18** com TypeScript
- **Vite** para build e desenvolvimento
- **Tailwind CSS** para estilização
- **React Router DOM** para navegação
- **Lucide React** para ícones
- **Radix UI** para componentes base
- **TanStack Query** para gerenciamento de estado

## 🚀 Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Configuração Local

```bash
# Clone o repositório
git clone <seu-repositorio>

# Navegue para o diretório
cd cheias-de-charme-studio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:8080`

## 📱 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── button-premium.tsx
├── pages/
│   ├── Home.tsx
│   ├── Catalogo.tsx
│   ├── Avaliacoes.tsx
│   ├── Lancamento.tsx
│   ├── Contato.tsx
│   └── NotFound.tsx
├── assets/
│   └── [imagens geradas]
├── lib/
│   └── utils.ts
└── index.css (Design System)
```

## 🎯 Funcionalidades Implementadas

### ✅ Páginas Principais
- **Home**: Hero section, serviços em destaque, depoimentos, CTAs
- **Catálogo**: Lista completa de serviços com preços e descrições
- **Avaliações**: Depoimentos reais com sistema de estrelas
- **Lançamentos**: Novos serviços e promoções
- **Contato**: Múltiplas formas de contato e informações

### ✅ Integrações Preparadas
- **WhatsApp Business**: CTAs com UTM tracking
- **Google Calendar**: Placeholder para agendamento
- **Google Analytics**: Estrutura preparada
- **Redes Sociais**: Links para Instagram e Facebook

### ✅ SEO & Performance
- Meta tags otimizadas
- Lazy loading de imagens
- Code splitting por rotas
- Sitemap e robots.txt
- Structured data preparado

## 🔧 Configurações Necessárias

### 1. WhatsApp Business
Atualize o número nos arquivos:
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/pages/Home.tsx`
- `src/pages/Catalogo.tsx`
- `src/pages/Avaliacoes.tsx`
- `src/pages/Lancamento.tsx`
- `src/pages/Contato.tsx`

Substitua `5511999999999` pelo número real do WhatsApp Business.

### 2. Google Calendar (Opcional)
No arquivo `src/pages/Home.tsx`, substitua:
```javascript
const handleCalendarClick = () => {
  window.open('https://calendar.google.com', '_blank');
};
```

Por sua URL do Google Calendar para agendamentos.

### 3. Redes Sociais
Atualize os links nos componentes Footer e páginas de contato:
- Instagram: `https://instagram.com/cheiasdecharmestudio`
- Facebook: `https://facebook.com/cheiasdecharmestudio`

### 4. E-mail
Atualize o e-mail em `src/pages/Contato.tsx`:
```javascript
window.location.href = 'mailto:contato@cheiasdecharmestudio.com.br';
```

### 5. Endereço e Localização
Atualize as informações de endereço em:
- `src/components/layout/Footer.tsx`
- `src/pages/Contato.tsx`

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Configure redirects para SPAs

### Build Manual

```bash
# Gerar build de produção
npm run build

# Preview do build
npm run preview
```

## 📊 Analytics e Monitoramento

### Google Analytics 4
Adicione seu ID do GA4 em `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Meta Pixel (Facebook)
Para campanhas de marketing digital, adicione o Meta Pixel no `index.html`.

## 🔒 Integrações de Backend (Opcionais)

### Supabase
Para funcionalidades avançadas como:
- Sistema de agendamento completo
- Banco de dados de clientes
- Autenticação de admin
- Newsletter

### EmailJS
Para formulários de contato diretos:
```bash
npm install emailjs-com
```

### Firebase
Para analytics avançados e notificações push.

## 🎨 Customização Visual

### Paleta de Cores
As cores estão definidas em `src/index.css`:
- Primary: `#C0A47F` (Bronze elegante)
- Background: `#FBF9F6` (Off-white suave)
- Foreground: `#4E4A47` (Cinza quente)

### Tipografia
- **Display (Títulos)**: Playfair Display (Google Fonts)
- **Corpo**: Montserrat (Google Fonts)

### Componentes
Todos os componentes seguem o design system definido no `index.css` e `tailwind.config.ts`.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## 🔍 SEO

### Meta Tags Implementadas
- Title tags otimizados
- Meta descriptions
- Open Graph tags
- Twitter Cards
- Canonical URLs

### Structured Data
Preparado para:
- LocalBusiness
- Service
- Review

## 🚨 Próximos Passos

1. **Configurar integrações** (WhatsApp, e-mail, redes sociais)
2. **Adicionar Google Analytics**
3. **Configurar domínio personalizado**
4. **Testar funcionalidades** em diferentes dispositivos
5. **Otimizar imagens** se necessário
6. **Configurar SSL** e segurança

## 📞 Suporte

Para suporte técnico ou customizações adicionais, entre em contato.

---

**Desenvolvido com ❤️ para o Cheias de Charme Studio**