import { Database, Code, Brain, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "PG Diploma in Data Science Engineering",
    icon: <Database className="w-6 h-6 text-primary-foreground" />,
    description: "Learn to design, implement, and scale data pipelines and machine learning infrastructure.",
    highlights: [
      "AutoML and big data platforms",
      "Cloud data warehousing",
      "MLOps and model deployment",
      "Foundational AI and mathematical skills",
      "Real-world project experience",
    ],
  },
  {
    title: "PG Diploma in Software Development with GenAI and Agentic AI",
    icon: <Code className="w-6 h-6 text-primary-foreground" />,
    description: "Explore generative AI and agentic AI techniques applied to software development life cycles.",
    highlights: [
      "Modern DevOps practices",
      "Cloud-native architectures",
      "AI-augmented software applications",
      "Generative AI integration",
      "Agentic AI systems design",
    ],
  },
  {
    title: "PG Diploma in AI & Agentic AI Engineering",
    icon: <Brain className="w-6 h-6 text-primary-foreground" />,
    description: "Deep dive into advanced AI methodologies, agentic systems, ethical AI, and responsible governance.",
    highlights: [
      "Advanced AI methodologies",
      "Agentic AI systems",
      "Ethical AI principles",
      "Responsible AI governance",
      "Scalable AI solutions",
    ],
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Programs</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Explore IIT Gandhinagar's cutting-edge Postgraduate Diploma Programs designed to build 
              industry-ready skills in Data Science, AI, and Software Development.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {programs.map((program, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-large transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gradient-primary p-8 lg:p-12 flex items-center justify-center">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-large animate-float">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary-foreground rounded-xl flex items-center justify-center">
                        {program.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <CardHeader>
                      <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-base lg:text-lg text-muted-foreground">
                        {program.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <h4 className="font-semibold text-foreground mb-4">Key Highlights:</h4>
                      <ul className="space-y-3 mb-6">
                        {program.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 lg:mt-24 text-center">
            <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 shadow-large animate-scale-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Apply now and take the first step towards building future-ready skills in AI, Data Science, and Software Development.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-large"
              >
                <Link to="/admissions">Apply for a Program</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
