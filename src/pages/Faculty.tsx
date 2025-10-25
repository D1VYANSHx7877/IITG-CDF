import { GraduationCap, Users, Award, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Faculty = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Learn from <span className="bg-gradient-primary bg-clip-text text-transparent">World-Class Faculty</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              At IIT Gandhinagar CDF, you'll be taught by a distinguished team of faculty from IIT Gandhinagar and seasoned industry professionals who bring decades of academic excellence, research expertise, and real-world experience.
            </p>
          </div>
        </div>
      </section>

      {/* IIT Gandhinagar Faculty */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                IIT Gandhinagar Faculty
              </h2>
              <p className="text-lg text-muted-foreground">
                Our programs are designed and delivered by professors from IIT Gandhinagar who are recognized leaders in their fields.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="shadow-large">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-4">Academic Excellence</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Ph.D. from top global universities (MIT, Stanford, IITs, IISc)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Published research in premier conferences and journals</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Recipients of national and international research awards</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Active in cutting-edge research in AI, ML, data science, and software engineering</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-large">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-4">Teaching Philosophy</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Emphasis on conceptual clarity and problem-solving</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Project-based, experiential learning approach</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Mentorship-driven guidance for capstone projects</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Accessibility and support beyond classroom hours</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experts */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Industry Expert Instructors
              </h2>
              <p className="text-lg text-muted-foreground">
                Learn from practitioners currently working at leading technology companies
              </p>
            </div>

            <Card className="shadow-large mb-8">
              <CardContent className="p-8">
                <h3 className="font-bold text-foreground mb-4">Our Industry Experts Come From:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">AI/ML Teams</h4>
                    <p className="text-sm text-muted-foreground">Google, Microsoft, Amazon, NVIDIA</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Data Engineering</h4>
                    <p className="text-sm text-muted-foreground">Uber, Netflix, LinkedIn</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Product Development</h4>
                    <p className="text-sm text-muted-foreground">Startups and unicorns</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Consulting</h4>
                    <p className="text-sm text-muted-foreground">McKinsey Digital, Deloitte AI, EY</p>
                  </div>
                </div>

                <h3 className="font-bold text-foreground mb-4">What They Bring:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Real-world insights into production AI systems</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Latest industry tools, frameworks, and best practices</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Networking opportunities and career advice</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Guest lectures on emerging trends and technologies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mentorship Model */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Mentorship Model
              </h2>
              <p className="text-lg text-muted-foreground">
                Every student is assigned a dedicated mentor for personalized guidance
              </p>
            </div>

            <Card className="shadow-large">
              <CardContent className="p-8">
                <h3 className="font-bold text-foreground mb-6 text-center">What Your Mentor Provides:</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Academic Guidance",
                      description: "Support with coursework, projects, and assessments",
                    },
                    {
                      title: "Project Mentorship",
                      description: "One-on-one guidance for capstone projects",
                    },
                    {
                      title: "Career Counseling",
                      description: "Resume reviews, interview prep, job search strategy",
                    },
                    {
                      title: "Industry Insights",
                      description: "Understanding of career paths and skill requirements",
                    },
                    {
                      title: "Personal Support",
                      description: "Encouragement and motivation throughout your journey",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground flex-shrink-0 mt-1">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advisory Panel */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Advisory Panel
            </h2>
            <Card className="shadow-large">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 text-center">
                  Our programs benefit from an advisory panel of 10+ top industry experts from renowned organizations, ensuring:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Curriculum Relevance",
                      description: "Alignment with current industry needs",
                    },
                    {
                      title: "Quality Assurance",
                      description: "Continuous improvement of content and delivery",
                    },
                    {
                      title: "Industry Partnerships",
                      description: "Collaboration with leading companies for placements",
                    },
                    {
                      title: "Thought Leadership",
                      description: "Guidance on emerging trends and technologies",
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculty;
