import data from "../assets/texts/text.json";

const GalleryPage = () => {
  const images = require.context("../assets/images", true);
  const imageList = images.keys().map((image) => images(image));
  console.log("data---", data.texts);

  const ImageGrid = imageList.map((image, index) => (
    <li>
      <span>{data.texts[index].text}</span>
      <img key={index} src={image} alt={`img-${index}`} />
    </li>
  ));

  return (
    <div className="Gallery">
      <ul>{ImageGrid}</ul>
    </div>
  );
};

export default GalleryPage;
