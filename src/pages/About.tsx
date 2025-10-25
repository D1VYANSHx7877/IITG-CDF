import { Building2, Target, Heart, Users, Award, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const missions = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Deliver Advanced Training",
    description: "Programs in AI, Data Science, Software Development, and emerging technologies",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Foster Academia-Industry Collaboration",
    description: "Bridge the gap between academic knowledge and industry requirements",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Enable Lifelong Learning",
    description: "Provide reskilling and upskilling opportunities through IIT Gandhinagar's academic rigor",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Promote Ethical AI Development",
    description: "Emphasize responsible, transparent, and impactful use of Artificial Intelligence",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Support National Skill Development",
    description: "Align with the Skill India Mission to create a readily deployable talent pool",
  },
];

const whyChooseUs = [
  {
    title: "IIT Gandhinagar Pedigree",
    description: "Benefit from the academic excellence, research culture, and innovation ecosystem of one of India's premier institutes.",
  },
  {
    title: "Industry-Academia Bridge",
    description: "Our programs are co-designed with industry leaders, ensuring curriculum relevance and employability.",
  },
  {
    title: "Applied Learning Focus",
    description: "50-60% of program hours devoted to hands-on labs, projects, capstones, and real-world problem-solving.",
  },
  {
    title: "Emerging Technology Specialization",
    description: "Deep focus on Generative AI, Agentic AI, LLMs, Cloud-Native Development, MLOps, and Data Engineering.",
  },
  {
    title: "Residential Immersion",
    description: "Six-month intensive, on-campus programs creating a collaborative learning environment and peer network.",
  },
  {
    title: "Career Readiness",
    description: "Comprehensive placement support including resume building, mock interviews, certification prep, and industry connections.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">IIT Gandhinagar CDF</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              The IIT Gandhinagar Competency Development Foundation (IITGN-CDF) is a Section 8 Company incorporated under the Companies Act, 2013, established on 27th November 2024 with its registered office at the IIT Gandhinagar Campus.
            </p>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-4xl mx-auto shadow-large">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Building2 className="w-8 h-8 text-primary" />
                <span>Legal & Institutional Framework</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <strong className="text-foreground">CIN:</strong> U85499GJ2024NPL156655
              </div>
              <div>
                <strong className="text-foreground">Incorporation Date:</strong> 27th November 2024
              </div>
              <div>
                <strong className="text-foreground">Registered Address:</strong><br />
                Room No. 101, Academic Block No. 03<br />
                IIT Gandhinagar Campus, Near Palaj Village<br />
                Gandhinagar – 382355, Gujarat, India
              </div>
              <div>
                <strong className="text-foreground">Banking Partner:</strong> Canara Bank, IIT Gandhinagar Branch
              </div>
              <div>
                <strong className="text-foreground">Statutory Auditor:</strong> M/s Deora Maheshwari & Co., Chartered Accountants, Ahmedabad
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create a globally recognized platform for competency-based learning, enabling professionals and students to drive innovation and excellence in technology and engineering — contributing to India's transformation into a knowledge-driven economy.
              </p>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">Our Mission</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {missions.map((mission, index) => (
                  <Card 
                    key={index}
                    className="hover:shadow-large transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                        <div className="text-primary-foreground">{mission.icon}</div>
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{mission.title}</h3>
                      <p className="text-muted-foreground text-sm">{mission.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Governance and Leadership
            </h2>
            <Card className="shadow-large">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Board of Directors</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      RM
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Prof. Rajat Moona</h4>
                      <p className="text-sm text-muted-foreground">Chairman, IITGN-CDF</p>
                      <p className="text-sm text-muted-foreground">Director, IIT Gandhinagar</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      AP
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Prof. Amit Prashant</h4>
                      <p className="text-sm text-muted-foreground">Director</p>
                      <p className="text-sm text-muted-foreground">Dean/Senior Faculty, IIT Gandhinagar</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      PC
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Shri P. K. Chopra</h4>
                      <p className="text-sm text-muted-foreground">Director</p>
                      <p className="text-sm text-muted-foreground">Senior Administrator & Advisor</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-muted/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Advisory and Operational Support:</strong> Shri Nirmal Jha, Shri Sam Placid, Shri Anand Pandey
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why IITGN-CDF */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose IITGN-CDF?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-large transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-3 text-lg">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Our Commitment to Excellence
            </h2>
            <Card className="shadow-large">
              <CardContent className="p-8 space-y-4">
                {[
                  { title: "Academic Integrity", desc: "Maintaining the highest standards of teaching and evaluation" },
                  { title: "Student Success", desc: "Providing mentorship, career guidance, and lifelong learning opportunities" },
                  { title: "Innovation Leadership", desc: "Staying at the forefront of emerging technologies and pedagogical methods" },
                  { title: "Ethical Responsibility", desc: "Promoting responsible AI development and data ethics" },
                  { title: "Social Impact", desc: "Contributing to national skill development and technological advancement" },
                ].map((commitment, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{commitment.title}</h4>
                      <p className="text-muted-foreground text-sm">{commitment.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
