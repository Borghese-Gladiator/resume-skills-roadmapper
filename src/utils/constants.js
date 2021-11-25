/*
NAME
---------------------------------
Constant to hold all skills data

DESCRIPTION
---------------------------------
This constant gets converted using convertTreeFormat from utils.js into the format needed for the Geist UI FileTree component

Before convertTreeFormat
export const skillTree = {
  "Languages": {
    "Java": {},
    "Python": {}
  },
  "OS & Virtualization": {
    "Windows": {}
  }
}

AFTER convertTreeFormat
export const skillTree = [
  {
    type: 'directory',
    name: 'Languages',
    extra: '2 files'
    files: [
      {
        type: 'file',
        name: 'Java',
      },
      {
        type: 'file',
        name: 'Python',
      }
    ]
  },
  {
    type: 'directory',
    name: 'OS & Virtualization',
    extra: '1 file'
    files: [
      {
        type: 'file',
        name: 'Windows',
      }
    ]
  },
]
*/
export const skillTree = {
  "Languages": {
    "Java": {
      "Java": {},
      "Frontend": {
        "Swing": {},
        "AWT": {},
      },
      "Backend": {
        "Spring": {
          "Eureka": {},
        },
        "Hibernate": {}
      },
      "Build Tools": {
        "Maven": { },
        "Gradle": {},
        "Ant": {}
      },
      "Testing": {
        "JUnit": {},
        "TestNG": {},
        "Mockito": {}
      }
    },
    "Python": {
      "Python": {},
      "Frontend": {
        "Streamlit": {},
        "Tkinter": {}
      },
      "Backend": {
        "Web Servers": {
          "Flask": {},
          "Django": {},
          "Streamlit": {},  
          "gunicorn": {},
        },
        "Logging": {
          "logger": {}
        },
        "Office Automation": {
          "pyautogui": {},
          "openpyxl": {},
          "smtplib": {},
        },
        "pygame": {},
        "python-dotenv": {},
        "sklearn": {},
        "tensorflow": {},
        "numpy": {},
        "pandas": {},
        "scipy": {},
        "nltk": {}
      },
      "Build Tools": {
        "pip": {},
        "virtualenv": {},
        "pip-tools": {
          "pip-compile": {},
          "pip-sync": {}
        },
        "pipenv": {},
        "Anaconda": {}
      },
      "Testing": {
        "unittest": {},
        "Nose": {},
        "TestNG": {}
      },
      "Beautiful Soup": {},
      "shelve": {},
      "shutil": {}
    },
    "JavaScript": {
      "JavaScript": {},
      "Node.js": {},
      "ES6": {},
      "TypeScript": {},
      "Frontend": {
        "React": {
          "Error Boundaries": {},
          "React Context": {},
          "Redux": {},
          "Next.js": {},
          "Routing Libraries": {
            "React Router": {},
            "wouter": {}
          },
        },
        "Angular": {},
        "Vue.js": {},
        "Phaser5": {},
        "Testing": {
          "Storybook": {},
          "React Testing Library": {},
          "Jest": {},
          "Cypress": {},
          "Mocha": {}
        },
        "Templating": {
          "Handlebars": {},
          "Jade": {}
        }
      },
      "Backend": {
        "Express": {},
        "Nest.js": {}
      },
      "Build Tools": {
        "npm": {},
        "yarn": {},
        "Bundlers": {
          "Webpack": {},
          "Vite": {},
          "Snowpack": {},
          "Parcel": {},
          "Rollup": {},
        },
        "Transpilers": {
          "Babel": {},
          "ESBuild": {}
        }
      },
      "Testing": {
        "Mocking": {
          "Sinon": {},
          "Jest": {},
          "Jasmine": {},
          "Enzyme": {}
        },
        "Mocha": {},
        "Jest": {},
        "Karma": {},
        "Jasmine": {},
        "Cucumber": {},
        "Cypress": {},
        "Browser Controllers": {
          "Chrome Webdriver": {},
          "Nightwatch": {},
          "Phantom": {},
          "Puppeteer": {},
          "TestCafe": {},
          "Cypress": {},
        }
      }
    },
    "C": {
      "C": {},
      "Backend": {},
      "Build Tools": {},
      "Testing": {}
    },
    "C++": {
      "C++": {},
      "Backend": {},
      "Build Tools": {},
      "Testing": {}
    },
    "C#": {
      "C#": {},
      "Backend": {},
      "Build Tools": {},
      "Testing": {}
    },
    "Julia": {
      "Julia": {},
      "Backend": {},
      "Build Tools": {},
      "Testing": {}
    },
    "Bash": {},
    "Windows Batch": {},
    "Powershell": {},
    "Query Languages": {
      "SQL": {},
      "CQL": {},
      "Knex.js": {}
    },
    "awk": {},
    "Lua": {},
    "Perl": {}
  },
  "OS & Virtualization": {
    "Windows": {
      "Cygwin": {},
      "Microsoft WSL": {},
      "VirtualBox": {}
    },
    "Linux Distros": {
      "Ubuntu": {},
      "CentOS 6": {},
      "CentOS 7": {},
      "CentOS 8": {},
      "Kali Linux": {},
    },
    "Android": {
      "Kotlin": {}
    },
    "iOS": {
      "Swift": {}
    },
    "Docker": {},
    "Kubernetes": {},
    "Terraform": {}
  },
  "Web Dev": {
    "HTML5": {},
    "CSS3": {},
    "PWA": {},
    "Cross Platform": {
      "Flutter": {},
      "React Native": {},
      "Apache Cordoba": {},
      "Ionic": {}
    },
    "CSS Mix-ins": {},
    "React Styling": {
      "styled-components": {},
    },
    "React Component Libraries": {
      "Material UI": {},
      "Chakra UI": {},
      "Semantic UI": {},
      "React Bootstrap": {},
      "Reactstrap": {},
      "Geist UI": {}
    },
  },
  "Microservices":{
    "RabbitMQ": {},
    "Spark": {}
  },
  "DevOps": {},
  "Data Science": {},
  "Blockchain": {},
  "Cybersecurity": {
    "CompTIA Network": {}
  },
  "Collaboration": {
    "VCS": {
      "git": {},
    },
    "Jira": {},
    "Slack": {}
  }
}
