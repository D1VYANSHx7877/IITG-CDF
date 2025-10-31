// src/components/Board.tsx
import React from "react";
import styles from "./Board.module.css";

type Member = {
  id: string;
  name: string;
  title: string;
  bio?: string;
  imgSrc: string; // absolute URL or relative path (e.g. "/images/rajat.jpg")
  linkedin?: string;
  email?: string;
};

const members: Member[] = [
  {
    id: "rajat-moona",
    name: "Prof. Rajat Moona",
    title: "Director of IIT Gandhinagar",
    bio: "Former Director General of CDAC, known for his work in secure computing and governance",
    imgSrc: "./images/Board_1.jpg", // <- change if using Drive or CDN
    linkedin: "",
  },
  {
    id: "amit-prashant",
    name: "Prof. Amit Prashant",
    title: "Dean of External Relations",
    bio: "Expert in geotechnical engineering with a PhD from University of Tennessee",
    imgSrc: "./images/Board_2.jpg",
  },
  {
    id: "pk-chopra",
    name: "P. K. Chopra",
    title: "Registrar, IIT Gandhinagar",
    bio: "Director at IITGN Innovation Center",
    imgSrc: "./images/Board_3.jpg",
  },
  {
    id: "sam-placid",
    name: "Prof. Sam Placid",
    title: "Advisor, IITGN CAA",
    bio: "Leading industry-aligned programs in GenAI and Data Science",
    imgSrc: "./images/Board_4.jpg",
  },
];

export const Board: React.FC<{ membersList?: Member[] }> = ({ membersList }) => {
  const list = membersList ?? members;

  return (
    <section aria-labelledby="board-heading" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 id="board-heading" className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Board of Directors
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Distinguished leaders and experts guiding our program towards excellence in technology education.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {list.map((m, index) => (
            <div
              key={m.id}
              className={`group bg-card shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in ${styles[`delay${index * 100}`]} p-6 text-center rounded-lg`}
            >
              <div className="mb-4 mx-auto">
                <img
                  src={m.imgSrc}
                  alt={`Portrait of ${m.name}`}
                  className="rounded-full object-cover w-[120px] h-[120px] mx-auto shadow-md transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-1">{m.name}</h3>
                <p className="text-sm text-primary mb-2">{m.title}</p>
                {m.bio && <p className="text-sm text-muted-foreground">{m.bio}</p>}
                <div className="mt-3 flex items-center justify-center space-x-3">
                  {m.linkedin && (
                    <a href={m.linkedin} className="text-primary hover:underline text-sm">
                      LinkedIn
                    </a>
                  )}
                  {m.email && (
                    <a href={`mailto:${m.email}`} className="text-muted-foreground hover:underline text-sm">
                      Email
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Board;
