import React from 'react'

interface MobileMockupProps {
    videoUrl?: string;
    imageUrl?: string;
    classnames?: string;
  }

const MobileMockup: React.FC<MobileMockupProps> = ({ videoUrl, imageUrl, classnames }) => {
    if (!videoUrl && !imageUrl) {
        return null;
      }
    
      return (
        <div className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] ${classnames}`}>
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
            {videoUrl ? (
              <video
                className="object-cover w-full h-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            ) : (
              <img src={imageUrl} alt="Mobile Mockup" className="object-cover w-full h-full" />
            )}
          </div>
        </div>
      )
    }
export default MobileMockup