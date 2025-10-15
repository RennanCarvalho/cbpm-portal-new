import { Box, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

type FlipCard = {
  imgCard: string;
  imgAlt: string;
  TextContent: any;
};

export const FlipCard = ({ imgCard, imgAlt, TextContent }: FlipCard) => {
  const [flipCard, setFlipCard] = useState(false);

  return (
    <Box maxW="500px" minH="500px" h="100%">
      <ReactCardFlip isFlipped={flipCard} flipDirection="horizontal">
        <Box border="1px solid" borderColor="gray.default" p={5} minH="500px">
          <a onMouseEnter={() => setFlipCard(!flipCard)}>
            <Image src={imgCard} alt={imgAlt}></Image>
          </a>
          <Text fontSize="sm">
            Confira as vantagens exclusivas para contribuintes e beneficiários
            dependentes da CBPM*.
          </Text>
        </Box>

        <div>
          <a onMouseLeave={() => setFlipCard(!flipCard)}>
            <TextContent />
          </a>
        </div>
      </ReactCardFlip>
    </Box>
  );
};
