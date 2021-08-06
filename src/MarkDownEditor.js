import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./styles.css";

const Markdownreact = () => {
  const [markDown, setMarkDown] = useState("# Markdown Editor.....\n## Edit to see magic happen!");
  return (
    <>
      <div className="center-div">
        <textarea
          className="left-side"
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
        ></textarea>

        <div className="right-side">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Markdownreact;
