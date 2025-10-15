import { Fragment } from 'react';
import Header from '../../components/Header';
import TemplateContracts from '../../components/TransparencyPortal/TemplateContracts';
import concurrenceNotice from '../../components/TransparencyPortal/TemplateContracts/concurrenceNotice.json';

const Concurrence = () => {
  return (
    <Fragment>
      <Header />
      <TemplateContracts contracts={concurrenceNotice} />
    </Fragment>
  );
};

export default Concurrence;
