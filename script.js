document.addEventListener("DOMContentLoaded", function() {
    const terminalBody = document.querySelector(".terminal-body");
    const terminalHeader = document.querySelector(".terminal-header");
    const terminal = document.querySelector(".terminal");
    const commandHistory = [];
    let historyIndex = -1;
    let themeColors = {
        textColor: '#00ff00',
        headerColor: 'white',
    };

    const commands = {
        "help": () => {
            return `
                <span style="color:${themeColors.textColor};">about</span>          - learn more about me <br>
                <span style="color:${themeColors.textColor};">clear</span>          - clear the terminal display <br>
                <span style="color:${themeColors.textColor};">echo</span>           - display custom text or messages <br>
                <span style="color:${themeColors.textColor};">education</span>      - explore my academic journey <br>
                <span style="color:${themeColors.textColor};">exit</span>           - close the current session <br>
                <span style="color:${themeColors.textColor};">help</span>           - get a list of available commands <br>
                <span style="color:${themeColors.textColor};">history</span>        - see your command usage history <br>
                <span style="color:${themeColors.textColor};">portfolio</span>      - view my website <br>
                <span style="color:${themeColors.textColor};">projects</span>       - check out my projects <br>
                <span style="color:${themeColors.textColor};">skills</span>         - view my skill set <br>
                <span style="color:${themeColors.textColor};">socials</span>        - discover my social media profiles <br>
                <span style="color:${themeColors.textColor};">themes</span>         - browse through available themes <br>
                <span style="color:${themeColors.textColor};">welcome</span>        - view the introductory section <br>
                <span style="color:${themeColors.textColor};">whoami</span>         - find out who the current user is <br>
                <span style="color:${themeColors.textColor};">contact</span>        - get all contact information <br>
            `;
        },

        "themes": () => {
            return `Available themes: <br><span style="color:${themeColors.textColor};">ubuntu</span><br><span style="color:${themeColors.textColor};">git-bash</span><br><span style="color:${themeColors.textColor};">sunset</span><br><span style="color:${themeColors.textColor};">sweet</span><br><span style="color:${themeColors.textColor};">matrix</span><br><span style="color:${themeColors.textColor};">ocean</span><br><br>To change themes, type 'themes go to "theme-name"'.<br>Example: <span style="color:${themeColors.textColor};">themes go to sunset</span>`;
        },
        
        "themes go to ubuntu": () => {
            terminal.style.backgroundColor = '#300a24';
            terminalHeader.style.backgroundColor = '#595959';
            terminalHeader.style.color = 'white';
            terminalBody.style.color = '#00ff00';
            themeColors.textColor = '#00ff00';
            return "<span class='success'>✓ Switched to Ubuntu theme!</span>";
        },

        "themes go to git-bash": () => {
            terminal.style.background = 'linear-gradient(135deg, #1a1a1a, #2e2e2e)'; 
            terminalHeader.style.background = 'linear-gradient(135deg, #2e2e2e, #444444)';
            terminalHeader.style.color = '#00ff00'; 
            terminalBody.style.color = '#00ff00'; 
            themeColors.textColor = '#00ff00';
            return "<span class='success'>✓ Switched to Git-Bash theme!</span>";
        },

        "themes go to sunset": () => {
            terminal.style.background = 'linear-gradient(135deg, #ff7f50, #ff4500)'; 
            terminalHeader.style.background = 'linear-gradient(135deg, #ff7f50, #ff4500)'; 
            terminalHeader.style.color = '#ffffff'; 
            terminalBody.style.color = '#fffb00'; 
            themeColors.textColor = '#fffb00';
            return "<span class='success'>✓ Switched to Sunset theme!</span>";
        },

        "themes go to sweet": () => {
            terminal.style.background = 'linear-gradient(135deg, #ffb6c1, #ff69b4)'; 
            terminalHeader.style.background = 'linear-gradient(135deg, #ffd9df, #ff69b4)'; 
            terminalHeader.style.color = '#ff178b'; 
            terminalBody.style.color = '#ff178b'; 
            themeColors.textColor = '#ff0f9f';
            return "<span class='success'>✓ Switched to Sweet theme!</span>";
        },

        "themes go to matrix": () => {
            terminal.style.background = 'linear-gradient(135deg, #000000, #0d4f0d)'; 
            terminalHeader.style.background = 'linear-gradient(135deg, #000000, #1a1a1a)'; 
            terminalHeader.style.color = '#00ff00'; 
            terminalBody.style.color = '#00ff41'; 
            themeColors.textColor = '#00ff41';
            return "<span class='success'>✓ Welcome to the Matrix...</span>";
        },

        "themes go to ocean": () => {
            terminal.style.background = 'linear-gradient(135deg, #1e3c72, #2a5298)'; 
            terminalHeader.style.background = 'linear-gradient(135deg, #1e3c72, #2a5298)'; 
            terminalHeader.style.color = '#87ceeb'; 
            terminalBody.style.color = '#87ceeb'; 
            themeColors.textColor = '#87ceeb';
            return "<span class='success'>✓ Diving into Ocean theme!</span>";
        },

        "about": `
            �‍💻 About Me:
            
            I'm a passionate developer with a strong foundation in web technologies and IoT.
            I love building things that live on the internet and solving complex problems.
            My goal is to always build products that provide pixel-perfect, performant experiences.
            
            � Currently learning: Advanced React Patterns, System Design
            🤝 Open for: Full-time opportunities, Collaborations, Freelance Projects`,
        
        "portfolio": () => {
            window.open("https://sagarpandey006.vercel.app/", "_blank");
            return "<span class='success'>✓ Opening portfolio in new tab...</span>";
        }, 
        
        "clear": () => { 
            terminalBody.innerHTML = '<p class="welcome-text">Terminal cleared!</p>'; 
            return ''; 
        },
        
        "echo": (args) => args.length > 0 ? args.join(" ") : "<span class='error'>Usage: echo [text]</span>",
        
        "education": () => {
            return `🎓 <span style="color:${themeColors.textColor};">Education History</span><br>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━<br>
            🏛️ <span style="color:${themeColors.textColor};">B.Tech in Internet of Things</span> (2022 - 2026)<br>
            SATI, Vidisha<br>
            CGPA: 8.02/10.0<br><br>
            📚 <span style="color:${themeColors.textColor};">Higher Secondary</span> (2022)<br>
            Gurunanak Mission Higher Secondary School, Maihar<br>
            Percentage: 91.33%<br><br>
            🏫 <span style="color:${themeColors.textColor};">Secondary Education</span> (2020)<br>
            Gurunanak Mission Higher Secondary School, Maihar<br>
            Percentage: 95.66%`;
        },
        

        
        "exit": () => {
            return "<span class='success'>👋 Thanks for visiting! See you next time!</span>";
        },
        
        "history": () => commandHistory.length > 0 ? commandHistory.map((cmd, i) => `${i + 1}. ${cmd}`).join("<br>") : "No commands in history yet.",
        
        "projects": () => {
            return `� <span style="color:${themeColors.textColor};">Featured Projects</span><br>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━<br>
            🚀 <span style="color:${themeColors.textColor};">Bail-Reckoner</span><br>
            <a href="https://bailreckonerr.netlify.app/" target="_blank" class="link">Live Demo</a> / <a href="https://github.com/sagarpandey006/bail-reckoner" target="_blank" class="link">GitHub</a><br>
            > A legal tech innovation revolutionizing bail applications<br>
            • Built with: React.js, Node.js, MongoDB<br>
            • Key Features:<br>
              - Streamlined bail application process<br>
              - Smart form automation<br>
              - Legal document generation<br><br>
            
            � <span style="color:${themeColors.textColor};">Mind-scool</span><br>
            <a href="https://mindscool.netlify.app/" target="_blank" class="link">Live Demo</a> / <a href="https://github.com/sagarpandey006/Mind-scool" target="_blank" class="link">GitHub</a><br>
            > Gamified mental wellness platform for better mental health<br>
            • Built with: React.js, Express.js, MongoDB<br>
            • Key Features:<br>
              - Interactive mental exercises<br>
              - Progress tracking dashboard<br>
              - Personalized wellness journey<br><br>
            
            💡 Want to see more? Check out my <a href="https://sagarpandey006.vercel.app/" target="_blank" class="link">portfolio website</a>!<br>
            📫 Interested in collaborating? Type 'contact' to reach out!`;
        },
        

        
        "skills": () => {
            return `�️ <span style="color:${themeColors.textColor};">Technical Skills</span><br>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━<br>
             <span style="color:${themeColors.textColor};">Languages</span>: C, C++, Python, Java, JavaScript<br>
            🛠️ <span style="color:${themeColors.textColor};">Developer Tools</span>: VS Code, GitHub, Postman, Figma, Canva<br>
            � <span style="color:${themeColors.textColor};">Technologies/Frameworks</span>: HTML5, CSS3, React, Express, NodeJS, Bootstrap, Tailwind CSS<br>
            🗄️ <span style="color:${themeColors.textColor};">Cloud/Databases</span>: SQL, MongoDB<br>
            💡 <span style="color:${themeColors.textColor};">Areas of Interest</span>: Web Development`;
        },
        
        "socials": () => {
            return `🌐 <span style="color:${themeColors.textColor};">Connect with me</span><br>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━<br>
            💼 LinkedIn: <a href="https://linkedin.com/in/sagarpandey006" target="_blank" class="link">linkedin.com/in/sagarpandey006</a><br>
            👨‍💻 GitHub: <a href="https://github.com/sagarpandey006" target="_blank" class="link">github.com/sagarpandey006</a><br>
            🐦 Twitter: <a href="https://twitter.com/sagarpandey006" target="_blank" class="link">twitter.com/sagarpandey006</a><br>
            📊 LeetCode: <a href="https://leetcode.com/u/sagarpandey006/" target="_blank" class="link">leetcode.com/sagarpandey006</a><br>
            💻 GeeksforGeeks: <a href="https://www.geeksforgeeks.org/user/sagarpandey006/" target="_blank" class="link">geeksforgeeks.org/sagarpandey006</a><br>
            📸 Instagram: <a href="https://www.instagram.com/sagar_pandey006/" target="_blank" class="link">instagram.com/sagar_pandey006</a><br><br>
            <span style="color:${themeColors.textColor};">Let's connect and build something amazing together! 🚀</span>`;
        },
        
        "welcome": () => {
            return `🎉 <span style="color:${themeColors.textColor};">Welcome!</span><br>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━<br>
            👋 Hey There! I am Sagar Pandey<br>
            🎓 B.Tech in IoT @ SATI, Vidisha<br>
            💻 A passionate developer with interests in Web Development 💻 and UI/UX Designing ✨<br>
            � Always learning and growing in the tech world<br><br>
            Type <span style="color:${themeColors.textColor};">help</span> to explore all available commands!`;
        },
        

        
        "whoami": "👤 guest@user <br>🤔 But you should know who you are!",
        

        
        "resume": () => {
            window.open("https://drive.google.com/file/d/1fpsSQ3-TFbHvym8Fia-MxJG7F0othIM0/view?usp=sharing", "_blank");
            return `📄 <span style="color:${themeColors.textColor};">My Resume</span><br>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━<br>
            <span class='success'>✓ Opening resume in new tab...</span>`;
        },
        
        "contact": () => {
            const now = new Date();
            return `📞 <span style="color:${themeColors.textColor};">Contact Information</span><br>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━<br>
            📧 Email: officialsagar006@gmail.com<br>
            � Phone: <a href="tel:+91%208269087890" target="_blank" class="link">+91 8269087890</a><br>
            �💼 LinkedIn: <a href="https://linkedin.com/in/sagarpandey006" target="_blank" class="link">linkedin.com/in/sagarpandey006</a><br>
            👨‍💻 GitHub: <a href="https://github.com/sagarpandey006" target="_blank" class="link">github.com/sagarpandey006</a><br>
            🌐 Portfolio: <a href="https://sagarpandey006.vercel.app/" target="_blank" class="link">sagarpandey006.vercel.app</a><br>
            📅 Current Time: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}<br><br>
            <span style="color:${themeColors.textColor};">Feel free to reach out! 🚀</span>`;
        }
    };

    function processCommand(input) {
        const [commandName, ...args] = input.toLowerCase().split(" ");
        let response;
    
        if (commands[`${commandName} ${args.join(" ")}`]) {
            response = typeof commands[`${commandName} ${args.join(" ")}`] === "function" ? 
                commands[`${commandName} ${args.join(" ")}`](args) : 
                commands[`${commandName} ${args.join(" ")}`];
        } else if (commands[commandName]) {
            response = typeof commands[commandName] === "function" ? 
                commands[commandName](args) : 
                commands[commandName];
        } else {
            response = `<span class='error'>❌ Command not found: ${commandName}</span><br>Type <span style="color:${themeColors.textColor};">help</span> to see available commands.`;
        }
    
        return response;
    }

    function addNewPrompt() {
        const newPrompt = document.createElement("div");
        newPrompt.classList.add("prompt");
        newPrompt.innerHTML = `<span contenteditable="true" class="user-input"></span>`;
        terminalBody.appendChild(newPrompt);

        const newUserInput = newPrompt.querySelector(".user-input");
        newUserInput.focus();

        newUserInput.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                e.preventDefault();
                const input = newUserInput.textContent.trim();
                if (input) {
                    commandHistory.push(input);
                    historyIndex = commandHistory.length;
                    newUserInput.setAttribute("contenteditable", "false");
                    
                    const response = processCommand(input);
                    if (response) {
                        const responseElement = document.createElement("div");
                        responseElement.classList.add("command-output");
                        responseElement.innerHTML = response;
                        terminalBody.appendChild(responseElement);
                    }
                    addNewPrompt();
                    terminalBody.scrollTop = terminalBody.scrollHeight;
                }
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    newUserInput.textContent = commandHistory[historyIndex];
                    placeCaretAtEnd(newUserInput);
                }
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    newUserInput.textContent = commandHistory[historyIndex];
                    placeCaretAtEnd(newUserInput);
                } else {
                    historyIndex = commandHistory.length;
                    newUserInput.textContent = "";
                }
            } else if (e.key === "Tab") {
                e.preventDefault();
                const currentInput = newUserInput.textContent.toLowerCase();
                const matchingCommands = Object.keys(commands).filter(cmd => 
                    cmd.startsWith(currentInput)
                );
                if (matchingCommands.length === 1) {
                    newUserInput.textContent = matchingCommands[0];
                    placeCaretAtEnd(newUserInput);
                }
            }
        });
    }

    function placeCaretAtEnd(el) {
        el.focus();
        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
            const range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
            const textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
    }

    // Window controls functionality
    document.querySelector('.close').addEventListener('click', () => {
        if (confirm('Are you sure you want to close the terminal?')) {
            window.close();
        }
    });

    document.querySelector('.minimize').addEventListener('click', () => {
        terminal.style.transform = 'scale(0.1)';
        setTimeout(() => terminal.style.transform = 'scale(1)', 300);
    });

    document.querySelector('.maximize').addEventListener('click', () => {
        terminal.style.width = terminal.style.width === '100%' ? '90%' : '100%';
    });

    addNewPrompt();
});