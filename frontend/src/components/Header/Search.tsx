import { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { FaMicrophone, FaSearch } from 'react-icons/fa';
import pages from '../../pages.json';
import { useRouter } from 'next/router';

interface Page {
  title: string;
  url: string;
  content: string;
}

export const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Page[]>([]);
  const [listening, setListening] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>, v: boolean = false) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
  
    if (searchQuery.length > 0) {      
      let filteredResults = pages.filter(
        (page) =>
          page.title.toLowerCase().includes(searchQuery) ||
          page.content.toLowerCase().includes(searchQuery),
      );

      if (filteredResults.length === 0) {
        const queryWords = searchQuery.split(/\s+/);
        filteredResults = pages.filter((page) => {
          const title = page.title.toLowerCase();
          const content = page.content.toLowerCase();
          return queryWords.every(
            (word) => title.includes(word) || content.includes(word),
          );
        });
      }
  
      setResults(filteredResults);
  
      if (v && filteredResults.length === 1) {
        router.push(filteredResults[0].url);
      }
    } else {
      setResults([]);
    }
  };
  
  const startVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Your browser does not support Speech Recognition.');
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'pt-BR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript.replace(/[\.,\/#!$%\^&\*;:{}=\-_`~()\[\]]/g, '');
      setQuery(transcript);
      handleSearch(
        { target: { value: transcript }, } as React.ChangeEvent<HTMLInputElement>,     
        true
      );
    };

    recognition.onerror = (event: any) => {
      console.error('erro de reconhecimento de voz:', event.error);
    };

    recognition.start();
  };

  return (
    <Flex w="100%" maxW="300px" h="50px" ml="3">
      <InputGroup size="md">
        <InputRightElement>

          <IconButton
            aria-label="pesquisa por voz"
            icon={
            <FaMicrophone
            color={
              listening ? 'red' : '#004DA6'}
              size="22px"/>
          
          }
            size="sm"
            onClick={startVoiceSearch}
            bg={'transparent'}
            _hover={{ bg: 'gray.300' }} // Optional hover effect
          />


        </InputRightElement>

        <Input
          placeholder="Buscar no site"
          bg="gray.200"
          borderRadius="10px"
          fontSize="md"
          _placeholder={{ fontSize: 'md', color: 'black.default' }}
          h="40px"
          value={query}
          onChange={handleSearch}
        />


        {results.length > 0 && (
          <Box
            bg="white"
            mt="2"
            borderRadius="10px"
            borderTopRadius="0"
            boxShadow="md"
            p="2"
            zIndex="10"
            maxH="600px"
            w="300px"
            overflowY="auto"
            position="absolute"
            top="40px"
          >
            {results.map(result => (
              <Text
                key={result.url}
                as="a"
                href={result.url}
                display="block"
                p="2"
                _hover={{ bg: 'gray.100' }}
              >
                {result.title}
              </Text>
            ))}
          </Box>
        )}
      </InputGroup>
    </Flex>
  );
};
