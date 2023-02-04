import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { NotificationActions } from '../../redux/actions';

import { useSubscription } from '@apollo/react-hooks';
import { ApolloProvider } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import FoundationGuestNavbar from '@foundation-base/navbarguest';
import FoundationNavbar from '@foundationcomponentrepo/navbar';

import apolloClient from '../../common-utils/apolloSetup';
import { lsGetToken } from '../../common-utils/helper';
import imgLogo from '../../images/logo.png';

// --------------------------------------------------------
// Custom Navbar Component utilizing Foundation Base Navbar
// --------------------------------------------------------

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const SUBSCRIBE_NOTIFICATION_ADDED = gql`
    subscription onNotificationAdded($recipientId: Int!) {
      notificationAdded(recipientId: $recipientId) {
        notificationTitle
        recipientId
        senderId
        type
        category
        icon
      }
    }
  `;

  const reduxNotifications = useAppSelector(
    (state) => state.Notifications.notifications
  );

  const { data, error, loading } = useSubscription(
    SUBSCRIBE_NOTIFICATION_ADDED,
    {
      variables: {
        recipientId: lsGetToken() ? lsGetToken().userId : null
      }
    }
  );

  useEffect(() => {
    const session = lsGetToken();
    if (session) dispatch(NotificationActions.getNotifications(session.userId));
  }, [data]);

  const reduxProfileState = useAppSelector((state) => state.Profile);

  const redirectPath = (path: any) => {
    window.location = path;
  };

  return lsGetToken() ? (
    <div className="sticky z-40 top-0">
      <FoundationNavbar
        logo={{
          image: imgLogo,
          redirect() {
            redirectPath('/');
          }
        }}
        navs={[
          {
            type: 'link',
            label: 'Home',
            isActive:
              location.pathname.split('/').find((slug) => slug === 'home') !==
              undefined,
            redirect() {
              redirectPath('/home');
            }
          },
          {
            type: 'link',
            label: 'My Calendar',
            isActive:
              location.pathname
                .split('/')
                .find((slug) => slug === 'calendar') !== undefined,
            redirect() {
              redirectPath('/calendar');
            }
          },
          {
            type: 'dropdown',
            label: 'Widgets',
            isActive:
              location.pathname
                .split('/')
                .find((slug) => slug === 'widgets') !== undefined,
            dropdown: {
              default: [
                {
                  label: 'Widget Store',
                  redirect() {
                    redirectPath('/widgets/store');
                  }
                }
              ],
              'My Widgets': [
                {
                  label: 'Pomodoro Timer',
                  redirect() {
                    redirectPath('/widgets/pomodoro');
                  }
                },
                {
                  label: 'Shortcut Shark',
                  redirect() {
                    redirectPath('/widgets/shortcut-shark');
                  }
                },
                {
                  label: 'Typing Tiger',
                  redirect() {
                    redirectPath('/widgets/typing-tiger');
                  }
                }
              ]
            }
          },
          {
            type: 'link',
            label: 'Challenges',
            isActive:
              location.pathname
                .split('/')
                .find((slug) => slug === 'all-challenges') !== undefined,
            redirect() {
              redirectPath('/all-challenges');
            }
          },
          {
            type: 'link',
            label: 'Certified Productive',
            isActive:
              location.pathname
                .split('/')
                .find((slug) => slug === 'certified-productive') !== undefined,
            redirect() {
              redirectPath('/certified-productive');
            }
          }
        ]}
        notifications={{
          id: 1,
          count: 0,
          dropdown: reduxNotifications
            ? reduxNotifications
                .map((notification) => {
                  return {
                    type: 'link',
                    id: notification.notificationId,
                    label: notification.notificationTitle,
                    icon: 'pomoDoro',
                    timeStamp: '1',
                    redirect: redirectPath
                  };
                })
                .reverse()
            : []
        }}
        profile={{
          image: reduxProfileState.myProfile?.pictureUrl || '',
          alt:
            `${reduxProfileState.myProfile?.firstName?.at(0)}` +
            `${reduxProfileState.myProfile?.lastName?.at(0)}`,
          dropdown: {
            default: [
              {
                label: 'About',
                redirect() {
                  redirectPath('/profile/about');
                }
              },
              {
                label: 'Additional Settings',
                redirect() {
                  redirectPath('/profile/additional-settings');
                }
              },
              {
                label: 'Referrals',
                redirect() {
                  redirectPath('/profile/referrals');
                }
              },
              {
                label: 'Contacts',
                redirect() {
                  redirectPath('/profile/contacts');
                }
              },
              {
                label: 'Analytics',
                redirect() {
                  redirectPath('/profile/analytics');
                }
              },
              {
                label: 'View Product Tour',
                redirect() {
                  redirectPath('/tour');
                }
              },
              {
                label: 'Signout',
                redirect() {
                  redirectPath('/signout');
                }
              }
            ]
          }
        }}
      />
    </div>
  ) : (
      <div className="sticky z-40 top-0">
        <FoundationGuestNavbar
          logoImgSrc={imgLogo}
          logoHref="/"
          login={{
            label: 'Login',
            href: '/auth/login'
          }}
          signup={{
            label: 'Create Account',
            href: '/auth/signup'
          }}
        />
      </div>
  );
};

export default Navbar;
