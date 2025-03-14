import Link from 'next/link';
import PropTypes from 'prop-types';
import Card from './styled/Card';
import Image from './styled/Image';

function RestaurantItem({ id, pictureId, name, description }) {
  return (
    <Card>
      <Image
        src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
        height="250px"
        alt={name}
      />

      <div className="container">
        <h2><Link href={`/detail/${id}`}>{name}</Link></h2>
        <p>{description}</p>
        <br />
      </div>
    </Card>
  );
}

RestaurantItem.propTypes = {
  id: PropTypes.string.isRequired,
  pictureId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RestaurantItem;