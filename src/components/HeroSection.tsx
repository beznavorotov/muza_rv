import React from 'react';
export default function HeroSection() {
  return <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80')"
    }}></div>
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-400 mb-6">
          MUZA
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-white  mb-4">
        Центр краси
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
        Апаратна та ін’єкційна косметологія, лазер та електроепіляція, догляд, що підкреслює вашу унікальність.
        </p>
        <a href="#services" className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-8 rounded-md transition-colors">
          Всі послуги
        </a>
      </div>
    </section>;
}