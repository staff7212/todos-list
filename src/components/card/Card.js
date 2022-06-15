
import "./card.scss";

const Card = (props) => {
  console.log('card');
  return (
    <div className='card'>{props.children}</div>
  );
};

export default Card;