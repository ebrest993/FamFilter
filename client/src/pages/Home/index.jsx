import './style.scss';
import React from 'react';
import { useQuery} from '@apollo/client';
import {QUERY_THREADS} from '../../utils/queries.js';

export default function Home() {
  const { data } = useQuery(QUERY_THREADS);
  const threads = data?.threads || [];
  console.log('heeeeeeeres Data: ', data);
  return (
    <div id="home-page">
      <h1 id="dashboard">home
        <h6>
          all announcements
        </h6>
        {threads.map((threads) => {
          return (
          <p>
            {threads.messages[0].message}
          </p>
        )})}
      </h1>
    </div>
  );
}
