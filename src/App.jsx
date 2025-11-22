import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Portada
    {
      content: (
        <div className="h-full flex flex-col justify-between">
          <div className="flex-1 flex items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <div className="text-[120px] font-light leading-none tracking-tighter text-white">
                  MAZK
                </div>
                <div className="h-1 w-32 bg-white mt-4"></div>
              </div>
              <div className="text-3xl text-gray-400 font-light max-w-2xl leading-relaxed">
                Clona tu voz. Cierra más ventas. <br/>
                Escala sin límites.
              </div>
            </div>
          </div>
          <div className="text-sm text-cyan-400 uppercase tracking-widest">
            Pitch Deck 2025
          </div>
        </div>
      ),
      bg: "bg-black"
    },
    
    // El Problema
    {
      content: (
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-8">El Problema</div>
            <h2 className="text-6xl font-light text-white mb-16 leading-tight">
              Los influencers no<br/>pueden escalar<br/>sin perder autenticidad
            </h2>
          </div>
          
          <div className="grid grid-cols-3 gap-12 mb-16">
            <div className="space-y-3">
              <div className="text-7xl font-extralight text-cyan-400">01</div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Productos high-ticket necesitan confianza personal para cerrar
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-7xl font-extralight text-cyan-400">02</div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Imposible atender 100+ leads diarios manteniendo tu esencia
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-7xl font-extralight text-cyan-400">03</div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Call centers genéricos destruyen la conexión emocional
              </p>
            </div>
          </div>
        </div>
      ),
      bg: "bg-zinc-950"
    },

    // La Solución - Hero
    {
      content: (
        <div className="h-full flex items-center justify-center">
          <div className="text-center space-y-12">
            <div className="text-8xl font-light text-white leading-tight">
              Tu gemelo digital<br/>
              <span className="text-cyan-400">de ventas</span>
            </div>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Mazk clona tu voz y personalidad para cerrar ventas high-ticket mientras tú escalas tu negocio
            </p>
          </div>
        </div>
      ),
      bg: "bg-black"
    },

    // Cómo Funciona
    {
      content: (
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-8">Cómo Funciona</div>
            <h2 className="text-5xl font-light text-white mb-20">Tres pasos. Infinitas ventas.</h2>
          </div>

          <div className="space-y-16 mb-16">
            <div className="border-l-2 border-cyan-400 pl-8 py-4">
              <div className="text-sm text-cyan-400 mb-3 uppercase tracking-wider">Paso 1</div>
              <h3 className="text-3xl font-light text-white mb-4">Clona tu voz y personalidad</h3>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                Configuramos tu gemelo digital con tu voz, estilo y toda la información de tu producto o campaña
              </p>
            </div>

            <div className="border-l-2 border-cyan-400 pl-8 py-4">
              <div className="text-sm text-cyan-400 mb-3 uppercase tracking-wider">Paso 2</div>
              <h3 className="text-3xl font-light text-white mb-4">Contextualiza cada lead</h3>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                Cada llamada se personaliza con la info específica del lead: intereses, objeciones, historial
              </p>
            </div>

            <div className="border-l-2 border-cyan-400 pl-8 py-4">
              <div className="text-sm text-cyan-400 mb-3 uppercase tracking-wider">Paso 3</div>
              <h3 className="text-3xl font-light text-white mb-4">Deja que Mazk cierre</h3>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                La IA analiza respuestas en tiempo real y genera el diálogo perfecto para cada conversación
              </p>
            </div>
          </div>
        </div>
      ),
      bg: "bg-zinc-950"
    },

    // Tecnología
    {
      content: (
        <div className="h-full flex items-center">
          <div className="grid grid-cols-2 gap-24 w-full">
            <div className="space-y-8">
              <div className="text-sm text-gray-500 uppercase tracking-widest">Tecnología</div>
              <h2 className="text-5xl font-light text-white leading-tight">
                IA contextual en<br/>tiempo real
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                No es un script. Es inteligencia que se adapta segundo a segundo a lo que dice tu lead.
              </p>
            </div>

            <div className="space-y-12">
              <div className="border border-gray-800 p-8 hover:border-gray-700 transition-colors">
                <h4 className="text-xl text-white mb-3 font-light">Clonación de voz</h4>
                <p className="text-gray-500">Tu tono, cadencia y forma de hablar. Indistinguible del original.</p>
              </div>

              <div className="border border-gray-800 p-8 hover:border-gray-700 transition-colors">
                <h4 className="text-xl text-white mb-3 font-light">Análisis en vivo</h4>
                <p className="text-gray-500">Evalúa sentimiento, objeciones y señales de compra en cada frase.</p>
              </div>

              <div className="border border-gray-800 p-8 hover:border-gray-700 transition-colors">
                <h4 className="text-xl text-white mb-3 font-light">Personalidad replicada</h4>
                <p className="text-gray-500">Tu estilo de persuasión y manejo de objeciones codificado en IA.</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bg: "bg-black"
    },

    // Para Quién
    {
      content: (
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-8">Para Quién</div>
            <h2 className="text-6xl font-light text-white mb-20 leading-tight">
              Diseñado para<br/>influencers y<br/>vendedores elite
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="bg-zinc-900 p-10 border border-zinc-800">
              <div className="text-6xl font-extralight text-cyan-400 mb-6">01</div>
              <h3 className="text-2xl text-white mb-4 font-light">Influencers</h3>
              <p className="text-gray-500 leading-relaxed">
                Cursos, mentorias y productos de $2K+. Tu audiencia compra de ti, no de un call center.
              </p>
            </div>

            <div className="bg-zinc-900 p-10 border border-zinc-800">
              <div className="text-6xl font-extralight text-cyan-400 mb-6">02</div>
              <h3 className="text-2xl text-white mb-4 font-light">Coaches</h3>
              <p className="text-gray-500 leading-relaxed">
                Tu tiempo vale oro. Replica tu mejor pitch en cientos de llamadas diarias.
              </p>
            </div>

            <div className="bg-zinc-900 p-10 border border-zinc-800">
              <div className="text-6xl font-extralight text-cyan-400 mb-6">03</div>
              <h3 className="text-2xl text-white mb-4 font-light">Equipos B2B</h3>
              <p className="text-gray-500 leading-relaxed">
                Clona a tu top closer. Dale su técnica exacta a todo el equipo.
              </p>
            </div>
          </div>
        </div>
      ),
      bg: "bg-zinc-950"
    },

    // Diferenciación
    {
      content: (
        <div className="h-full flex items-center justify-center">
          <div className="max-w-4xl space-y-16">
            <div className="text-center space-y-6">
              <div className="text-sm text-gray-500 uppercase tracking-widest">Por Qué Mazk</div>
              <h2 className="text-6xl font-light text-white leading-tight">
                No eres un número<br/>
                <span className="text-cyan-400">en un call center</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-16">
              <div>
                <h4 className="text-gray-600 text-sm uppercase tracking-wider mb-4">Otros</h4>
                <ul className="space-y-3 text-gray-500">
                  <li>→ Bots genéricos sin alma</li>
                  <li>→ Scripts rígidos</li>
                  <li>→ Cero personalización</li>
                  <li>→ Tasas de conversión del 2-5%</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white text-sm uppercase tracking-wider mb-4">Mazk</h4>
                <ul className="space-y-3 text-white">
                  <li>→ Tu voz y personalidad exactas</li>
                  <li>→ IA adaptativa en tiempo real</li>
                  <li>→ Cada llamada ultra-personalizada</li>
                  <li>→ Mantienes tu tasa de cierre</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      bg: "bg-black"
    },

    // Visión
    {
      content: (
        <div className="h-full flex items-center justify-center">
          <div className="text-center max-w-4xl space-y-12">
            <div className="space-y-8">
              <p className="text-6xl font-light text-white leading-tight">
                El futuro de las ventas<br/>
                es <span className="italic">personal</span> y <span className="italic">escalable</span>
              </p>
              <p className="text-2xl text-gray-500 font-light">
                Tus leads merecen hablar contigo.<br/>
                Mazk hace que eso sea posible a cualquier escala.
              </p>
            </div>

            <div className="pt-12">
              <div className="inline-flex items-center space-x-4 text-xl text-white border border-white px-10 py-4 hover:bg-white hover:text-black transition-all cursor-pointer group">
                <span className="font-light">Agenda una demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
              <div className="mt-6 text-gray-600">hello@mazk.ai</div>
            </div>
          </div>
        </div>
      ),
      bg: "bg-zinc-950"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main Slide */}
      <div className={`flex-1 ${slides[currentSlide].bg} p-16 transition-all duration-700`}>
        <div className="max-w-[1400px] mx-auto h-full">
          {slides[currentSlide].content}
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-black border-t border-zinc-900 px-16 py-6">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>

          <div className="flex items-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group"
              >
                <div className={`h-[2px] transition-all ${
                  index === currentSlide
                    ? 'bg-white w-12'
                    : 'bg-zinc-800 w-8 group-hover:bg-zinc-600'
                }`}></div>
              </button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;

