import { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { USER_PROFILE } from '../../utils/actions';
import { QUERY_USER } from '../../utils/queries';
import { useStoreContext } from '../../utils/store-context';

import './style.scss';

export default function Profile() {
  const [user, dispatch] = useStoreContext('user');
  const { data, loading } = useQuery(QUERY_USER);

  useEffect(() => {
    if (data && data.user) {
      dispatch({ type: USER_PROFILE, payload: data.user })
    }
  }, [data]);

  return (
    <div id="myFilters-page">
      <h1>myFilters
        <h6>
            announcements you have started
        </h6>
      </h1>

      {loading && (
        <h2 className="loading-data">
          Loading user data...
        </h2>
      )}

      {user?.myfilters && (
        <ul className="display-user">
          <li>
            <span className="display-user__label">Name:</span> <span>{user.myfilters.firstName} {user.myfilters.lastName}</span>
          </li>
          <li>
            <span className="display-user__label">Email:</span> <span>{user.myfilters.email}</span>
          </li>
        </ul>
      )
      }
    </div>
  );
};

