import React from 'react';
import PropTypes from 'prop-types';

const message =
  "Gooday Sir,%0D%0A %0D%0AI'm a concerned constituent and I'm writing this mail to condemn the anti-social media bill currently in the committee stage at the red chamber and to implore you to vote against the bill.%0D%0AI urge you Sir in your capacity to vote against the bill and also speak against the bill in further plenary sessions. The right to speech and freedom of expression is an essential feature of democracy and when this is threatened, our democracy is threatened.%0D%0A %0D%0ABest Regards";
const Hit = ({ hit }) => (
  <div className="senator-details">
    <div className="senator-name">
      <div>{hit.name}</div>
      <div className="senator-state">{hit.state}</div>
    </div>
    <div className="senator-contact">
      {hit.email !== '' ? (
        <a
          title="send email"
          href={`mailto:${
            hit.email
          }?subject=Anti Social Media Bill &body=${message}`}
          className="icon-link"
        >
          <i className="fas fa-envelope" />
        </a>
      ) : (
        ''
      )}

      {hit.phoneNo !== '' ? (
        <>
          <a title="call" href={`tel:${hit.phoneNo}`} className="icon-link">
            <i className="fas fa-phone" />
          </a>

          <a title="send sms" href={`sms:${hit.phoneNo}`} className="icon-link">
            <i className="fas fa-sms" />
          </a>
        </>
      ) : (
        ''
      )}
    </div>
  </div>
);

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;
