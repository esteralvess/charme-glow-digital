import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button-premium';
import logo from '@/assets/logo.png';


const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços do Cheias de Charme Studio.');
    const whatsappUrl = `https://wa.me/5511958525413?text=${message}&utm_source=website&utm_medium=footer&utm_campaign=contato`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/cheiasdecharme.unhas', '_blank');
  };

  {/* const handleFacebookClick = () => {
    window.open('https://facebook.com/cheiasdecharmestudio', '_blank');
  };*/}

  return (
    <footer className="bg-secondary/30 border-t border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center group">
              <img src={logo} alt="Cheias de Charme Studio" className="h-10 w-auto" />
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Studio em Suzano-SP, especializado em manicure e estética. 
              Realçamos sua elegância natural com cuidado personalizado.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Navegação
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/catalogo" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Catálogo de Serviços
              </Link>
              <Link to="/avaliacoes" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Avaliações
              </Link>
              <Link to="/empresas" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Empresas
              </Link>
              <Link to="/atendimento-express" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Atendimento Express
              </Link>
              <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Praça João Pessoa, 59 - Centro, Suzano - SP, sala 8
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Seg-Sáb: 9h às 18h
                </span>
              </div>
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0 group-hover:animate-pulse" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Social & CTA */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Redes Sociais
            </h3>
            <div className="flex space-x-3">
              <button
                onClick={handleInstagramClick}
                className="p-2 bg-accent hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
              {/* <button
                onClick={handleFacebookClick}
                className="p-2 bg-accent hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>*/}
            </div>
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full mt-4"
            >
              <Phone className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/60 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Cheias de Charme Studio. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-sm">
              Suzano - SP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;