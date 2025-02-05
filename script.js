const terminalOutput = document.getElementById("terminal-output");
const commandLine = document.getElementById("command-line");
const terminal = document.getElementById("terminal");

const commands = {
  whois: 
    `Name: Sagar Pandey
    Education: Bachelor of Technology in IoT @ SATI, Vidisha
    Interests: Web Devlopment 💻, Python 🐍, SQL 📊, Data Science 📈`,
  whoami:
    "You are a visitor to our terminal. We will soon find out who you are. 🕵️‍♂️ But for now, enjoy the mystery! 🕵️‍♀️",
  projects: `Here's the project gallery: <a href="https://project-gallery-eight.vercel.app/" class="link" target="_blank">Project Gallery</a> 🌟`,
  contact:
    "Contact me at officialsagar006@gmail.com 📧 Just don't spam me with cat pictures! 🐱",
  education: `
    🎓 Education History:
    
    • B.Tech in IoT (2020 - 2024)
      SATI, Vidisha
      CGPA: X.XX/10.0
    
    • Higher Secondary (2019)
      School Name
      Percentage: XX%
    
    • Secondary Education (2017)
      School Name
      Percentage: XX%
  `,
  experience: `
    💼 Work Experience:
    
    • Software Developer Intern (Jan 2024 - Present)
      Company Name
      - Developed and maintained web applications using React.js
      - Implemented responsive designs and REST APIs
    
    • Web Development Intern (June 2023 - Dec 2023)
      Company Name
      - Created responsive websites using HTML, CSS, and JavaScript
      - Worked on backend development using Node.js
  `,
  about: `
    👨‍💻 About Me:
    
    I'm a passionate developer with a strong foundation in web technologies and IoT.
    I love building things that live on the internet and solving complex problems.
    My goal is to always build products that provide pixel-perfect, performant experiences.
    
    🌱 Currently learning: Advanced React Patterns, System Design
    🤝 Open for: Full-time opportunities, Collaborations, Freelance Projects
  `,
  certifications: `
    📜 Certifications:
    
    • Web Development Bootcamp - Udemy (2023)
    • Python for Data Science - Coursera (2023)
    • Advanced JavaScript - freeCodeCamp (2022)
    • IoT Fundamentals - Cisco (2022)
  `,
  hackathons: `
    🏆 Hackathon Experience:
    
    • Smart India Hackathon 2023
      - Developed an IoT-based solution for smart agriculture
      - Secured 2nd position among 100+ teams
    
    • Code For Good 2023
      - Built a web application for NGO management
      - Won Best UI/UX Design award
  `,

  skills: `<div style="padding-left: 4px; line-height: 0.6;">
    <div>🛠️ Technical Skills:</div>
    <div style="padding-left: 20px; text-indent: -20px;">• Languages: C/C++, Python, Java, JavaScript</div>
    <div style="padding-left: 20px; text-indent: -20px;">• Dev Tools: VS Code, GitHub, Postman, Figma, Canva</div>
    <div style="padding-left: 20px; text-indent: -20px;">• Web Tech: HTML5, CSS3, React, Express, NodeJS, Bootstrap, Tailwind CSS</div>
    <div style="padding-left: 20px; text-indent: -20px;">• Database: SQL, MongoDB</div>
    <div style="padding-left: 20px; text-indent: -20px;">• Focus: Web Development, Full Stack Development, UI/UX Design</div>
  </div>`,

  resume: `
    📄 My Resume:
    <a href="Resume.pdf.pdf" class="link" target="_blank">Download Resume</a>
  `
};

const aboutCommands = {
  help: "You know what this does. 🙄 Want some hints? 😏",
  whois: "Who is Sagar? 🤔 The brains behind this terminal! 💡",
  whoami: "Who are you? 🧐 Dive into self-discovery! 🌊",
  social: "Connect with me. 🌐 Let's network! 🤝",
  projects: "Check out projects. 💻 Prepare to be amazed! ✨",
  joke: "Get a programming joke. 😄",
  theme: "Change terminal theme. 🎨",
  education: "View my academic journey. 🎓",
  experience: "Check out my work experience. 💼",
  about: "Learn more about me. 👨‍💻",
  certifications: "View my certifications. 📜",
  hackathons: "See my hackathon adventures. 🏆",
  skills: "Explore my technical skills. 🛠️",
  resume: "Download my resume. 📄",
  contact: "Let's get in touch! 📧",
  clear: "Clear terminal. 🧹 Keep it tidy! 😊"
};

const socials = {
  github: `<a href="https://github.com/sagarpandey006" target="_blank" class="link">github.com/sagarpandey006</a>`,
  linkedin: `<a href="https://linkedin.com/in/sagarpandey006" target="_blank" class="link">linkedin.com/sagarpandey006</a>`,
  twitter: `<a href="https://twitter.com/sagarpandey006" target="_blank" class="link">twitter.com/sagarpandey006</a>`,
  leetcode: `<a href="https://leetcode.com/u/sagarpandey006/" target="_blank" class="link">leetcode.com/sagarpandey006/</a>`,
  geeksforgeeks: `<a href="https://www.geeksforgeeks.org/user/sagarpandey006/" target="_blank" class="link">geeksforgeeks.org/sagarpandey006/</a>`,
  instagram: `<a href="https://www.instagram.com/sagar_pandey006/" target="_blank" class="link">instagram.com/sagar_pandey006</a>`,
};

const header = "Welcome to Portfolio shell,\nType help to see all the commands";

const themes = {
  default: {
    "--background-color": "#1F2430",
    "--foreground-color": "#FFA759",
    "--red-color": "#FF3333",
    "--green-color": "#BAE67E",
    "--yellow-color": "#FFA759",
    "--blue-color": "#73D0FF",
    "--purple-color": "#D4BFFF",
    "--cyan-color": "#95E6CB",
    "--white-color": "#CBCCC6",
    "--bright-black-color": "#707A8C",
  },
  dracula: {
    "--background-color": "#282a36",
    "--foreground-color": "#f8f8f2",
    "--red-color": "#ff5555",
    "--green-color": "#50fa7b",
    "--yellow-color": "#f1fa8c",
    "--blue-color": "#6272a4",
    "--purple-color": "#bd93f9",
    "--cyan-color": "#8be9fd",
    "--white-color": "#f8f8f2",
    "--bright-black-color": "#44475a",
  },
  ayu: {
    "--background-color": "#0f1419",
    "--foreground-color": "#e6e1cf",
    "--red-color": "#ff3333",
    "--green-color": "#b8cc52",
    "--yellow-color": "#e7c547",
    "--blue-color": "#6CA0E6",
    "--purple-color": "#C578DD",
    "--cyan-color": "#80CBC4",
    "--white-color": "#C1C2D3",
    "--bright-black-color": "#7A8298",
  },
  light: {
    "--background-color": "#ffffff",
    "--foreground-color": "#000000",
    "--red-color": "#ff0000",
    "--green-color": "#00ff00",
    "--yellow-color": "#ffff00",
    "--blue-color": "#0000ff",
    "--purple-color": "#ff00ff",
    "--cyan-color": "#00ffff",
    "--white-color": "#ffffff",
    "--bright-black-color": "#808080",
  },
  dark: {
    "--background-color": "#000000",
    "--foreground-color": "#ffffff",
    "--red-color": "#ff0000",
    "--green-color": "#00ff00",
    "--yellow-color": "#ffff00",
    "--blue-color": "#0000ff",
    "--purple-color": "#ff00ff",
    "--cyan-color": "#00ffff",
    "--white-color": "#ffffff",
    "--bright-black-color": "#808080",
  },
};

window.addEventListener("load", (event) => {
  setTheme(localStorage.getItem("terminal_theme") ?? "default");
});

displayOutput(header);
commandLine.focus();

terminal.addEventListener("click", function () {
  commandLine.focus();
});

commandLine.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const command = commandLine.value;
    const output = processCommand(command.toLowerCase().trim());
    if (output) {
      displayCommand(command);
      displayOutput(output);
    }
    commandLine.value = "";
  }
});

function displayCommand(command) {
  const commandElement = document.createElement("p");
  commandElement.innerHTML = `<span id="prompt">visitor@shell:~/sagar $</span> <span class="command">${command}</span>`;
  terminalOutput.appendChild(commandElement);
}

function displayOutput(output) {
  if (output instanceof Promise) {
    output
      .then((data) => {
        const outputElement = document.createElement("pre");
        outputElement.classList.add("output");
        outputElement.textContent = data;
        terminalOutput.appendChild(outputElement);
        scrollToBottom();
      })
      .catch((error) => {
        console.error("Error displaying output:", error);
      });
  } else {
    const outputElement = document.createElement("p");
    outputElement.classList.add("output");
    outputElement.innerHTML = output;
    terminalOutput.appendChild(outputElement);
    scrollToBottom();
  }
}

function handleContact(name, email, message) {
  const mailtoLink = `mailto:officialsagar006@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
  window.location.href = mailtoLink;
  return "Opening your email client to send the message...";
}

function processCommand(command) {
  if (command.startsWith("contact")) {
    const args = command.split(" ");
    if (args.length >= 4) {
      const name = args[1];
      const email = args[2];
      const message = args.slice(3).join(" ");
      return handleContact(name, email, message);
    } else {
      return `
        📧 Contact Form Usage:
        contact [name] [email] [message]
        
        Example:
        contact John john@example.com Hello, I'd like to collaborate!
      `;
    }
  }
  if (command == "") return "<hr hidden />";
  else if (command === "clear") {
    clearTerminal();
    return null;
  } else if (command === "help") {
    let output = "<table>";
    for (let cmd in aboutCommands) {
      output += `<tr><td class="available-command">${cmd}</td><td class="command-description">${aboutCommands[cmd]}</td></tr>`;
    }
    output += "</table>";
    return output;
  } else if (command === "social") {
    let output = "<table>";
    for (let social in socials) {
      output += `<tr><td class="name">${social}</td><td class="link">${socials[social]}</td></tr>`;
    }
    output += "</table>";
    return output;
  } else if (command === "banner") {
    return ``;
  } else if (command === "joke") {
    return fetchJoke();
  } else if (command.startsWith("theme")) {
    if (command === "theme") {
      let availableThemesMsg = "Available themes: ";
      availableThemesMsg += Object.keys(themes).join(", ");
      availableThemesMsg += '. Type "theme THEME" to change theme to THEME.';
      return availableThemesMsg;
    } else {
      const selectedTheme = command.split(" ")[1];
      return setTheme(selectedTheme);
    }
  } else if (commands.hasOwnProperty(command)) {
    return commands[command];
  } else {
    return `${command}: command not found`;
  }
}

function clearTerminal() {
  terminalOutput.innerHTML = "";
  displayOutput(header);
}

function scrollToBottom() {
  terminal.scrollTop = terminal.scrollHeight;
}

async function fetchJoke() {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    );
    const data = await response.json();
    return data.joke;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return "Failed to fetch joke. 😕";
  }
}

function setTheme(theme) {
  const selectedTheme = themes[theme];
  if (selectedTheme) {
    for (const [property, value] of Object.entries(selectedTheme)) {
      document.documentElement.style.setProperty(property, value);
    }
    if (theme !== "default") localStorage.setItem("terminal_theme", theme);
    else localStorage.removeItem("terminal_theme");
    return `Theme set to ${theme}.`;
  } else {
    return `Theme ${theme} not found.`;
  }
}
