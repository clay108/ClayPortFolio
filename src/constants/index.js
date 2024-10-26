export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Himanshu was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Himanshu’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Himanshu. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Himanshu was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'PostNChat - Connect & Converse',
    desc: 'A dynamic social media platform that combines real-time chatting with the ability to share posts, fostering community interactions and seamless communication.',
    subdesc:
      'PostNchat is a real-time messaging application built with React, Redux, Axios for the frontend, and Node.js, Express.js, Socket.io for the backend, using MongoDB for data storage.',
    href: 'https://github.com/clay108/PostNChat',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/ProjectLogo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Redux',
        path: 'assets/redux.png',
      },
      {
        id: 3,
        name: 'CSS',
        path: '/assets/css.png',
      },
      {
        id: 4,
        name: 'Node.Js',
        path: '/assets/nodejs.png',
      },
      {
        id: 5,
        name: 'Express.Js',
        path: '/assets/express.png',
      },
      {
        id: 6,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 7,
        name: 'socketIo',
        path: '/assets/socketio.png',
      },
      
    ],
  },
  {
    title: 'StoryNest - Crafting Your Narrative',
    desc: 'A full-stack blogging platform where users can create, update, delete, and view blog posts with images and text using the  MERN (MongoDB, Express, React, Node.js) stack. This project enables users to publish blogs with images, view other blogs, and manage their own posts.',
    // subdesc:
    //   'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://blog-sphere-frontend.vercel.app',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/StoryNestLogo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Redux',
        path: 'assets/redux.png',
      },
      {
        id: 3,
        name: 'CSS',
        path: '/assets/css.png',
      },
      {
        id: 4,
        name: 'Node.Js',
        path: '/assets/nodejs.png',
      },
      {
        id: 5,
        name: 'Express.Js',
        path: '/assets/express.png',
      },
      {
        id: 6,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 7,
        name: 'socketIo',
        path: '/assets/socketio.png',
      },
    ],
  },
  {
    title: 'Botany Guard - Disease Detector',
    desc: 'Welcome to the Plant Disease Detection Generalization APP! Here, I embark on a journey to revolutionize agriculture through the power of deep learning. My project is dedicated to creating a robust, accessible, and efficient solution for identifying plant diseases from leaf images. With a focus on leveraging state-of-the-art convolutional neural network (CNN) architectures and transfer learning techniques, we aim to empower farmers worldwide with a tool that enables early disease detection, thus contributing to sustainable agriculture and food security.',
    
    href: 'https://huggingface.co/spaces/clay108/BotaniGuard',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/BotaniGuard3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'CNN',
        path: '/assets/cnn1.png',
      },
      {
        id: 2,
        name: 'Jupyter',
        path: '/assets/jupyter.png',
      },
      
    ],
  },
  {
    title: 'UniSync - Campus Connect',
    desc: 'The UniSync is a comprehensive web-based application designed to efficiently manage various aspects of a college environment, facilitating smooth interactions between students, instructors, and administrative staff. This project is intended to streamline and enhance the administrative and academic processes within a college setting.',
    subdesc:
      'UniSync is a comprehensive college management system that enables department, instructor, and course management with secure user authentication and flexible student enrollment across multiple courses.',
    href: 'https://github.com/clay108/UniSync-',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/unisync4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'PHP',
        path: '/assets/php.png',
      },
      {
        id: 5,
        name: 'MySQL',
        path: '/assets/mysql.png',
      },
    ],
  },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Fullstack Development',
    // pos: 'Lead Web Developer',
    // duration: '2022 - Present',
    title: "As a full-stack developer, I have experience building complete web applications from front to back, handling both client-side and server-side development. I have developed a variety of projects that demonstrate my ability to create scalable and efficient solutions. You can check out my work on GitHub for a deeper look into the applications I’ve built.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
       name: 'Frontend Development',
    // pos: 'Web Developer',
    // duration: '2020 - 2022',
    title: ["As a frontend developer, I specialize in building dynamic and responsive user interfaces using technologies like React.js, Redux, and Next.js. My expertise also includes styling frameworks such as Bootstrap, Material UI, and Tailwind CSS, ensuring visually appealing and mobile-friendly designs. You can view my portfolio of projects on GitHub, highlighting my experience in crafting modern web  app.",
      "\n\nSkills:\n• ReactJS\n• Redux\n• NextJs\n• Material UI\n• HTML\n• CSS\n• JavaScript\n• Bootstrap\n• Tailwind CSS"],
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Backend Development',
    // pos: 'Junior Web Developer',
    // duration: '2019 - 2020',
    title: ["As a backend developer, I build robust and scalable server-side applications using Node.js, Express.js, and GraphQL. My expertise extends to managing and optimizing databases, including MySQL, PostgreSQL, MongoDB, and Firebase. I focus on creating efficient APIs, ensuring seamless integration with front-end systems, and handling complex data operations to deliver high-performance.",
      "\n\nSkills:\n• NodeJs\n• MongoDB\n• Express Js\n• Graph Ql\n• Python\n• MySQL\n• Postgresql\n• Firebase"],
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Software Development',
    // pos: 'Junior Web Developer',
    // duration: '2019 - 2020',
    title: ["As a software developer, I design and build applications from concept to deployment, focusing on creating efficient, scalable, and user-friendly solutions. My experience spans various stages of the software development lifecycle, including requirements gathering, system architecture, coding, testing, and maintenance. I am adept at solving complex problems and delivering high-quality software tailored to meet diverse client needs."],
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];

