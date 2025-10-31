import { FileText, Code, MessageSquare, Calculator, Award, Users, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCard from "@/components/TestimonialCard";
import styles from "./Placements.module.css";
import BrandGrid from "@/components/BrandGrid";

const careerSupport = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Resume & LinkedIn Profile Building",
    description: "One-on-one resume review, ATS optimization, LinkedIn profile enhancement, GitHub portfolio guidance",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Technical Interview Preparation",
    description: "DSA practice, system design, domain-specific questions, mock interviews with industry professionals",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "HR & Behavioral Interview Coaching",
    description: "STAR method training, communication skills, situational judgment, group discussions",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Aptitude & Reasoning Training",
    description: "Quantitative aptitude, logical reasoning, verbal comprehension, company-specific test prep",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certification Preparation",
    description: "AWS, Azure, GCP certifications. Industry-recognized credentials to boost your resume",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Industry Networking & Guest Lectures",
    description: "Guest lectures from industry leaders, networking events, company visits, hackathons",
  },
];

const hiringPartners = [
  {
    category: "Technology & IT Services",
    companies: "TCS, Infosys, Wipro, HCL, Tech Mahindra, Capgemini, Accenture",
  },
  {
    category: "Product Companies",
    companies: "Google, Microsoft, Amazon, Adobe, Oracle, SAP, Salesforce",
  },
  {
    category: "Startups & Unicorns",
    companies: "Flipkart, Paytm, Ola, Swiggy, Zomato, CRED, Razorpay, Freshworks",
  },
  {
    category: "Consulting Firms",
    companies: "Deloitte, EY, PwC, KPMG, McKinsey Digital, BCG Gamma",
  },
  {
    category: "Banking & Financial Services",
    companies: "HDFC Bank, ICICI Bank, Axis Bank, JPMorgan Chase, Goldman Sachs",
  },
];

const careerOutcomes = [
  {
    program: "AI / Agentic AI Engineering",
    roles: [
      "AI Engineer / Machine Learning Engineer",
      "Generative AI Engineer",
      "Prompt Engineering Specialist",
      "MLOps Engineer",
      "AI Consultant / GenAI Consultant",
    ],
    // salary details removed per content update; retain only skill/role outcomes
  },
  {
    program: "Software Development with GenAI",
    roles: [
      "Full-Stack Developer",
      "Backend Engineer (Java / Spring Boot)",
      "Frontend Engineer (React / Next.js)",
      "DevOps Engineer",
      "Software Development Engineer (SDE)",
    ],
    // salary details removed per content update; retain only skill/role outcomes
  },
  {
    program: "Data Science Engineering",
    roles: [
      "Data Engineer",
      "Data Scientist",
      "Cloud Data Engineer",
      "Analytics Engineer",
      "MLOps Engineer",
    ],
    // salary details removed per content update; retain only skill/role outcomes
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "ML Engineer",
    company: "Leading Tech Company",
    quote: "Within 2 months of completing the AI / Agentic AI Engineering program, I landed my dream role. The hands-on projects and career support were game-changers.",
  },
  {
    name: "Arjun Mehta",
    role: "Full-Stack Developer",
    company: "Unicorn Startup",
    quote: "The Software Development program gave me the full-stack skills I needed. I'm now working on production systems, earning more than I ever imagined.",
  },
  {
    name: "Rahul Desai",
    role: "Data Engineer",
    company: "Top Consulting Firm",
    quote: "Coming from a mechanical engineering background, I was nervous about transitioning to data science. IITGN-CDF made it possible.",
  },
];

const Placements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Career Support & <span className="bg-gradient-primary bg-clip-text text-transparent">Placement Assistance</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              We are committed to your career transformation. Our comprehensive career support services ensure you graduate not just with technical skills, but with the confidence, network, and readiness to succeed in competitive job markets.
            </p>
          </div>
        </div>
      </section>

      {/* Career Support Framework */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Career Support Framework
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six comprehensive pillars supporting your career success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {careerSupport.map((service, index) => (
              <Card 
                key={index}
                className={`hover:shadow-large transition-all duration-300 animate-fade-in ${styles[`delay${index * 100}`]}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <div className="text-primary-foreground">{service.icon}</div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands (Replaces 'Our Hiring Partners') */}
      <BrandGrid
        title="OUR HIRING PARTNERS"
        subtitle="Leading organizations that collaborate with IIT Gandhinagar to empower future-ready talent."
        brands={['Honeywell','Amazon','Tesla','LSE','JP Morgan','EY','Trend Micro','Accenture','Nestle','BlackRock','Deloitte','Apple']}
        cols="grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4"
         bgClass="bg-background"
      />

      {/* Trusted by Leading Companies (matching styling) */}
      <BrandGrid
        title="Trusted by Leading Companies"
        subtitle="Our graduates are trusted by these industry leaders."
        brands={['Honeywell','Amazon','Google','Microsoft','Siemens','Infosys','Accenture','IBM']}
        cols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8"
         bgClass="bg-background"
      />

      {/* Career Outcomes */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Career Outcomes by Program
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {careerOutcomes.map((outcome, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-large transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4 text-lg">{outcome.program}</h3>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Typical Job Roles:</h4>
                      <ul className="space-y-1">
                        {outcome.roles.map((role, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                            <span className="text-primary">•</span>
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Salary details removed — showing skill-based outcomes only */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Placement Commitment */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-large">
              <CardContent className="p-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 text-center">
                  Our Placement Commitment
                </h2>
                <p className="text-muted-foreground mb-6 text-center">
                  While we do not guarantee placements, we are deeply committed to:
                </p>
                <div className="space-y-3">
                  {[
                    "100% Career Support – Every student receives dedicated career coaching",
                    "Industry Connections – Access to our network of hiring partners and alumni",
                    "Continuous Guidance – Support continues even after program completion",
                    "Skill Validation – Rigorous training ensures you meet industry standards",
                    "Confidence Building – Mock interviews and feedback until you're ready",
                  ].map((commitment, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground flex-shrink-0 mt-1">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <p className="text-muted-foreground">{commitment}</p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-foreground font-semibold mt-8">
                  Your success is our success. We invest in your career transformation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Alumni Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`animate-fade-in ${styles[`delay${index * 100}`]}`}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Placements;
