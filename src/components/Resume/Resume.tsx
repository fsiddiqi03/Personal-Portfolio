import React, { useEffect, useRef } from "react";
import WebViewer, { WebViewerInstance } from "@pdftron/webviewer";
import "./resume.css";
import resume from "./resume.pdf";

const Resume = () => {
  const viewerDiv = useRef<HTMLDivElement>(null);
  const instance = useRef<WebViewerInstance | null>(null);

  useEffect(() => {
    if (viewerDiv.current && !instance.current) {
      WebViewer(
        {
          path: "/public",
          initialDoc: resume,
        },
        viewerDiv.current
      ).then((inst) => {
        instance.current = inst;
      });
    }
    // Optional: Cleanup function to handle component unmount
    return () => {
      if (instance.current) {
        // Perform cleanup if necessary, e.g., destroying the WebViewer instance
        // instance.current.destroy();
      }
    };
  }, []); // Ensures this effect runs only once on mount

  return (
    <div className="Resume">
      <div className="webviewer" ref={viewerDiv}></div>
    </div>
  );
};

export default Resume;
