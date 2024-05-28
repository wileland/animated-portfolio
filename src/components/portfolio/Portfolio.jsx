import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "MVC Tech Blog",
    img: "https://images.pexels.com/photos/24415132/pexels-photo-24415132.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts, built with the MVC paradigm using Node.js, Express, Sequelize, and Handlebars.",
    repo: "https://github.com/wileland/mvc.tech.bl0g",
  },
  {
    id: 2,
    title: "Employee Tracker App",
    img: "https://images.pexels.com/photos/5816293/pexels-photo-5816293.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A command-line application built with Node.js, leveraging Inquirer for interactive prompts and MySQL2 for database management. It allows business owners to effectively oversee and manage their company's organizational structure.",
    repo: "https://github.com/wileland/empl0yee.tr4cker",
  },
  {
    id: 3,
    title: "Jingle Judge: Naughty or Nice Edition",
    img: "https://images.pexels.com/photos/383646/pexels-photo-383646.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A full-stack web application designed for managing Santa's list of who's naughty and nice. It allows users to create and manage accounts, categorize actions, and assign actions to children.", 
    repo: "https://github.com/wileland/Jingle-Judge",
  },
  {
    id: 4,
    title: "Pokémon Team Manager",
    img: "https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A hypothetical team-building application that allows Pokémon trainers to set up, save, and evaluate their Pokémon teams. Users can input their current team, save team configurations as presets, and even compare their teams against others to see which would hypothetically win in a battle.",
    repo: "https://github.com/Cbaca4/project01-game-picker",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.repo} target="_blank" rel="noopener noreferrer">
              <button>View Repo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
