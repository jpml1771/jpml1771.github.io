const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg">Redes y Fluidos SAS</h3>
            <p className="text-sm opacity-90">Más de 30 años de excelencia</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm opacity-90">
              © {new Date().getFullYear()} Redes y Fluidos SAS. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
