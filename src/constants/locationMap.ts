import imgCall from '../images/call.png';
import imgGoogleMeet from '../images/google-meet.png';
import imgLink from '../images/link.png';
import imgLocation from '../images/location.png';
import challengesIcon from '../redux/reducers/challenges';

const locationMap: {
  [type: string]: {
    identifierKey: string;
    display: string;
    image: any;
    message?: string;
  };
} = {
  inPerson: {
    identifierKey: 'address',
    display: 'In-Person Meeting',
    image: imgLocation
  },
  link: {
    identifierKey: 'link',
    display: 'Web Conference',
    image: imgLink,
    message: 'More details provided upon confirmation'
  },
  userPhone: {
    identifierKey: 'hostPhoneNumber',
    display: 'Phone',
    image: imgCall
  },
  challengesIcon: {
    identifierKey: 'hostPhoneNumber',
    display: 'Phone',
    image: imgCall
  },
  'integrations:google:meet': {
    identifierKey: 'type',
    display: 'Google Meet',
    image: imgGoogleMeet,
    message: 'More details provided upon confirmation'
  }
};

export default locationMap;
