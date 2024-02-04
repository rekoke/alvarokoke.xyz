const GalleryPage = () => {
  const images = require.context("../assets", true);
  const imageList = images.keys().map((image) => images(image));

  const ImageGrid = imageList.map((image, index) => (
    <img key={index} src={image} alt={`img-${index}`} />
  ));
  console.log("imageList", imageList);
  return <div>{ImageGrid}</div>;
};

export default GalleryPage;
