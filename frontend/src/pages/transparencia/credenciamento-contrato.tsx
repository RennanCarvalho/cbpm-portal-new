import { Fragment } from 'react';
import Header from '../../components/Header';
import TemplateContracts from '../../components/TransparencyPortal/TemplateContracts';

const Accreditation = () => {
  const contracts = [
    {
      title: 'CREDENCIAMENTO',
    },
  ];

  return (
    <Fragment>
      <Header />
      <TemplateContracts contracts={contracts} />
    </Fragment>
  );
};

export default Accreditation;
