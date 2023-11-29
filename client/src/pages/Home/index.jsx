import './style.scss';
import React from 'react';
import { gql, useQuery} from '@apollo/client';
import {QUERY_THREADS} from '../../utils/queries.js';

export default function Home() {
  const { loading, error, data } = useQuery(QUERY_THREADS);
  console.log('heeeeeeeres Data: ', data);
  return (
    <div id="home-page">
      <h1 id="dashboard">home
        <h6>
          all announcements
        </h6>
        {data?.threads.map(... => {
          <p>
          </p>
            {threads.messages[0].message}
        })}
      </h1>
    </div>
  );
}
