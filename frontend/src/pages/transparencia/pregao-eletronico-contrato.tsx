import { Fragment } from 'react';
import Header from '../../components/Header';
import TemplateContracts from '../../components/TransparencyPortal/TemplateContracts';

const ElectronicTrading = () => {
  const contracts = [
    {
      title: 'PREGÃO ELETRÔNICO',
    },
  ];

  return (
    <Fragment>
      <Header />
      <TemplateContracts contracts={contracts} />
    </Fragment>
  );
};

export default ElectronicTrading;
