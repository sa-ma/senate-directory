import React from 'react';
import PropTypes from 'prop-types';

const message = "Gooday Sir,\nI'm a concerned constituent and I'm writing this mail to condemn the anti social media bill currently in the committee stage at the red chamber and to implore you to vote against the bill.\n I urge you Sir in your capacity to vote against the bill and also speak against the bill in further plenary sessions. The right to speech and freedom of expression is an essential feature of democracy and when this is threatened, our democracy is threatened.\nBest Regards";
const Hit = ({ hit }) => (
  <div className="senator-details">
    <div className="senator-name">
      <div>{hit.name}</div>
      <div className="senator-state">{hit.state}</div>
    </div>
    <div className="senator-contact">
      <a
        href={`mailto:${
          hit.email
        }?subject=Anti Social Media Bill &body=${message}`}
        className="icon-link"
      >
        <i className="fas fa-envelope" />
      </a>
      <a href={`tel:${hit.phoneNo}`} className="icon-link">
        <i className="fas fa-phone" />
      </a>
    </div>
  </div>
);

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;
