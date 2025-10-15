import { InferGetServerSidePropsType } from 'next';
import { Fragment } from 'react';
import HealthDeclarationComponent from '../../../../components/Forms/HealthDeclaration';
import Header from '../../../../components/Header';
import { UserProps } from '../../../../DTO/UserDTO';
import { setupAPIClient } from '../../../../services/setupAPIClient';
import { withSSRAuth } from '../../../../utils/withSSRAuth';

const HealthDeclaration = (
  props: UserProps
): InferGetServerSidePropsType<typeof getServerSideProps> => {
  return (
    <Fragment>
      <Header />
      <HealthDeclarationComponent {...props} />
    </Fragment>
  );
};

export const getServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get<UserProps>('/user/show');

  const userData: UserProps = response.data;

  return {
    props: JSON.parse(JSON.stringify(userData)),
  };
});

export default HealthDeclaration;
