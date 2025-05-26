import React from "react";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Блок логотипу та соцмереж */}
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">MUZA</h3>
            <p className="text-white/70 mb-4">
            Де краса зустрічається з розкішшю. Відчуйте найкращі косметичні процедури з нашою командою експертів.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-amber-500 p-2 rounded-full hover:bg-amber-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-black" />
              </a>
              <a
                href="#"
                className="bg-amber-500 p-2 rounded-full hover:bg-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-black" />
              </a>
              <a
                href="#"
                className="bg-amber-500 p-2 rounded-full hover:bg-amber-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-black" />
              </a>
            </div>
          </div>

          {/* Блок навігаційних посилань */}
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Навігація</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-white/70 hover:text-amber-500 transition-colors"
                >
                  Головна
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-amber-500 transition-colors"
                >
                  Послуги
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white/70 hover:text-amber-500 transition-colors"
                >
                  Галерея
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-amber-500 transition-colors"
                >
                  Про нас
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-white/70 hover:text-amber-500 transition-colors"
                >
                  Команада
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-amber-500 transition-colors"
                >
                  Контакти
                </a>
              </li>
            </ul>
          </div>

          {/* Блок контактів */}
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-white/70">
                <Phone className="h-5 w-5 text-amber-500" />
                <a href="tel:+1234567890" className="hover:text-amber-500">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3 text-white/70">
                <Mail className="h-5 w-5 text-amber-500" />
                <a href="mailto:info@muza.com" className="hover:text-amber-500">
                  info@muza.rv.ua
                </a>
              </li>
              <li className="flex items-center space-x-3 text-white/70">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span>м. Рівне, вулиця Степана Бандери, 54</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижня частина */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/50">
          <p>
            &copy; {new Date().getFullYear()} MUZA Beauty Salon. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
