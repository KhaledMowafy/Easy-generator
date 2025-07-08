
import { Star } from "lucide-react"; 

type ImageCardProps = {
  image: string;
  title: string;
  description: string;
  rating: number; // 0 to 5
};

export const InformationPage = ({ image, title, description, rating }: ImageCardProps) => {
  const MAX_RATING = 5;

  return (
    <div className="flex items-center justify-center bg-white rounded-lg shadow  w-full">
      {/* Image */}
      <img src={image} alt={title} className="object-cover rounded-lg w-[40%]" />

      {/* Text Section */}
      <div className="flex flex-col justify-center">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{title}</h2>

        {/* Rating */}
        <div className="flex items-center mb-3">
          {[...Array(MAX_RATING)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "text-yellow-500" : "text-gray-300"
              } fill-current`}
              fill={i < rating ? "currentColor" : "none"}
            />
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};
