// utils.js

export function decodeHTMLEntities(text) {
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
