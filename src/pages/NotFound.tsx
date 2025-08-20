import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <h1 className="font-display text-6xl font-bold text-primary">404</h1>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Página Não Encontrada
          </h2>
          <p className="text-muted-foreground">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="space-y-3">
          <Link 
            to="/" 
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary-hover transition-colors"
          >
            Voltar ao Início
          </Link>
          <div className="text-center">
            <Link 
              to="/contato" 
              className="text-primary hover:text-primary-hover transition-colors text-sm"
            >
              Entre em contato se precisar de ajuda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
