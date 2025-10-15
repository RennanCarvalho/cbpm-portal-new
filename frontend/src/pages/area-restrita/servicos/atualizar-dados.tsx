import { InferGetServerSidePropsType } from 'next';
import { Fragment } from 'react';
import Header from '../../../components/Header';
import UpdateUserData from '../../../components/UpdateUserData';
import { UserProps } from '../../../DTO/UserDTO';
import { setupAPIClient } from '../../../services/setupAPIClient';
import { withSSRAuth } from '../../../utils/withSSRAuth';

const UpdateData = (
  props: UserProps,
): InferGetServerSidePropsType<typeof getServerSideProps> => {
  return (
    <Fragment>
      <Header />
      <UpdateUserData {...props} />
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

export default UpdateData;
