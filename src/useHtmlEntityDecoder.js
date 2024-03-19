// useHtmlEntityDecoder.js
import { useEffect } from 'react';
import he from 'he';

const useHtmlEntityDecoder = () => {
  useEffect(() => {
    window.decodeHTMLEntities = function(text) {
      return text.replace(/&quot;|&amp;|&lt;|&gt;|&#39;/g, function (match) {
        return {
          '&quot;': '"',
          '&amp;': '&',
          '&lt;': '<',
          '&gt;': '>',
          '&#39;': '\''
        }[match];
      });
    };
    return () => {
      delete window.decodeHTMLEntities;
    };
  }, []);
};

export default useHtmlEntityDecoder;
