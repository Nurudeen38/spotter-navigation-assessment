import extensionImage from './extensionImage.png'
interface DriverAppIconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  alt?: string;
}



export default function DriverAppIcon({ 
  width = "24", 
  height = "24", 
  className,
  alt = "driver-app-icon"
}: DriverAppIconProps) {
  return (
    <img 
      className={`icon ${className || ''}`}
      src={extensionImage}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
