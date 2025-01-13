import SpotlightCard from "../components/spcard";

const greeting = () =>{
    if(new Date().getHours() < 12) {
        return "Morning";
    } else if(new Date().getHours() < 18) {
        return "Afternoon";
    }
    return "Evening";
}

function HomePage() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1 style={{ padding: '0' }}>Hi Good {greeting()}!</h1>   
            
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 166, 255, 0.53)">
                <i className="fa fa-pencil"></i>
                <h2>Creative Writing</h2>
                <p>Explore articles and stories that ignite inspiration and bring imagination to life.</p>
                <button>Read Stories</button>
            </SpotlightCard>

            {/* Spotlight Card 3 */}
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(40, 167, 69, 0.2)">
                <i className="fa fa-code"></i>
                <h2>Tech Insights</h2>
                <p>Discover the latest trends, tips, and tutorials in the world of technology.</p>
                <button>Explore More</button>
            </SpotlightCard>

            {/* Spotlight Card 4 */}
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(220, 53, 69, 0.2)">
                <i className="fa fa-camera"></i>
                <h2>Visual Creations</h2>
                <p>Check out my photo and video editing projects that bring stories to life.</p>
                <button>View Gallery</button>
            </SpotlightCard>

            {/* Spotlight Card 5 */}
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(23, 162, 184, 0.2)">
                <i className="fa fa-rocket"></i>
                <h2>Future Projects</h2>
                <p>Stay tuned for updates on exciting new projects and ideas I&#39;m working on!</p>
                <button>Coming Soon</button>
            </SpotlightCard>
        </div>
    );
}


export default HomePage;