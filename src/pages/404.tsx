// Libs
import React from 'react';
import useSWR from 'swr';

// Styles
import { FOFWrapper, FOFWrapperContent } from '../components/Pages/404-styles';

// Components
import withLayout from '../Hoc/PageWrapper/WithLayout';
import SEO from '../components/seo';
import Loader from '../components/Loader';

const NotFoundPage: React.FC = () => {
  const getRandomDog = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    'https://dog.ceo/api/breeds/image/random',
    getRandomDog,
  );

  return (
    <FOFWrapper>
      <SEO title="404" />
      {(error || !data) && <Loader />}
      {data && data.status === 'success' && data.message && (
        <FOFWrapperContent>
          <img src={data.message} alt="doggo" />
          <h1>NOT FOUND</h1>
          <p>
            You just hit a route that doesn&#39;t exist... the sadness. Here is
            a very good boy or girl to make it up.
          </p>
        </FOFWrapperContent>
      )}
    </FOFWrapper>
  );
};

export default withLayout(NotFoundPage);
