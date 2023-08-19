import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import { generateDate } from '@/modules/utils';
import { truncate } from '@/modules/utils';

export default function ShowcaseImage({ index, variants, image }) {
  return (
    <motion.div variants={variants} key={index} className="image-container">
      <div className="hover-container">
        <p className="img-title">{truncate(image?.caption, 50)}</p>
        <div className="image-detail">
          <p>{generateDate(image?.createdAt)}</p>
          <div className='like-detail'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              height={24}
              width={24}
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            <p>{image?.like}</p>
          </div>
        </div>
      </div>
      <LazyLoadImage src={image?.imageUrl} alt={image?.title} />
    </motion.div>
  );
}
