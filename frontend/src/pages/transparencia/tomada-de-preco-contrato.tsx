import { Fragment } from 'react';
import Header from '../../components/Header';
import TemplateContracts from '../../components/TransparencyPortal/TemplateContracts';

const TakingPrice = () => {
  const contracts = [
    {
      title: 'TOMADA DE PREÇO',
    },
  ];

  return (
    <Fragment>
      <Header />
      <TemplateContracts contracts={contracts} />
    </Fragment>
  );
};

export default TakingPrice;
