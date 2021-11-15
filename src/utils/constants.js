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
      { name: "Powershell" }
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
  }
]