// HtmlDecode.js
import React from 'react';
import he from 'he';

const HtmlDecode = ({ content }) => {
  return <>{he.decode(content)}</>;
};

export default HtmlDecode;
