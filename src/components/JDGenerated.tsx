import React, { useRef, useContext } from 'react';

import { AppContext } from '../utils/appContext';

import Modal from './elements/Modal';

import { Remarkable } from 'remarkable';
import DOMPurify from 'isomorphic-dompurify';

const JDGenerated = () => {
  const { setView, jobDesc } = useContext(AppContext);

  const hiddenDivRef = useRef<HTMLDivElement>(null);

  const md = new Remarkable();

  const formatJDasMD = (description: string) => {
    // Use Remarkable to convert markdown to HTML
    const rawHtml = md.render(description);

    // Sanitize the HTML to avoid XSS attacks
    return DOMPurify.sanitize(rawHtml);
  };

  const clear = () => {
    setView('form');
  };

  const copyToClipboard = () => {
    if (hiddenDivRef.current) {
      const range = document.createRange();
      range.selectNode(hiddenDivRef.current);

      const selection = window.getSelection();

      if (selection) {
        try {
          selection.removeAllRanges();
          selection.addRange(range);
          document.execCommand('copy');
          selection.removeAllRanges();
          alert('Job description copied to clipboard successfully!');
        } catch (err) {
          console.error('Failed to copy text: ', err);
          alert('Failed to copy job description. Please try again.');
        }
      }
    } else {
      alert('Unable to copy. Please try again.');
    }
  };

  return (
    <Modal onClose={() => setView('')}>
      <div className="h-full">
        <div className=" h-[95%] overflow-y-scroll ">
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(formatJDasMD(jobDesc)),
            }}
            className="text-sm  text-black dark:text-gray-300 prose  prose-li:list-disc  prose-headings:text-black dark:prose-headings:text-white prose-headings:text-lg"
          ></div>

          <div
            ref={hiddenDivRef}
            dangerouslySetInnerHTML={{
              __html: formatJDasMD(jobDesc),
            }}
            style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}
          ></div>
        </div>

        <div className="flex items-center gap-x-3 justify-between mt-4 bg-transparent px-5">
          <button
            onClick={clear}
            className=" bg-tranparent text-black dark:text-white border border-black dark:border-gray-600 w-full py-2 rounded-xl"
          >
            Clear
          </button>

          <button
            className=" bg-black dark:bg-gray-600 text-white  border border-black w-full py-2 rounded-xl"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default JDGenerated;
