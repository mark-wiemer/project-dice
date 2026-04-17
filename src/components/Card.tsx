type Props = {
  title: string;
  image: string;
  description: string;
};

export default function Card({ title, image, description }: Props) {
  return (
    <div className="card">
      <div className="card-top">
        <p>{title}</p>
      </div>

      <img className="card-image" src={image} alt={title} />

      <div className="card-bottom">
        <p>{description}</p>
      </div>
    </div>
  );
}