/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rohith Kaveti",
  title: "Hi all, I'm Rohith",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 with hands-on experience building high-performance backend systems in Go & Python and low-level security tooling in C++. Currently deep-diving into Rust."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1QV21wduqrvVM25SZPSUIA92lw_r4h7PnTsVp7kSx974/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinksAndContactInfo = {
  github: "https://github.com/KavetiRohith",
  linkedin: "https://www.linkedin.com/in/rohithkaveti/",
  gmail: "rohitkaveti@gmail.com",
  mobileNumber: "+1 530-715-5786",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMediaAndContactInfo
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "SOFTWARE ENGINEER WHO LOVES NEW CHALLENGES & TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Developing and maintaining osquery at Uptycs, delivering deep endpoint visibility across Linux, and AIX"
    ),
    emoji(
      "⚡ Writing low-level code in C++ for security instrumentation and system introspection"
    ),
    emoji("⚡ Exploring Rust, Distributed Systems, and Microservices")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer Intern - Osquery Team",
      company: "Uptycs",
      companylogo: require("./assets/images/Uptycs.jpg"),
      date: "May 2024 - May 2025",
      desc: "Worked on Osquery for AIX and Linux",
      descBullets: [
        "Integrated Uptycs Osquery fork for IBM AIX into the principal Osquery repository, created a Jenkins pipeline for CI, eliminating additional developer time spent on the AIX fork and increasing developer efficiency by 70%.",
        "Implemented heartbeats to ensure the osquery daemon is healthy on AIX using the POSIX shared memory API.",
        "Built a custom YARA-based file-scanning feature to keep memory growth predictable when scanning very large files.",
        "Improved socket and user event detection on AIX by leveraging data from the Audit framework.",
        "Implemented full memory snapshotting on Linux without requiring a kernel module."
      ]
    },
    {
      role: "Research Assistant - Backend Team",
      company: "CSU Chico",
      companylogo: require("./assets/images/csuc-wildcat.jpg"),
      date: "Jan 2024 - May 2025",
      desc: "Developed the Backend for an educational platform",
      descBullets: [
        "Developed backend APIs for an educational platform using Node.js, TypeScript, Express.js, and Postgres.",
        "Containerized the application enabling consistent development environments using Docker, and Docker Compose.",
        "Implemented Google OAuth with Passport.js, enhancing user authentication and access management.",
        "Created a code execution engine supporting multiple programming languages (C++, Java, Python) for submission evaluations.",
      ]
    },
    {
      role: "Software Engineer - Backend Team",
      company: "Loan2Wheels",
      companylogo: require("./assets/images/Loan2wheels.jpg"),
      date: "Feb 2022 - Jun 2023",
      desc: "Built and maintained core backend services for the Loan2Wheels platform",
      descBullets: [
        "Designed and implemented RESTful APIs for the Loan Management System using FastAPI, PostgreSQL, and SQLAlchemy.",
        "Cut backend API call volume by 40% through an in-house event bus that streams real-time loan updates to web and mobile clients via WebSockets.",
        "Integrated third-party services such as HDFC Life, IDFY OCR, and Razorpay for payments and identity verification.",
        "Created a serverless PDF-to-image conversion service with AWS Lambda, S3, and Go to speed up document processing.",
        "Deployed Prometheus + Grafana dashboards for proactive monitoring and alerting, ensuring high availability and rapid incident response.",
        "Automated SSL certificate issuance and renewal for Nginx with Certbot, eliminating downtime and manual effort.",
        "Established GitHub Actions CI pipelines that lint and unit-test every merge to main, safeguarding code quality."
      ]
    },
    {
      role: "Software Engineer - Osquery Team",
      company: "Uptycs",
      companylogo: require("./assets/images/Uptycs.jpg"),
      date: "May 2021 - Jan 2022",
      desc: "Contributed to osquery development and security features",
      descBullets: [
        "Developed new features and bug fixes in the C++ osquery codebase at Uptycs.",
        "Built an event generator to stress-test the event flow from the osquery agent to the Uptycs Cloud and measure drop rates.",
        "Added container runtime awareness (Docker, CRI-O, containerd) to osquery for improved visibility into containerized workloads.",
        "Enhanced Chrome and Firefox add-on detection logic to better surface malicious extensions.",
        "Implemented package detection for Arch Linux, extending vulnerability coverage across Arch-based distributions.",
        "Prototyped process blocking based on YARA signature matching of process executables."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all."
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const hireableDetails = {
  isHireable: false,
  message: "Actively Seeking SDE Internships (Summer 2024)"
};

export {
  illustration,
  greeting,
  socialMediaLinksAndContactInfo,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  hireableDetails
};
