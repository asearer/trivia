import { useEffect, useState } from 'react';

function decodeHTMLEntities(text) {
  var entities = {
    '&quot;': '"',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&#39;': '\''
    // Add more entities as needed
  };

  return text.replace(/&quot;|&amp;|&lt;|&gt;|&#39;/g, function (match) {
    return entities[match];
  });
}

function useDecodeHTMLEntities(text) {
  const [decodedText, setDecodedText] = useState('');

  useEffect(() => {
    setDecodedText(decodeHTMLEntities(text));
  }, [text]);

  return decodedText;
}

export default useDecodeHTMLEntities;
