import Header from '../../../components/Header';
import ServicesComponent from '../../../components/Services';
import { AuthProvider } from '../../../contexts/AuthContext';

const Services = () => {
  return (
    <AuthProvider>
      <Header />
      <ServicesComponent />
    </AuthProvider>
  );
};

export default Services;
