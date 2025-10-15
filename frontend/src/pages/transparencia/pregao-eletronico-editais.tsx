import { Fragment } from 'react';
import Header from '../../components/Header';
import TemplateContracts from '../../components/TransparencyPortal/TemplateContracts';
import electronicTrading from '../../components/TransparencyPortal/TemplateContracts/electronicTrading.json';

const ElectronicTrading = () => {
  return (
    <Fragment>
      <Header />
      <TemplateContracts contracts={electronicTrading} />
    </Fragment>
  );
};

export default ElectronicTrading;
