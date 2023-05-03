import React, { useState } from "react";
import Banner from "./Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Blog = () => {
  const downloadPdf = () => {
    const capture = document.querySelector(".questions");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save("blog.pdf");
    });
  };
  return (
    <div>
      <Banner>
        <div className="text-center text-3xl text-yellow-600 mb-10 font-bold bg-zinc-100">
          <h5
            style={{
              padding: "20px 20px 20px",
            }}
          >
            Questions Answers
          </h5>
          <FontAwesomeIcon
            className={` text-3xl cursor-pointer pb-16`}
            icon={faDownload}
            title="Download"
            onClick={downloadPdf}
          />
        </div>
      </Banner>
      <div className="px-[200px] questions">
        <div className="mb-5">
          <p className="text-2xl text-red-400">
            Q1: What are the differences between uncontrolled and controlled
            components.?
          </p>
          <p className="text-lg">
            Answer: Controlled components are those whose data is managed by
            react on other words react monitors the data user user put and by
            that we can easily validate the data it gives us more control over
            data. Where on the other hand Uncontrolled components are those
            which is managed by DOM and react does not have direct control over
            the data. It does not give us as much freedom over data as react
            Controlled components does
          </p>
        </div>
        <div className="mb-5">
          <p className="text-2xl text-red-400">
            Q2: How to validate React props using PropTypes
          </p>
          <p className="text-lg">
            Answer: To validate react props first we have to install prop types
            than we have to import prop type than we have to declare the prop
            type like [in the component where i am using props]
            <li>components.propTypes =propsObjectName : propTypes.number</li>
            By doing that if a props is send by the name (name) it's value must
            be a number or it will give an warning
            <li>
              <span className="font-bold">Note:</span> There will be a second
              bracket covering the whole components.propTypes value
            </li>
          </p>
        </div>
        <div className="mb-5">
          <p className="text-2xl text-red-400">
            Q3: What is the difference between nodejs and express js?
          </p>
          <p className="text-lg">
            Answer: Node JS alow us to run javascript code outside of browser on
            the other hand Express JS is a framework for back end development
            which gives multiple tools to create API's
          </p>
        </div>
        <div className="mb-5">
          <p className="text-2xl text-red-400">
            Q4: What is a custom hook, and why will I create a custom hook?
          </p>
          <p className="text-lg">
            Answer: Custom hook is a react hook which is created by us. The
            reason I or we should use custom hook is because it is reusable like
            a function.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
