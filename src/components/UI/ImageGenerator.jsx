import React, { useRef, useState } from 'react';
import '../../styles/ImageGenerator.css';
import default_image from '../../Components-ai/Assets/default_image.svg';

const ImageGenerator = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const inputRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const imageGenerator = async () => {
        if (inputRef.current.value === "") {
            return;
        }
        setLoading(true);
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer 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",
                    "User-Agent": "Chrome",
                },
                body: JSON.stringify({
                    prompt: inputRef.current.value,
                    n: 3, // Requesting 3 variations
                    size: "512x512",
                }),
            }
        );
        const data = await response.json();
        const dataArray = data.data;
        const urls = dataArray.map(item => item.url);
        setImageUrls(urls);
        setLoading(false);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            imageGenerator();
        }
    }

    const downloadImage = (url) => {
      const link = document.createElement('a');
      link.href = url;
      link.download = 'generated_image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }
  

    return (
        <div className='ai-image-generator'>
            <div className="header">AI Image <span>Generator</span></div>
            <div className="img-loading">
                {imageUrls.length > 0 ? (
                    <div className="image">
                        {imageUrls.map((url, index) => (
                            <div key={index} className="image-container">
                                <img src={url} alt="" />
                                <div className="downloadBtn">
                                <button onClick={() => downloadImage(url)}>View</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="Defaultimage">
                        <img src={default_image} alt="" />
                    </div>
                )}
                <div className="loading">
                    <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
                    <div className={loading ? "loading-text" : "display-none"}>Loading....</div>
                </div>
            </div>
            <div className="search-box">
                <input
                    type="text"
                    ref={inputRef}
                    className='search-input'
                    placeholder='Describe what you want?'
                    onKeyPress={handleKeyPress} // Adding event listener for key press
                />
                <div className="generate-btn" onClick={imageGenerator}>Generate</div>
            </div>
        </div>
    );
}

export default ImageGenerator;
