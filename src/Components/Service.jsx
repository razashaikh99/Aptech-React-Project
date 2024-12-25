import './Service.css';

export default function Service() {
    return (
        <div>
            <h2 className="service-title">Our Services</h2>
            <div className="service-container">

                <div className="service-item">
                    <h4> Web Design and Development</h4>
                    <img className="service-img" src="/assets/web_development.avif" alt="Web Development" />
                    <p>
                        🌐 Build stunning, responsive, and user-friendly websites that represent your brand and deliver seamless user experiences.
                    </p>
                </div>

                <div className="service-item">
                    <h4> Digital Marketing</h4>
                    <img className="service-img" src="/assets/digital_mark.jfif" alt="Digital Marketing" />
                    <p>
                        📈 Elevate your brand with strategic marketing campaigns designed to increase visibility, engagement, and conversions.
                    </p>
                </div>

                <div className="service-item">
                    <h4> Video Editing</h4>
                    <img className="service-img" src="/assets/video_editing.webp" alt="Video Editing" />
                    <p>
                        🎥 Transform your raw footage into captivating videos with professional editing, effects, and storytelling techniques.
                    </p>
                </div>

                <div className="service-item">
                    <h4> Search Engine Optimization</h4>
                    <img className="service-img" src="/assets/seo.webp" alt="SEO" />
                    <p>
                        🔍 Boost your website's ranking on search engines and attract organic traffic with our expert SEO strategies.
                    </p>
                </div>

                <div className="service-item">
                    <h4> Graphics Designing</h4>
                    <img className="service-img" src="/assets/graphics.jfif" alt="Graphics Designing" />
                    <p>
                        🎨 Create eye-catching visuals and designs that communicate your brand message effectively across all platforms.
                    </p>
                </div>
            </div>
        </div>
    );
}
