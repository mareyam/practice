import React, { useState } from "react";
import chips from "@/data/Chips";
import { Box, HStack } from "@chakra-ui/react";

const Test = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  return (
    <HStack display="flex">
      <h1>Product List</h1>
      <Box>
        <ul>
          {chips.map((product) => (
            <li key={product.id} onClick={() => handleClick(product.video)}>
              <h2>{product.name}</h2>
              <p>Price: ${product.price.toFixed(2)}</p>
              <iframe
                width="560"
                height="315"
                src={product.video}
                title="Selected Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </li>
          ))}
        </ul>
      </Box>
      <Box border="2px solid red">
        {selectedVideo && (
          <iframe
            width="560"
            height="315"
            src={selectedVideo}
            title="Selected Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </Box>
    </HStack>
  );
};

export default Test;
