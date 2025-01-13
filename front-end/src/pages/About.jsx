function About() {
    return (
        <div className="about-page">
            <h1 style={{marginBottom: "1rem",fontSize: "2.5rem"}}>About Me</h1>
            <p>
                Hi there! I’m <strong>Gowtham</strong>, a Computer Science and Engineering student with a passion for learning and creating.  
                This blog is my space to share insights, ideas, and experiences that inspire me.  
            </p>
            <h2>What I Do</h2>
            <ul>
                <li>
                    <strong>Tech Enthusiast:</strong> I love exploring new technologies, coding, and building practical solutions.
                </li>
                <li>
                    <strong>Creative Writer:</strong> Writing is one of my favorite ways to express myself and connect with others.
                </li>
                <li>
                    <strong>Photo & Video Editing:</strong> I enjoy bringing stories to life through engaging visuals and edits.
                </li>
            </ul>
            <h2>Let’s Connect</h2>
            <p>
                I’d love to connect with you! Feel free to reach out on:
            </p>
            <ul style={{listStyleType: "none", padding: 0}}>
                <li><strong>GitHub: </strong><a href="https://github.com/gowtham472">gowtham472</a></li>
                <li><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/gowtham0906">gowtham0906</a></li>
                <li><strong>Instagram: </strong> <a href="https://www.instagram.com/gowtham.creates">gowtham.creates</a></li>
            </ul>
            <p>
                <i>“Stay curious, keep building, and let’s create something amazing together!”</i>
            </p>
        </div>
    );
}

export default About;
