import { useEffect } from "react";
import { Stimulsoft } from "stimulsoft-reports-js/Scripts/stimulsoft.viewer";
import "stimulsoft-reports-js/Css/stimulsoft.viewer.office2013.whiteblue.css";
import "./App.css";

function App() {
  const viewer = new Stimulsoft.Viewer.StiViewer(undefined, "StiViewer", false);
  const report = new Stimulsoft.Report.StiReport();

  useEffect(() => {
    console.log("start");

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/stimulsoft/Samples-Reports.JS-for-React/main/Integrating%20the%20Report%20Viewer%20into%20an%20Application%20(TypeScript)/public/reports/Report.mdc",
        );
        const data = await response.json(); // Await the promise here
        console.log("Load report from url", data);
        report.loadDocument(data);
        viewer.report = report;
        viewer.options;
        console.log("Rendering the viewer to selected element");
        viewer.renderHtml("viewer");
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return <div id="viewer"></div>;
}

export default App;
