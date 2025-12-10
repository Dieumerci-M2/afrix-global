export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* LOGO */}
          <div className="flex flex-col items-start">
            <img
              src="./public/afrix.png"
              alt="Afrix Global"
              className="w-28 mb-4"
            />
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Afrix Global. Tous droits réservés.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Navigation avec Link */}
          <div className="mb-6 md:mb-0">
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="hover:underline">Mensu</Link>
              <Link href="#" className="hover:underline">Adoptat</Link>
              <Link href="#" className="hover:underline">Équipe</Link>
              <Link href="#" className="hover:underline">services</Link>
              <Link href="#" className="hover:underline">Integration</Link>
              <Link href="#" className="hover:underline">Ring</Link>
              <Link href="#" className="hover:underline">Contact</Link>
            </nav>
          </div>
          
          {/* Adresse */}
          <div className="text-right">
            <h3 className="font-bold mb-2">Adresse</h3>
            <address className="not-italic">
              <p>Fonds de L&apos;Institute</p>
              <p>Installe, Gains</p>
              <p>RDC</p>
            </address>
            <p className="mt-2">Installation génération</p>
          </div>
        </div>
      </div>
    </footer>
  );
}