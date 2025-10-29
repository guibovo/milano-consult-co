import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  details: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

const ServiceCard = ({ title, description, details, isExpanded, onToggle }: ServiceCardProps) => {
  return (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card border-border"
      onClick={onToggle}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 text-foreground font-montserrat">{title}</CardTitle>
            <CardDescription className="text-muted-foreground font-roboto font-medium">{description}</CardDescription>
          </div>
          <ChevronDown 
            className={`ml-2 h-5 w-5 text-primary transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="animate-fade-in">
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-foreground font-roboto">{detail}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
};

export default ServiceCard;
