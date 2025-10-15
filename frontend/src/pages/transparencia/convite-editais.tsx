import { Fragment } from 'react';
import Header from '../../components/Header';
import TemplateContracts from '../../components/TransparencyPortal/TemplateContracts';

const Invitation = () => {
  const contracts = [
    {
      title: 'CONVITE',
    },
  ];

  return (
    <Fragment>
      <Header />
      <TemplateContracts contracts={contracts} />
    </Fragment>
  );
};

export default Invitation;
