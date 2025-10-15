import { InferGetServerSidePropsType } from 'next';
import Extracts from '../../../../components/Extracts/index';
import Header from '../../../../components/Header';
import { AuthProvider } from '../../../../contexts/AuthContext';
import { setupAPIClient } from '../../../../services/setupAPIClient';
import { withSSRAuth } from '../../../../utils/withSSRAuth';

const Extract = ({
  isAuthorized,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <AuthProvider>
      <Header />
      <Extracts isAuthorized={isAuthorized} />
    </AuthProvider>
  );
};

export const getServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get<boolean>('/user/category');

  const isAuthorized = response.data;

  return {
    props: { isAuthorized },
  };
});

export default Extract;
