export interface StoryCardProps {
    videoUrl: string;
    title: string;
    rotation: number;
    translateY?: string;
  }

function StoryCard({ videoUrl, title, rotation, translateY = "0px" }: StoryCardProps) {
  return (
    <div
      className="relative w-72 h-[450px] rounded-3xl overflow-hidden shadow-xl border-2 border-gray-600"
      style={{ 
        transform: `rotate(${rotation}deg) translateY(${translateY})`,
      }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
      
      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
}

export default StoryCard;
