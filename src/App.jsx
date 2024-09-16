import React, { useEffect, useState } from "react";
import { FaGolang } from "react-icons/fa6";

import {
  FaChalkboardTeacher,
  FaJsSquare,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaSun,
  FaMoon,
  FaGraduationCap,
  FaUsers,
  FaArrowUp,
  FaPython,
  FaJava,
  FaHtml5,
  FaDatabase,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaSwift,
  FaAndroid,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiFastapi,
  SiSpringboot,
  SiCplusplus,
  SiKotlin,
} from "react-icons/si";

import { motion, AnimatePresence } from "framer-motion";
import profileImage from "./assets/profile.jpg";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDark(storedTheme === "dark");
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const education = [
    {
      institution: "Scaler School Of Technology",
      degree: "Bachelor + Masters of Science in Computer Science",
      duration: "July 2023 -- July 2027",
      gpa: "CGPA - 8.4",
    },
    {
      institution: "Birla Institute Of Technology And Science",
      degree: "Bachelor of Science in Computer Science",
      duration: "July 2023 -- July 2026",
      gpa: "",
    },
  ];

  const achievements = [
    {
      title: "Expert @Codeforces",
      description: "Max Rating 1651, August 2023 - Present",
      link: "https://codeforces.com/profile/sojabhai",
    },
    {
      title: "Atcoder Beginner Contest 344",
      description: "Achieved All India Rank 20 and World Rank 549",
      link: "https://atcoder.jp/users/sojabhai/history/share/abc344",
    },
    {
      title: "Codeforces Round 952",
      description: "Achieved All India Rank 14 and World Rank 888",
      link: "https://codeforces.com/contest/1985/standings?list=10c69ccc74e15f5123aa2f713d34781f",
    },
    {
      title: "Codeforces Round 939",
      description: "Achieved All India Rank 15 and World Rank 633",
      link: "https://codeforces.com/contest/1956/standings/page/4",
    },
    {
      title: "ICPC Regionals",
      description:
        "Qualified and secured Rank 75 in ICPC Chennai Asia West Regionals",
      link: "https://icpc.global/ICPCID/9SLVOUASTIQI",
    },
  ];

  const projects = [
    {
      title: "Booky - Book Sharing Micro-service",
      technologies: "Golang, Go Gin, MongoDB",
      date: "Dec. 2023",
      link: "https://github.com/varundeepsaini/booky",
      description: [
        "Developed a backend microservice for sharing books.",
        "Enabled users to add, browse, borrow, and return books using RESTFul APIs.",
        "Utilised Go Gin Library to route the APIs to the respective Endpoints.",
      ],
    },
    {
      title: "SQLxPython (Database Management System)",
      technologies: "Python, Tkinter, SQLite3",
      date: "Aug. 2023",
      link: "https://github.com/varundeepsaini/SQLxPython",
      description: [
        "Created a desktop application for database operations.",
        "Implemented Add Table, Add Row, Delete Table, Delete Row, and Display Tables functions using SQLite3.",
        "Provided users with the option to write custom SQL queries.",
      ],
    },
    {
      title: "Multi-Threaded Proxy Server",
      technologies: "C, Linux",
      date: "Jul. 2024",
      link: "https://github.com/varundeepsaini/MultiThreadedProxyServerClient",
      description: [
        "Developed a multi-threaded proxy server in C, enhancing request handling and data security.",
        "Implemented semaphore synchronization and LRU caching to optimize performance and resource management.",
        "Utilised Mutex Locks to ensure thread-safe access to the threads.",
      ],
    },
    {
      title: "Competitive Programming Discord Bot",
      technologies: "Python, BeautifulSoup, Discord API, PyCord",
      date: "Sep. 2023",
      link: "https://github.com/varundeepsaini/discordbot",
      description: [
        "Developed a competitive programming Discord bot for the College CP Club.",
        "Utilized web scraping to fetch upcoming contests and user profile data from 4+ different websites.",
        "Implemented a daily streak feature for each user, using databases and scraping to verify submissions.",
      ],
    },
    {
      title: "AlgoVis",
      technologies: "HTML, CSS, JavaScript, Data Structures, Algorithms",
      date: "Sep. 2023",
      link: "https://varundeepsaini.github.io/AlgoVis/",
      description: [
        "Developed an interactive web application for visualising common algorithms.",
        "Implemented Dijkstra, A* and Depth First Search Graph algorithms on a randomly generated maze.",
        "Enabled visualization of sorting algorithms - Merge Sort, Quick-Sort and Bubble Sort on a random array.",
      ],
    },
  ];

  const technicalSkills = {
    languages: [
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "Java", icon: <FaJava className="text-blue-700" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
      { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
      { name: "SQL", icon: <FaDatabase className="text-blue-600" /> },
      { name: "Golang", icon: <FaGolang className="text-teal-500" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },
      { name: "Swift", icon: <FaSwift className="text-orange-400" /> },
    ],
    technologies: [
      { name: "Go Gin", icon: <FaGolang className="text-teal-500" /> },
      {
        name: "Android Studio",
        icon: <FaAndroid className="text-green-600" />,
      },
      { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
      { name: "BitBucket", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Linux", icon: <FaLinux className="text-green-700" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "PyQT", icon: <FaPython className="text-blue-500" /> },
      { name: "Tkinter", icon: <FaPython className="text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-blue-400" />,
      },
      { name: "Pandas", icon: <FaPython className="text-blue-500" /> },
      { name: "Numpy", icon: <FaPython className="text-blue-500" /> },
      { name: "Seaborn", icon: <FaPython className="text-blue-500" /> },
      { name: "SwiftUI", icon: <FaSwift className="text-orange-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Express.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "SpringBoot", icon: <SiSpringboot className="text-green-600" /> },
    ],
  };

  const leadership = [
    {
      title: "NlogN - The Competitive Programming Club",
      role: "President",
      duration: "August 2023 -- Present",
      institution: "Scaler School Of Technology",
      responsibilities: [
        "Lead the competitive programming club of SST with 30+ members to promote the art of CP.",
        "Organized sessions/workshops by collaborating with various YouTubers and educators.",
      ],
    },
  ];

  const coursework = [
    "Data Structures",
    "Shell Scripting",
    "Web Development",
    "Linear Algebra",
    "Discrete Maths",
    "OOPS",
    "Probability and Statistics",
    "Business Problem Solving",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "Communication",
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="max-w-4xl mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Varun Deep Saini
          </h1>
          <div className="space-x-4 hidden md:block">
            <a
              href="#education"
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Education
            </a>
            <a
              href="#achievements"
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Achievements
            </a>
            <a
              href="#projects"
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#leadership"
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Leadership
            </a>
          </div>
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none transition-colors duration-300"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-4 font-sans pt-20">
        <motion.div
          className="text-center my-8 p-6 rounded-lg bg-gradient-to-r from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-900"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={profileImage}
            alt="Varun Deep Saini"
            loading="lazy"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 dark:border-blue-400"
          />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Varun Deep Saini
          </h1>
          <div className="flex justify-center space-x-4 mt-2 text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <FaPhone className="mr-1" /> +917840993353
            </div>
            <a
              href="mailto:deepsainivarun@gmail.com"
              className="flex items-center hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaEnvelope className="mr-1" /> deepsainivarun@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/varundeepsaini"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin className="mr-1" /> LinkedIn
            </a>
            <a
              href="https://github.com/varundeepsaini"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub className="mr-1" /> GitHub
            </a>
          </div>
        </motion.div>

        <section id="education" className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-1 text-gray-900 dark:text-gray-100">
            <FaGraduationCap className="mr-2 text-blue-600 dark:text-blue-400" />
            Education
          </h2>
          <div className="mt-4 space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {edu.institution}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.degree} ({edu.duration})
                </p>
                {edu.gpa && (
                  <p className="text-gray-600 dark:text-gray-400">{edu.gpa}</p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="achievements" className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-1 text-gray-900 dark:text-gray-100">
            <FaChalkboardTeacher className="mr-2 text-blue-600 dark:text-blue-400" />
            Achievements
          </h2>
          <ul className="mt-4 list-disc list-inside space-y-2">
            {achievements.map((ach, index) => (
              <motion.li
                key={index}
                className="text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <strong>{ach.title}</strong>
                </a>{" "}
                | <em>{ach.description}</em>
              </motion.li>
            ))}
          </ul>
        </section>

        <section id="projects" className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-1 text-gray-900 dark:text-gray-100">
            💻 Projects
          </h2>
          <div className="mt-4 space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 bg-gray-50 dark:bg-gray-800 rounded-md p-4 shadow-md"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <h3 className="text-xl font-bold flex flex-wrap text-gray-800 dark:text-gray-200">
                  {project.title}{" "}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    GitHub
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.technologies} | {project.date}
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-1 text-gray-900 dark:text-gray-100">
            🛠️ Technical Skills
          </h2>
          <div className="mt-4 flex justify-items-center gap-6">
            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                Languages:
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {technicalSkills.languages.map((lang, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {lang.icon}
                    <span className="mt-2 text-sm">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                Technologies/Frameworks:
              </h3>
              <div className="grid grid-cols-6 gap-1">
                {technicalSkills.technologies.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {tech.icon}
                    <span className="mt-2 text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="leadership" className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-1 text-gray-900 dark:text-gray-100">
            <FaUsers className="mr-2 text-blue-600 dark:text-blue-400" />
            Leadership / Extracurricular
          </h2>
          <div className="mt-4 space-y-4">
            {leadership.map((lead, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {lead.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {lead.role} ({lead.duration}), {lead.institution}
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {lead.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-1 text-gray-900 dark:text-gray-100">
            📚 Relevant Coursework
          </h2>
          <div className="mt-4 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2">
            <ul className="list-disc list-inside space-y-1">
              {coursework.map((course, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-400">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="text-center mt-8 text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Varun Deep Saini. All rights reserved.
        </footer>
      </div>

      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            aria-label="Scroll to Top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
