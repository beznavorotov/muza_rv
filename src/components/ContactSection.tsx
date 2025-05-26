import React, { useEffect, createElement } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
export default function ContactSection() {
  // Dynamically import Leaflet CSS
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    link.integrity = 'sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==';
    link.crossOrigin = '';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  // Sample location
  const position = [26.270255811992136, 50.61165410247736]; // New York City coordinates
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-500">
            Контакти
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
          Ми будемо раді Вас бачити. Завітайте до нашого салону або запишіться на прийом.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-500 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Адреса</h3>
                <p className="text-foreground/80">
               м. Рівне, вулиця Степана Бандери, 54
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-amber-500 p-3 rounded-full">
                <Phone className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-foreground/80">+38 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-amber-500 p-3 rounded-full">
                <Mail className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-foreground/80">info@muza.rv.ua</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-amber-500 p-3 rounded-full">
                <Clock className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">години прийому</h3>
                <p className="text-foreground/80">Пн-Пт: 9.00 - 18.00</p>
                <p className="text-foreground/80">Сб: 9.00 - 16.00</p>
                <p className="text-foreground/80">Нд: по запису</p>
              </div>
            </div>
          </div>
          <div className="h-[400px] md:h-[400px] rounded-lg overflow-hidden">
            {typeof window !== 'undefined' && <MapContainer center={position as [number, number]} zoom={13} style={{
            height: '100%',
            width: '100%'
          }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
                <Marker position={position as [number, number]}>
                  <Popup>MUZA Beauty Salon</Popup>
                </Marker>
              </MapContainer>}
          </div>
        </div>
      </div>
    </section>;
}