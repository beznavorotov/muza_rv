import React, { useEffect, useState, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Головна", href: "/" },
  { name: "Послуги", href: "#services" },
  { name: "Галерея", href: "#gallery" },
  { name: "Про нас", href: "#about" },
  { name: "Команда", href: "#team" },
  { name: "Контакти", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Оптимізований обробник подій прокрутки
  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 10);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Логотип */}
        <a href="/" className="text-2xl font-bold text-amber-500">
          MUZA
        </a>


        {/* Навігація для десктопу */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-amber-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Кнопка мобільного меню */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-4 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-amber-500" />
            ) : (
              <Menu className="h-6 w-6 text-amber-500" />
            )}
          </button>
        </div>
      </div>

      {/* Мобільне меню */}
      <nav
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-sm shadow-md flex flex-col items-center justify-center transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-5 right-5 p-2"
          aria-label="Close menu"
          title="Close menu"
        >
          <X className="h-6 w-6 text-amber-500" />
        </button>

        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground text-xl hover:text-amber-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
