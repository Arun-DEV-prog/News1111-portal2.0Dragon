import { FaRegBookmark, FaRegEye } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { FiShare2 } from 'react-icons/fi';
import PropTypes from 'prop-types';
import moment from 'moment';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    total_view,
    rating,
  } = news;

  return (
    <div className="bg-base-100 shadow-lg rounded-xl p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <p className="font-semibold text-base">{author.name}</p>
            <p className="text-sm text-gray-500">
              {moment(author.published_date).format('YYYY-MM-DD')}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-600 text-lg">
          <FaRegBookmark className="cursor-pointer" />
          <FiShare2 className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold leading-snug">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt="News Thumbnail"
        className="w-full h-60 object-cover rounded-xl"
      />

      {/* Description */}
      <p className="text-gray-700">
        {details.length > 250 ? (
          <>
            {details.slice(0, 250)}...
            <span className="text-blue-600 font-semibold cursor-pointer"> Read More</span>
          </>
        ) : (
          details
        )}
      </p>

      {/* Footer: Rating and Views */}
      <div className="flex items-center justify-between pt-2 border-t">
        <div className="flex items-center text-orange-400">
          {Array.from({ length: 5 }, (_, i) => (
            <AiFillStar key={i} className={i < rating.number ? 'text-orange-500' : 'text-gray-300'} />
          ))}
          <span className="ml-2 text-gray-800 font-medium">{rating.number}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaRegEye className="mr-2" />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

// ✅ Prop Types
NewsCard.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string,
      published_date: PropTypes.string,
      img: PropTypes.string,
    }).isRequired,
    image_url: PropTypes.string,
    details: PropTypes.string,
    total_view: PropTypes.number,
    rating: PropTypes.shape({
      number: PropTypes.number,
    }),
  }).isRequired,
};

export default NewsCard;
