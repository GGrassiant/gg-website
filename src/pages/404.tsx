// Libs
import React, { useState, Suspense } from 'react';
import useSWR, { SWRConfig } from 'swr';
import { useIntl } from 'react-intl';
import axios from 'axios';

// Styles
import {
  FOFWrapper,
  FOFImageWrapper,
  DoggoPictureSkeleton,
} from '../components/Pages/404-styles';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import doggos from '../images/doggos.jpg';

// Components
import withLayout from '../Hoc/PageWrapper/WithLayout';
import SEO from '../components/seo';
import Loader from '../components/Loader';

const DoggoProfile: React.FC = () => {
  const [doggoPictureLoaded, setDoggoPictureLoaded] = useState<boolean>(false);
  const intl = useIntl();
  const { data, error } = useSWR('https://dog.ceo/api/breeds/image/random');

  const handleImageLoad = () => setDoggoPictureLoaded(true);

  return (
    <>
      <FOFImageWrapper
        alt="dogs are the best"
        src={error ? doggos : data?.data?.message}
        doggoPictureLoaded={doggoPictureLoaded}
        onLoad={handleImageLoad}
      />
      <DoggoPictureSkeleton doggoPictureLoaded={doggoPictureLoaded}>
        <div />
      </DoggoPictureSkeleton>
      <h1>{intl.formatMessage({ id: 'not-found' })}</h1>
      <p>{intl.formatMessage({ id: 'good-doggo' })}</p>
    </>
  );
};

const DoggoProfileContainer: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <DoggoProfile />
  </Suspense>
);

const fetcher = (url: string) => axios(url);

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
