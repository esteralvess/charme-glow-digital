import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button-premium';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/catalogo', label: 'Catálogo' },
    { path: '/avaliacoes', label: 'Avaliações' },
    { path: '/lancamento', label: 'Lançamento' },
    { path: '/contato', label: 'Contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário no Cheias de Charme Studio.');
    const whatsappUrl = `https://wa.me/5511999999999?text=${message}&utm_source=website&utm_medium=header&utm_campaign=agendamento`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex flex-col">
              <span className="font-display text-xl lg:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Cheias de Charme
              </span>
              <span className="font-sans text-xs lg:text-sm text-muted-foreground tracking-wider uppercase">
                Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.path) 
                    ? "text-primary" 
                    : "text-foreground/80"
                )}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button 
              variant="cta" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="group"
            >
              <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Agendar Horário
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border/60">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-primary",
                    isActive(item.path) 
                      ? "text-primary" 
                      : "text-foreground/80"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMenuOpen(false);
                }}
                className="mt-4 w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                Agendar Horário
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;