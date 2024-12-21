import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';

const Document: React.FC = () => {
  const [text, setText] = useState<string>(''); // Holds the current input
  const [documentContent, setDocumentContent] = useState<string[]>([]); // Holds the lines of text in the document
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null); // Tracks the recently added message's index
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents adding a new line in the textarea
      if (text.trim()) {
        // Add the new message to the document
        setDocumentContent((prevContent) => [...prevContent, text.trim()]);
        setHighlightedIndex(documentContent.length);  // Set the index of the newly added message for highlighting
        setText(''); // Clear the textarea after adding the message
      }
    }
  };

  useEffect(() => {
    if (highlightedIndex !== null) {
      const timeoutId = setTimeout(() => {
        setHighlightedIndex(null);  // Remove the highlight after 2 seconds
      }, 2000);
      return () => clearTimeout(timeoutId);  // Clean up the timeout when necessary
    }
  }, [highlightedIndex]);

  return (
    <div>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)} // Updates the input text
        onKeyDown={handleKeyPress}  // Triggered on Enter key press
        placeholder="Type your message here..."
        rows={4}
        cols={50}
      />
      <div className="document-container">
        {documentContent.map((line, index) => (
          <div
            key={index}
            className={index === highlightedIndex ? 'highlighted' : ''} // Apply highlight to the most recent message
          >
            {line}
          </div>
        ))}
      </div>

      {/* Styles */}
      <style jsx>{`
        .document-container {
          margin-top: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          max-width: 500px;
          height: 200px;
          overflow-y: auto;
        }

        .highlighted {
          background-color: blue;
          color: white;
          transition: background-color 2s ease-out;
        }

        textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
        }
      `}</style>
    </div>
  );
};

export default Document;
