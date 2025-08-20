import { StrictMode, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import './index.css';
import Information from './components/Information';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  const pageRef = useRef();

  const handleDownload = async () => {
    const element = pageRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');
  };

  return (
    <StrictMode>
      <div ref={pageRef}>
        <Information />
        <Education />
        <Experience />
      </div>
      <div className="button-container">
        <button className="SubmitPDF" onClick={handleDownload}>
          Download PDF
        </button>
      </div>
    </StrictMode>
  );
}

export default App;
