import React from 'react';
import { Cloud } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="relative group">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:animate-glow transition-all duration-300">
        <Cloud className="w-6 h-6 text-darker" />
      </div>
    </div>
  );
};

export default Logo;