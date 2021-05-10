// Libs
import React, { useState } from 'react';
import useSWR from 'swr';
import { useIntl } from 'react-intl';

// Utils
import { fetcher } from '../utils/fetcher';

// Styles
import { FOFWrapper, FOFImageWrapper, DoggoPictureSkeleton } from '../components/Pages/404-styles';
import doggos from '../images/doggos.jpg';

// Components
import withLayout from '../Hoc/PageWrapper/WithLayout';
import SEO from '../components/seo';
import Loader from '../components/Loader';

const NotFoundPage: React.FC = () => {
  const [doggoPictureLoaded, setDoggoPictureLoaded] = useState<boolean>(false);
  const intl = useIntl();
  const { data, error } = useSWR('https://dog.ceo/api/breeds/image/random', fetcher);

  const handleImageLoad = () => setDoggoPictureLoaded(true);

  return (
    <FOFWrapper>
      <SEO title="404" />
      {!data && !error && <Loader />}

      {(data || error) && (
        <>
          <FOFImageWrapper
            alt="dogs are the best"
            src={error ? doggos : data?.message}
            doggoPictureLoaded={doggoPictureLoaded}
            onLoad={handleImageLoad}
            data-testid="doggo-img"
          />
          <DoggoPictureSkeleton doggoPictureLoaded={doggoPictureLoaded}>
            <div />
          </DoggoPictureSkeleton>
          <h1>{intl.formatMessage({ id: 'not-found' })}</h1>
          <p>{intl.formatMessage({ id: 'good-doggo' })}</p>
        </>
      )}
    </FOFWrapper>
  );
};

export default withLayout(NotFoundPage);
