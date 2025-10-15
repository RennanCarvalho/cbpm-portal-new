import { InferGetServerSidePropsType } from 'next';
import { Fragment } from 'react';
import CredentialCBPMComponent from '../../../components/CredentialCBPM';
import Header from '../../../components/Header';
import { setupAPIClient } from '../../../services/setupAPIClient';
import { withSSRAuth } from '../../../utils/withSSRAuth';

const CredentialCBPM = (
  props: any
): InferGetServerSidePropsType<typeof getServerSideProps> => {
  return (
    <Fragment>
      <Header />
      <CredentialCBPMComponent {...props} />
    </Fragment>
  );
};

export const getServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get<any>('/user/show-credentials');

  const data = JSON.parse(JSON.stringify(response.data));
  return {
    props: { props: data },
  };
});

export default CredentialCBPM;
