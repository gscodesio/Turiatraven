"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "The Best Time to See the Great Migration in Kenya",
    category: "Guides",
    image: "/kenya.jpg",
  },
  {
    id: 2,
    title: "Solo Female Travel in Southeast Asia: A Complete Safety Guide",
    category: "Advice",
    image: "/bali.jpg",
  },
  {
    id: 3,
    title: "Why Azerbaijan Should Be on Your Travel List",
    category: "Destinations",
    image: "/hero.jpg",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="py-32 bg-background-alt text-text-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-primary">
              The Travel <span className="italic text-text-secondary">Journal</span>
            </h2>
          </div>
          <Link 
            href="#"
            className="text-sm uppercase tracking-widest border-b border-text-primary pb-1 hover:text-champagne hover:border-champagne transition-colors"
          >
            Read All Stories →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="group cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative h-[400px] w-full overflow-hidden mb-8">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex-grow">
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">
                  {article.category}
                </p>
                <h4 className="text-2xl font-primary mb-6 group-hover:text-champagne transition-colors">
                  {article.title}
                </h4>
              </div>
              <span className="text-xs uppercase tracking-widest text-text-secondary group-hover:text-champagne transition-colors mt-auto">
                Read Story →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
