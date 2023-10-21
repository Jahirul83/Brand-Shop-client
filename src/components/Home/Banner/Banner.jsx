

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.imgur.com/Bwe4i12.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Your Electronics Superstore!</h1>
                        <p className="mb-5">Discover the Latest in Technology and Innovation
                            Feel free to customize this message to match the style and tone of your website, and add any specific details or promotions you would like to highlight to make it even more engaging for your visitors.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;