import { Fragment } from 'react';
import Header from '../../components/Header';
import TemplateContracts from '../../components/TransparencyPortal/TemplateContracts';

const RealStateLease = () => {
  const contracts = [
    {
      title: 'LOCAÇÃO IMOBILIÁRIA',
    },
  ];

  return (
    <Fragment>
      <Header />
      <TemplateContracts contracts={contracts} />
    </Fragment>
  );
};

export default RealStateLease;
