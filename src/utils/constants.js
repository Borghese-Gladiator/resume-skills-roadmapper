/*
NAME
---------------------------------
Constant to hold all skills data

DESCRIPTION
---------------------------------
This constant gets converted using convertTreeFormat from utils.js into the format needed for the Geist UI FileTree component

BEFORE convertTreeFormat
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
        "Tomcat": {},
        "Jersey": {},
        "MongoDB Java Driver": {},
        "Microsoft JDBC Driver": {},
        "Spring": {},
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
      "C": {
        "Pointers": {},
        "Structures": {},
        "C File I/O": {},
        "malloc vs calloc": {}
      },
      "Backend": {},
      "Build Tools": {
        "make": {}
      },
      "Testing": {
        "Check": {}
      }
    },
    "C++": {
      "C++": {},
    },
    "C#": {
      "C#": {
        ".NET": {},
        "Common Language Runtime (JRE)": {},
        "Visual Studio": {},
        "Windows Desktop Applications": {}
      },
    },
    "Julia": {
      "Julia": {},
      "Build Tools": {
        "Project.toml": {},
        "Pkg": {},
        "Julia Packages": {},
        "JuliaHub": {}
      },
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
    "Desktop": {
      "Windows": {
        "Virtualization": {
          "Hyper-V": {},
          "Microsoft WSL": {},
          "VirtualBox": {}
        },
        "Remote Desktop": {},
        "Cygwin": {},
      },
      "Linux Distros": {
        "Ubuntu": {},
        "CentOS 6": {},
        "CentOS 7": {},
        "CentOS 8": {},
        "Kali Linux": {},
      },
    },
    "Mobile": {
      "Android": {
        "Android Studio": {},
        "AVD Manager": {},
        "XML": {},
        "Java": {},
        "Kotlin": {},
        "Permissions": {
          "Install-time permissions": {},
          "Normal permissions": {},
          "Runtime permissions": {},
          "Signature permissions": {},
        }
      },
      "iOS": {
        "Swift": {}
      },
    },
    "Containerization": {
      "Docker": {
        "Docker Desktop": {},
        "Docker Compose": {},
        "Docker images vs containers": {},
        "Docker Hub": {},
        "Dockerfile": {
          "Bridge Networks": {},
          ".dockerignore": {},
        },
      },
    },
    "Kubernetes": {
      "Kubernetes API": {},
      "Kubernetes Cluster": {
        "node": {},
      },
      "Minikube": {},
      "kubectl": {}
    },
    "Terraform": {}
  },
  "Web Dev": {
    "HTML5": {},
    "CSS3": {},
    "Lighthouse": {},
    "Cross Platform": {
      "PWA": {},
      "Flutter": {},
      "React Native": {},
      "Apache Cordoba": {},
      "Ionic": {}
    },
    "CSS Mix-ins": {},
    "JavaScript Libraries": {
      "jQuery": {}
    },
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
  "Database": {
    "Big Data": {
      "Apache Spark": {},
      "Hadoop": {}
    },
    "Cloud": {
      "MongoDB Atlas": {},
      "Google Cloud Platform": {},
      "Amazon Web Services": {},
      "Microsoft Azure": {},
    },
    "PostgreSQL": {},
    "MySQL": {},
    "SQL Server": {},
    "MongoDB": {},
    "Redis": {},
    "Message Broker":{
      "RabbitMQ": {},
      "Kafka": {}
    },
  },
  "Other": {
    "Blockchain": {},
    "Collaboration": {
      "VCS": {
        "git": {},
      },
      "Jira": {},
      "Slack": {}
    },
    "Cybersecurity": {
      "CompTIA Network": {}
    },
    "DevOps": {
      "Jenkins": {
        "Scripted Pipeline": {}
      },
      "GitLab": {}
    },
    "Data Science": {},
    "3D Modeling": {
      "Unity": {},
      "Blender": {},
      "Tkinter": {},
      "CAD": {
        "AutoDesk Maya": {}
      }
    },
  }
}
