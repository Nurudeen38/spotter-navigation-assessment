interface CalculatorIconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  stroke?: string;
}

export default function CalculatorIcon({ 
  width = "18", 
  height = "18", 
  className,
  stroke = "#d8d8d8"
}: CalculatorIconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={stroke} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      role="img"
    >
      <rect width="16" height="20" x="4" y="2" rx="2"></rect>
      <line x1="8" x2="16" y1="6" y2="6"></line>
      <line x1="16" x2="16" y1="14" y2="18"></line>
      <path d="M16 10h.01"></path>
      <path d="M12 10h.01"></path>
      <path d="M8 10h.01"></path>
      <path d="M12 14h.01"></path>
      <path d="M8 14h.01"></path>
      <path d="M12 18h.01"></path>
      <path d="M8 18h.01"></path>
    </svg>
  );
}
