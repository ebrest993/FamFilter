import './style.scss';
import { useQuery } from '@apollo/client';
import {QUERY_THREADS} from '../../utils/queries.js';

export default function Home() {
  const { loading, data } = useQuery(QUERY_THREADS);
  console.log('heeeeeeeres data: ', data);
  return (
    <div id="home-page">
      <h1 id="dashboard">home
        <h6>
          announcements that involve you
        </h6>
        {/* {data.threads.map((thread) => {
          <p>
            {thread.messages[0].message}
          </p>
        })} */}
      </h1>
    </div>
  );
}

