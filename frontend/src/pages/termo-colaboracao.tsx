import {
  Box,
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { Attachment } from '../components/CollaborationTerm/Attachment';
import { CollaborationTermComponent } from '../components/CollaborationTerm/CollaborationTerm';
import { Extract } from '../components/CollaborationTerm/Extact';
import { Manual } from '../components/CollaborationTerm/Manual';
import { Ordinance } from '../components/CollaborationTerm/Ordinance';
import { TechnicalNote } from '../components/CollaborationTerm/TechnicalNote';
import { WorkPlan } from '../components/CollaborationTerm/WorkPlan';
import Header from '../components/Header';

const CollaborationTerm = () => {
  return (
    <Fragment>
      <Header />

      <Container
        maxW="1280px"
        w="100%"
        minH="100vh"
        bgImage="url('/bg_cbpm.png')"
        bgSize="650px 650px"
        bgRepeat="no-repeat"
        bgPosition="top right"
        fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
      >
        <Heading
          as="h1"
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          color="blue.default"
          textAlign="left"
          mt={10}
          mb={5}
        >
          TERMO DE COLABORAÇÃO
        </Heading>

        <Box>
          <Tabs>
            <TabList overflowX="scroll" overflowY="hidden">
              <Tab fontWeight="700" _focus={{ boxShadow: 'unset' }}>
                TERMO DE COLABORAÇÃO
              </Tab>
              <Tab fontWeight="700" _focus={{ boxShadow: 'unset' }}>
                EXTRATO
              </Tab>
              <Tab fontWeight="700" _focus={{ boxShadow: 'unset' }}>
                PLANO DE TRABALHO
              </Tab>
              <Tab fontWeight="700" _focus={{ boxShadow: 'unset' }}>
                PORTARIA
              </Tab>
              <Tab fontWeight="700" _focus={{ boxShadow: 'unset' }}>
                MANUAL
              </Tab>
              <Tab fontWeight="700" _focus={{ boxShadow: 'unset' }}>
                NOTA TÉCNICA
              </Tab>
              <Tab fontWeight="700" _focus={{ boxShadow: 'unset' }}>
                ANEXO
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <CollaborationTermComponent />
              </TabPanel>

              <TabPanel>
                <Extract />
              </TabPanel>

              <TabPanel>
                <WorkPlan />
              </TabPanel>

              <TabPanel>
                <Ordinance />
              </TabPanel>

              <TabPanel>
                <Manual />
              </TabPanel>

              <TabPanel>
                <TechnicalNote />
              </TabPanel>

              <TabPanel>
                <Attachment />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Fragment>
  );
};

export default CollaborationTerm;
