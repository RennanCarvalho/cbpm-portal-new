import { VStack } from '@chakra-ui/react';
import Header from '../Header';
import { CarouselComponent } from './Carousel';
import WarnPopup from '../WarnPopup';
import { Footer } from './Footer';
import { MainService } from './MainServices';
import { News } from './News';

const HomeComponente = () => {
  return (
    <VStack spacing="24px">
      <Header />
      {/* <WarnPopup /> */}
      <CarouselComponent />
      <MainService />
      <News />
      <Footer />
    </VStack>
  );
};

export default HomeComponente;
