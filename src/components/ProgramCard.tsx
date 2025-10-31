import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProgramCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
  brochure?: string;
}

const ProgramCard = ({ title, description, icon, delay = 0, brochure }: ProgramCardProps) => {
  return (
    <Card 
      className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      <CardHeader className="relative">
        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft">
          {icon || <GraduationCap className="w-6 h-6 text-primary-foreground" />}
        </div>
        <div className="flex items-center space-x-3">
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          {brochure && (
            <Button 
              asChild
              variant="outline" 
              size="sm"
              className="bg-primary-50 border-primary-100 text-primary hover:bg-primary-100 hover:text-primary-dark group"
            >
              <a
                href={brochure}
                download
                target="_blank"
                rel="noreferrer"
                aria-label={`Download brochure for ${title}`}
                className="flex items-center gap-2"
              >
                <span>Brochure</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="relative">
        <CardDescription className="text-muted-foreground mb-6">
          {description}
        </CardDescription>
        
        {!brochure && (
          <Button 
            asChild 
            variant="ghost" 
            className="group/btn p-0 h-auto font-medium text-primary hover:text-primary-dark hover:bg-transparent"
          >
            <Link to="/programs" className="flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
