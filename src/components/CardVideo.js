import "../styles/components/_Card-video.scss";

const CardVideo = ({ video }) => {
  return (
    <article className="video">
      <iframe
        aria-label={`${video.name}`}
        title={video.name}
        gyroscope="true"
        encrypted-media="false"
        frameBorder="1"
        src={`https://www.youtube.com/embed/${video.key}`}
        allowFullScreen
      />
    </article>
  );
};

export default CardVideo;
