// Libs
import React, { Suspense } from 'react';
import useSWR, { SWRConfig } from 'swr';
import axios from 'axios';

// Styles
import {
  FOFWrapper,
  FOFWrapperContent,
  FOFImageWrapper,
} from '../components/Pages/404-styles';

// Components
import withLayout from '../Hoc/PageWrapper/WithLayout';
import SEO from '../components/seo';
import Loader from '../components/Loader';

const DoggoProfile: React.FC = () => {
  const { data } = useSWR('https://dog.ceo/api/breeds/image/random');

  return (
    <FOFWrapperContent>
      <FOFImageWrapper>
        <img alt={data?.data?.message} src={data?.data?.message} />
      </FOFImageWrapper>
      <h1>NOT FOUND</h1>
      <p>
        You just hit a route that doesn&#39;t exist... the sadness. Here is a
        very good boy or girl to make it up.
      </p>
    </FOFWrapperContent>
  );
};

const DoggoProfileContainer: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <DoggoProfile />
  </Suspense>
);

const fetcher = (url: string) =>
  axios(url).then(
    (response) =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve(response);
        }, 0),
      ),
  );

const NotFoundPage: React.FC = () => {
  return (
    <SWRConfig
      value={{
        fetcher,
        suspense: true,
      }}
    >
      <FOFWrapper>
        <SEO title="404" />
        <DoggoProfileContainer />
      </FOFWrapper>
    </SWRConfig>
  );
};

export default withLayout(NotFoundPage);
