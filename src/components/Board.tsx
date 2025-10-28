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
    title: "Director, IIT Gandhinagar",
    bio: "Brief one-line bio or affiliation goes here.",
    imgSrc: "./images/Board_1.jpg", // <- change if using Drive or CDN
    linkedin: "",
  },
  {
    id: "amit-prashant",
    name: "Prof. Amit Prashant",
    title: "Dean, IIT Gandhinagar",
    bio: "Brief one-line bio or affiliation goes here.",
    imgSrc: "./images/Board_2.jpg",
  },
  {
    id: "pk-chopra",
    name: "P. K. Chopra",
    title: "Board Member",
    bio: "Brief one-line bio or affiliation goes here.",
    imgSrc: "./images/Board_3.jpg",
  },
  {
    id: "sam-placid",
    name: "Prof. Sam Placid",
    title: "Board Member",
    bio: "Brief one-line bio or affiliation goes here.",
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

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {list.map((m, index) => (
            <div
              key={m.id}
              className={`group overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in ${styles[`delay${index * 100}`]}`}
            >
              <div className="aspect-[4/5] w-full relative">
                <img
                  src={m.imgSrc}
                  alt={`Portrait of ${m.name}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{m.name}</h3>
                  <p className="text-sm text-gray-600">{m.title}</p>
                  {m.bio && <p className="mt-2 text-sm text-gray-500">{m.bio}</p>}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Board;
