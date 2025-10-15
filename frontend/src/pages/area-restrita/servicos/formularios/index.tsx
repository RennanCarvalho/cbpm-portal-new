import { InferGetServerSidePropsType } from 'next';
import FormComponent from '../../../../components/Forms';
import Header from '../../../../components/Header';
import { AuthProvider } from '../../../../contexts/AuthContext';
import { setupAPIClient } from '../../../../services/setupAPIClient';
import { withSSRAuth } from '../../../../utils/withSSRAuth';

const Forms = ({
  isAuthorized,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <AuthProvider>
      <Header />
      <FormComponent isAuthorized={isAuthorized} />
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

export default Forms;
