const terminalOutput = document.getElementById("terminal-output");
const commandLine = document.getElementById("command-line");
const terminal = document.getElementById("terminal");

const commands = {
  
  whois: `
    Name: Sagar Pandey
    Education: Bachelor of Technology in IoT @ SATI, Vidisha
    Interests: Web Devlopment 💻 and UI/UX Designing✨`,
  whoami:
    "You are a visitor to my terminal. I will soon find out who you are. 🕵️‍♂️ But for now, enjoy the mystery! 🕵️‍♀️",

  why_terminal: `
    🤔 Why A Terminal Portfolio?
    
    $ Loading philosophical response...
    > Because normal portfolios are too mainstream! 🌊
    
    $ Running deeper_analysis.sh
    > As a developer who loves breaking conventions, I wanted my portfolio to:
      • Be a reflection of where we developers feel most at home - the terminal 🏠
      • Stand out from the typical scroll-based portfolios 📜
      • Actually demonstrate my coding style while showcasing my work 💻
      • Give visitors a taste of developer life through commands 🚀
      • Create an interactive experience that's both fun and professional 🎮
    
    $ cat wisdom.txt
    > This isn't just a portfolio; it's a playground for curiosity.
    > If you're exploring these commands, you're already thinking differently! 💡
    
    $ echo "Remember"
    > In a world of GUIs, sometimes CLI is just cooler 😎
  `,
  projects: `
    📂 Project Directory: /root/featured-projects
        
    🚀 Bail-Reckoner/ <a href="https://bailreckonerr.netlify.app/" target="_blank" class="link">Live Demo</a> / <a href="https://github.com/sagarpandey006/bail-reckoner" target="_blank" class="link">GitHub</a>
    =====================================
    > A legal tech innovation revolutionizing bail applications
    
    $ cat project-details.txt
    • Built with: React.js, Node.js, MongoDB
    • Key Features:
      - Streamlined bail application process
      - Smart form automation
      - Legal document generation
     
    🎮 Mind-scool/ <a href="https://mindscool.netlify.app/" target="_blank" class="link">Live Demo</a> / <a href="https://github.com/sagarpandey006/Mind-scool" target="_blank" class="link">GitHub</a>
    =====================================
    > Gamified mental wellness platform for better mental health
    
    $ cat project-details.txt
    • Built with: React.js, Express.js, MongoDB
    • Key Features:
      - Interactive mental exercises
      - Progress tracking dashboard
      - Personalized wellness journey
    
    $ echo "Want to see more?"
    > Check out my GitHub profile for additional projects! 
    > Type 'social' to find my GitHub link 🔍
    
    $ echo "Collaboration?"
    > I'm always open to working on exciting projects!
    > Type 'contact' to reach out 📧
  `,
  contact:
    "Contact me at officialsagar006@gmail.com 📧 Just don't spam me with cat pictures! 🐱",
  education: `
    🎓 Education History:
    
    • B.Tech in Internet of Things (2022 - 2026)
      SATI, Vidisha
      CGPA: 8.02/10.0
    
    • Higher Secondary (2022)
      Gurunanak Mission Higher Secondary School, Maihar
      Percentage: 91.33%
    
    • Secondary Education (2020)
      Gurunanak Mission Higher Secondary School, Maihar
      Percentage: 95.66%
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
    <a href="Backend PW certificate.pdf" class="link" target="_blank">• Backend Development Course - PW Skills (2025)</a>
    <a href="Python Udemy Certification.pdf" class="link" target="_blank">• Python Python - Udmeny (August 2023)</a>
    <a href="java NPTEL.pdf" class="link" target="_blank">• Programming in Java - NPTEL Certificate (2023)</a>
  `,
  hackathons: `
    🏆 Hackathon Experience:
    
    • Smart India Hackathon 2023
    • Smart India Hackathon 2024
    • Hackoverflow 2.0 2024
    • Code Conquest 2024
    • Version βeta 2024
  `,

  skills: `
  🛠️ Technical Skills:
    
  • Languages : C, C++, Python, Java, JavaScript
  • Developer Tools : VS Code,GitHub,Postman, Figma, Canva
  • Technologies/Frameworks : HTML5, CSS3, React, Express, NodeJS, Bootstrap , Tailwind CSS
  • Cloud/Databases : SQL, MongoDB
  • Areas of Interest : Web Development
  `,

  resume: `
    📄 My Resume:
    <a href="Sagar Pandey Resume.pdf.pdf" class="link" target="_blank">Download Resume</a>
  `
};

const aboutCommands = {
  whois: "Who is Sagar? 🤔 The brains behind this terminal! 💡",  // working
  whoami: "Who are you? 🧐 Dive into self-discovery! 🌊",       // workikng 
  why_terminal: "Curious why this is a terminal? 🤔 Let me explain with style! 💫",  // working
  education: "View my academic journey. 🎓",                  // working
  certifications: "View my certifications. 📜",               // working
  projects: "Check out projects. 💻 Prepare to be amazed! ✨",  // working
  hackathons: "See my hackathon adventures. 🏆",                 // working
  skills: "Explore my technical skills. 🛠️",                    // working
  // experience: "Check out my work experience. 💼",
  // about: "Learn more about me. 👨‍💻",
  resume: "Download my resume. 📄",                           // working
  contact: "Let's get in touch! 📧",                          // working
  social: "Connect with me. 🌐 Let's network! 🤝",            // working
  joke: "Get a programming joke. 😄",                         // working
  theme: "Change terminal theme. 🎨",                         // working
  help: "You know what this does. 🙄 Want some hints? 😏",    // working
  clear: "Clear terminal. 🧹 Keep it tidy! 😊"               // working
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
    commandLine.disabled = true; // Disable input while fetching
    output
      .then((data) => {
        const outputElement = document.createElement("pre");
        outputElement.classList.add("output");
        outputElement.textContent = data;
        terminalOutput.appendChild(outputElement);
        scrollToBottom();
        commandLine.disabled = false; // Re-enable input after display
        commandLine.focus();
      })
      .catch((error) => {
        console.error("Error displaying output:", error);
        commandLine.disabled = false;
        commandLine.focus();
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
  if (command === "joke") {
    return fetchJoke();
  }

  if (command.startsWith("contact")) {
    const args = command.split(" ");
    if (args.length >= 4) {
      const name = args[1];
      const email = args[2];
      const message = args.slice(3).join(" ");
      return handleContact(name, email, message);
    } else {
      return `
        📧 Just don't spam me with cat pictures! 🐱
        Call: <a href="tel:+91%208269087890" target="_blank" class="link">+91 8269087890</a>
        Email: <a href="mailto:officialsagar006@gmail.com" target="_blank" class="link">officialsagar006@gmail.com</a>
        
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
