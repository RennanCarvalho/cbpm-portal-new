import { Fragment } from 'react';
import Header from '../../components/Header';
import TemplateContracts from '../../components/TransparencyPortal/TemplateContracts';

const Concurrence = () => {
  const contracts = [
    {
      title: 'CONCORRÊNCIA',
    },
  ];

  return (
    <Fragment>
      <Header />
      <TemplateContracts contracts={contracts} />
    </Fragment>
  );
};

export default Concurrence;
