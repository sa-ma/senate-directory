import React from 'react';
import PropTypes from 'prop-types';

const message =
  'Good day Senator/Speaker/Governor,%0D%0A %0D%0AI am a citizen and constituent of “insert area”. I’m writing you to bring to your attention the #ENDSARS protest currently underway in Nigeria.%0D%0A %0D%0AAs you know, SARS was created to help against armed robbers, however, SARS has spent more time harassing, stealing from and killing innocent people than they have apprehending criminals. The Nigerian government has tried to reform SARS at least 4 times, to no avail.%0D%0A %0D%0AFor this reason, I am calling on you to protect your citizens and call for the disbanding and end of SARS. They can no longer be reformed. They should not be existing. Thank you.%0D%0A %0D%0ABest Regards';
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
          }?subject=Your Citizens Want You to EndSARs Now &body=${message}`}
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
