import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Laraib | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Yahallo', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Laraib Siddiqui',
  subtitle: "I'd like to put your ideas into reality.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Web Developer with enthusiasm and a focus on Backend Development and Scripting. I also work with python to develop effective web scrapers and crawlers. I have also worked on building efficient Machine Learning Models.',
  paragraphTwo:
    'I am passionate about building scalable software, creating effective solutions, and learning daily to grow professionally in the IT field.',
  paragraphThree: 'Feel free to contact me via email at any time.',
  resume: 'https://drive.google.com/file/d/1VrS-7Wfr98iNOOztGayRDAo2gyMgHaTS/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'face-detection.png',
    title: 'Face Recognition App',
    info:
      "A full-stack web application using the (MERN) Stack, this app allows you to identify the detection of faces in any image supplied. This was achieved thanks to Clarifai's artificial intelligence API.",
    info2: 'I used to React, Node, Express.js, and MongoDB in order to develop this web application.',
    url: 'https://face-detection-7.herokuapp.com/',
    repo: 'https://github.com/laraib-sidd/FaceDetection', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chat-app.png',
    title: 'Chat App',
    info:
      "A Chat App developed using Nodejs and Websocktes, this app allows users to join different rooms and have conversations with each other. It also has the functionality to share the user's current location. Nothing discussed in the chat is stored anywhere.",
    info2: 'I used Node, Websockets, HTML, CSS to develop this web application.',
    url: 'https://my-not-first-chat-app.herokuapp.com/',
    repo: 'https://github.com/laraib-sidd/chat-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Api.png',
    title: 'REST API',
    info:
      "I developed a full-featured Rest API, this API allows users to keep track of there tasks, it has the functionality of authentication. The API also had features like uploading a user's profile picture, pagination, sorting.",
    info2: 'I used Node, Mongoose to develop this Rest API.',
    url: 'https://newest-task-manager.herokuapp.com/',
    repo: 'https://github.com/laraib-sidd/task_manager', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'laraib.sidd7@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/pickled_pretzel',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/laraibsidd7/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/laraib-sidd',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
