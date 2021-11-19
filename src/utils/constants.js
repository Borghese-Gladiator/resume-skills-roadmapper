/*
Start with list of nodes
*/

export const skillTree = [
  {
    name: "Languages",
    children: [
      {
        name: "Java",
        children: [
          { name: "Java" },
          {
            name: "Frontend",
            children: [
              { name: "Swing", },
              { name: "AWT", }
            ]
          },
          {
            name: "Backend",
            children: [
              {
                name: "Spring",
                children: []
              }
            ]
          },
          {
            name: "Build Tools",
            children: [
              { name: "Maven" },
              { name: "Gradle" },
              { name: "Ant" }
            ]
          },
          {
            name: "Testing",
            children: [
              { name: "JUnit" },
              { name: "TestNG" },
              { name: "Mockito" },
            ]
          }
        ]
      },
      {
        name: "Python",
        children: [
          { name: "Python" },
          {
            name: "Frontend",
            children: []
          },
          {
            name: "Backend",
            children: []
          },
          {
            name: "Build Tools",
            children: []
          },
          {
            name: "Testing",
            children: []
          }
        ]
      },
      {
        name: "JavaScript",
        children: [
          { name: "JavaScript" },
          { name: "Node.js" },
          { name: "ES6" },
          { name: "TypeScript" },
          {
            name: "Frontend",
            children: [
              { name: "React" },
              { name: "Angular" },
              { name: "Vue.js" },
            ]
          },
          {
            name: "Backend",
            children: []
          },
          {
            name: "Build Tools",
            children: [
              { name: "npm" }
              { name: "Babel" },
              { name: "Webpack" },
            ]
          },
          {
            name: "Testing",
            children: []
          }
        ]
      },
      {
        name: "C",
        children: [
          { name: "C" },
          {
            name: "Frontend",
            children: []
          },
          {
            name: "Backend",
            children: []
          },
          {
            name: "Build Tools",
            children: []
          },
          {
            name: "Testing",
            children: []
          }
        ]
      },
      {
        name: "C++",
        children: [
          { name: "C++" },
          {
            name: "Frontend",
            children: []
          },
          {
            name: "Backend",
            children: []
          },
          {
            name: "Build Tools",
            children: []
          },
          {
            name: "Testing",
            children: []
          }
        ]
      },
      {
        name: "C#",
        children: [
          { name: "C#" },
          {
            name: "Frontend",
            children: []
          },
          {
            name: "Backend",
            children: []
          },
          {
            name: "Build Tools",
            children: []
          },
          {
            name: "Testing",
            children: []
          }
        ]
      },
      {
        name: "Julia",
        children: [
          { name: "Julia" },
          {
            name: "Frontend",
            children: []
          },
          {
            name: "Backend",
            children: []
          },
          {
            name: "Build Tools",
            children: []
          },
          {
            name: "Testing",
            children: []
          }
        ]
      },
      { name: "Bash" },
      { name: "awk" },
      { name: "Lua" },
      { name: "Windows Batch" },
      { name: "Powershell" },
      {
        name: "Query Languages",
        children: [
          { name: "SQL" },
          { name: "CQL" },
          { name: "Knex.js" },
        ]
      },
      
    ]
  },
  {
    name: "OS & Virtualization",
    children: [
      {
        name: "Windows",
        children: [
          { name: "Cygwin" },
          { name: "Microsoft WSL" },
          { name: "VirtualBox" },
        ]
      },
      { 
        name: "Linux Distros",
        children: [
          { name: "Ubuntu" },
          { name: "CentOS 6" },
          { name: "CentOS 7" },
          { name: "CentOS 8" },
          { name: "Kali Linux" },
        ]
      },
      {
        name: "Android"
      },
      {
        name: "iOS",
        children: [
          { name: "Swift" }
        ]
      },
      {
        name: "Docker"
      },
      {
        name: "Kubernetes",
        children: [
          { name: "Terraform" }
        ]
      },
    ]
  },
  {
    name: "Web Dev",
    children: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "PWA" },
    ]
  },
  {
    name: "Mobile Dev",
    children: [
      { name: "Flutter" },
      { name: "React Native" },
    ]
  },
  {
    name: "DevOps",
    children: []
  },
  {
    name: "Data Science",
    children: []
  },
  {
    name: "Blockchain",
    children: []
  },
  {
    name: "Cybersecurity",
    children: [
      { name: "CompTIA Network"}
    ]
  },
  {
    name: "Collaboration",
    children: []
  }
]