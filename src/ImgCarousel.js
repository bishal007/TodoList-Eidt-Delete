import { useEffect, useState } from "react";
import "./styles.css";

const data = [
  "https://wallpapers.com/images/hd/random-pictures-ugouhhnlc2oe689b.jpg",
  "https://static.vecteezy.com/system/resources/previews/027/749/651/non_2x/random-lines-and-mathematics-educational-elements-background-isolated-on-black-square-wallpaper-template-simple-flat-monochrome-wallpaper-backdrop-free-vector.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2UFDXhiqg7cw1uYa9v0PfF9Veg81qPFYrCg&s",
  "https://live.staticflickr.com/8025/7184048493_6a8d9923a1_b.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjr-7GAKFba4WNkfqsUV7frDEo7qhuwoCQKejgo6jIulDbJ5ktSZpWtWZJHHDXux93QTFfU9OGOmpQUTJoq3mRgYNE4pryvvHCK4pdTtrIXCIrLQd_LN9KqqL1FABlGUJH0Y75M9xEbUa3UA3KOrDArGx8pz7qg0QlvJgRgRONLEbUcc-usyvPtti0WV4az/w361-h220-p-k-no-nu-rw/batman-ben-afleck-heroscreen-desktop-4k.webp",
  "https://wallpapersmug.com/download/1224x1224/069f7c/abstract-texture-colorful-random-surface.jpg",
];

export default function ImgCarousel() {
  const [currentImg, setCurrentImg] = useState(0);
  const handlePrev = () => {
    // if the img goes beyond the range it doesn't show up the item so
    // we are using this edge case
    if (currentImg === 0) {
      setCurrentImg(data.length - 1);
    } else {
      setCurrentImg(currentImg - 1);
    }
  };
  const handleNext = () => {
    setCurrentImg((currentImg + 1) % data.length);
  };
  // for auto scrolling of img
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);
    // it creates lot's of instances of settimeout so it re-renders multiple time
    // so it's a bug to rectify it we have to unmount it every time
    return () => {
      clearTimeout(timer);
    };
  }, [currentImg]);
  return (
    <div className="App">
      {/* tradtional method */}
      {/* <button onClick={handlePrev}> Prev </button>
      <img src={data[currentImg]} alt="img" />
      <button onClick={handleNext}> Next </button> */}
      {/* optimized method */}
      <button onClick={handlePrev}> Prev </button>
      {data.map((url, i) => (
        <img
          src={url}
          key={i}
          // className={
          //   "w-[700px] h-[700px] object-contain " +
          //   (currentImg == i ? "block" : "hidden")
          // } tried but didn't worked
          hidden={currentImg === i ? "" : "hidden"}
          // style={{ display: currentImg === i ? "block" : "hidden" }} tried but didn't worked
          alt="img"
        />
      ))}
      <button onClick={handleNext}> Next </button>
    </div>
  );
}
