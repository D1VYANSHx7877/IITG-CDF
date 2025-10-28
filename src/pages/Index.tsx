import { ArrowRight, Award, Users, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import Board from "@/components/Board";
import styles from "./Index.module.css";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">
                IIT Gandhinagar Excellence
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              Build Your Future with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Industry-Ready Skills
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your career with IIT Gandhinagar's Postgraduate Diploma
              Programs in Data Science, AI, and Software Development with
              Generative AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 shadow-medium group"
              >
                <Link to="/admissions" className="flex items-center space-x-2">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 hover:bg-muted"
              >
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-6 h-6" />,
                value: "3",
                label: "Programs",
              },
              {
                icon: <Users className="w-6 h-6" />,
                value: "1000+",
                label: "Students",
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                value: "100%",
                label: "Industry Ready",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in stat-delay-${index}`}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <div className="text-primary-foreground">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
              Welcome to IIT Gandhinagar
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              As one of India's premier engineering institutes, IIT Gandhinagar
              offers transformational Postgraduate Diploma programs designed to
              bridge academia with industry needs in the fields of Data Science,
              Artificial Intelligence, and Software Development with Generative
              AI.
            </p>
            <p className="text-lg text-muted-foreground">
              Our programs are structured under the Competency Advancement
              Model, focusing on applied skills, AI-assisted learning, and
              real-world industry relevance.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
              Our Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from three cutting-edge programs designed to equip you with
              the skills needed for tomorrow's tech landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            <ProgramCard
              title="Data Science Engineering"
              description="Learn to design, implement, and scale data pipelines and machine learning infrastructure with hands-on expertise in AutoML, MLOps, and cloud platforms."
              delay={0}
            />
            <ProgramCard
              title="Software Development with GenAI"
              description="Master modern DevOps, cloud-native architectures, and AI-augmented software applications with generative and agentic AI techniques."
              delay={100}
            />
            <ProgramCard
              title="AI & Agentic AI Engineering"
              description="Deep dive into advanced AI methodologies, agentic systems, ethical AI, and responsible governance for scalable AI solutions."
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="bg-muted/30">
        <Board />
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-16 text-center shadow-large animate-scale-in">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-6">
              Advance Your Career Today
            </h2>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join our PG Diploma programs and build expertise that opens doors
              to roles such as Data Scientist, AI Engineer, Cloud Data Engineer,
              and more.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-large group"
            >
              <Link to="/admissions" className="flex items-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
