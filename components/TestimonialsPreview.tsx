//components\TestimonialsPreview.tsx
"use client";
import React from "react";
import { Star } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";



interface Testimonial {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface TestimonialsPreviewProps {
    people: Testimonial[];
    rating?: number;
    totalReviews?: number;
    className?: string;
}
{/*<TestimonialsPreview people={people} className="mt-20 lg:mt-32" />*/}
const TestimonialsPreview: React.FC<TestimonialsPreviewProps> = ({
    people,  // Changed from testimonials to people
    rating = 5,
    totalReviews = 1000,
    className,
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${className || ''}`}>     
      <div className="flex">
        {/* Client avatars */}
        <div className="flex -space-x-3">
          <AnimatedTooltip items={people} />
        </div>

        {/* Star rating */}
        <div className="flex items-center ml-4 space-x-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-5 h-5 ${
                index < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Text below */}
      <p className="text-sm text-gray-400">
        Supporting over {totalReviews.toLocaleString()}+ Torbay businesses
      </p>
    </div>
  );
};

export default TestimonialsPreview;
