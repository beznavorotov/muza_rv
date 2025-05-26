import React from 'react';
import { X } from 'lucide-react';
export interface ServiceDetails {
  id: number;
  name: string;
  images: string[];
  description: string;
  duration: string;
  price: string;
}
interface ServiceModalProps {
  service: ServiceDetails | null;
  onClose: () => void;
}
export default function ServiceModal({
  service,
  onClose
}: ServiceModalProps) {
  if (!service) return null;
  return <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-background max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-xl" onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 bg-background z-10 flex justify-between items-center p-4 border-b border-amber-500/30">
          <h3 className="text-2xl font-semibold text-amber-500">
            {service.name}
          </h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-amber-500/10" aria-label="Close">
            <X className="h-6 w-6 text-amber-500" />
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {service.images.map((image, index) => <div key={index} className="aspect-[4/3] overflow-hidden rounded-md ">
                <img src={image} alt={`${service.name} - image ${index + 1}`} className="w-full h-full object-cover" />
              </div>)}
          </div>
          <div className="space-y-4">
            <p className="text-foreground/90">{service.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-500/10 p-4 rounded-md">
                <h4 className="text-amber-500 font-medium mb-1">Тривалість процедури</h4>
                <p>{service.duration}</p>
              </div>
              <div className="bg-amber-500/10 p-4 rounded-md">
                <h4 className="text-amber-500 font-medium mb-1">Ціна</h4>
                <p>{service.price}</p>
              </div>
            </div>
            <div className="pt-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-6 rounded-md transition-colors" onClick={onClose}>
                Записатись
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
}