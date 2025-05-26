import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface Review {
  id: number;
  platform: 'google' | 'yelp' | 'facebook';
  image: string;
}
const reviews: Review[] = [{
  id: 1,
  platform: 'google',
  image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
}, {
  id: 2,
  platform: 'yelp',
  image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
}, {
  id: 3,
  platform: 'facebook',
  image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
}, {
  id: 4,
  platform: 'google',
  image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
}];
export default function ReviewsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = {
    mobile: 1,
    desktop: 2
  };
  const totalPages = Math.ceil(reviews.length / reviewsPerPage.desktop);
  const nextPage = () => {
    setCurrentPage(prev => (prev + 1) % totalPages);
  };
  const prevPage = () => {
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
  };
  const getCurrentReviews = () => {
    const start = currentPage * reviewsPerPage.desktop;
    const end = start + reviewsPerPage.desktop;
    return reviews.slice(start, end);
  };
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Відгуки <span className="text-amber-500">Клієнтів</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
          Подивіться, що говорять наші клієнти про свій досвід в салоні краси MUZA.
          </p>
        </div>
        <div className="relative">
          {/* Navigation Buttons */}
          <button onClick={prevPage} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-amber-500 hover:bg-amber-600 text-black rounded-full p-2 transition-colors z-10" aria-label="Previous reviews">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={nextPage} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-amber-500 hover:bg-amber-600 text-black rounded-full p-2 transition-colors z-10" aria-label="Next reviews">
            <ChevronRight className="h-6 w-6" />
          </button>
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
            {getCurrentReviews().map(review => <div key={review.id} className="bg-background border border-amber-500/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-[4/3]">
                  <img src={review.image} alt={`${review.platform} Review`} className="w-full h-full object-contain" />
                  <div className="absolute bottom-4 right-4">
                    <img src={`/icons/${review.platform}-logo.png`} alt={`${review.platform} logo`} className="h-8 w-8" />
                  </div>
                </div>
              </div>)}
          </div>
          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {[...Array(totalPages)].map((_, i) => <button key={i} onClick={() => setCurrentPage(i)} className={`w-2 h-2 rounded-full transition-colors ${i === currentPage ? 'bg-amber-500' : 'bg-amber-500/30'}`} aria-label={`Go to review page ${i + 1}`} />)}
          </div>
        </div>
      </div>
    </section>;
}