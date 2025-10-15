import { InferGetServerSidePropsType } from 'next';
import { Fragment } from 'react';
import Header from '../../../components/Header';
import ShortagesComponent from '../../../components/Shortages';
import { setupAPIClient } from '../../../services/setupAPIClient';
import { withSSRAuth } from '../../../utils/withSSRAuth';

const Shortages = (
  props: any,
): InferGetServerSidePropsType<typeof getServerSideProps> => {
  return (
    <Fragment>
      <Header />
      <ShortagesComponent {...props} />
    </Fragment>
  );
};

export const getServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get<any>('/user/show-shortages');

  const userData: any = response.data;

  return {
    props: JSON.parse(JSON.stringify(userData)),
  };
});

export default Shortages;
