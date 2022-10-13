import './App.css'

import { useEffect } from 'react'

declare global {
  interface Window {
    PREEZIE_GUIDE: any;
  }
}

function App() {
  useEffect(() => {
    console.log(
      `This is a default approach to integrate preezie widgets with a react application`
    );

    window.PREEZIE_GUIDE.render([
      {
        guideKey: "7d51c584-ad76-4253-2fd8-08d9719d685d",
        version: "1.0.0",
        renderTo: "preezie-widget-div-id",
      },
    ]);

    window.PREEZIE_GUIDE.render([
      {
        guideKey: "EPO-4a5e17a8-d905-426f-bc35-08d8d1a6ede4",
        version: "1.0.0",
        renderTo: "preezie-widget-div-id-popup",
      },
    ]);

    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <main>
        <h1>preezie widget</h1>
        <div id="preezie-widget-div-id"></div>

        {/* 
          {`This is a recommended approach for a react-router and other routing libraries`}
          {window.PREEZIE_GUIDE.render([
          {
            guideKey: "7d51c584-ad76-4253-2fd8-08d9719d685d",
            version: "1.0.0",
            renderTo: "preezie-widget-div-id",
          },
        ])} */}

        <div id="preezie-widget-div-id-popup"></div>
        {/* 
          {`This is a recommended approach for a react-router and other routing libraries`}
          {window.PREEZIE_GUIDE.render([
          {
            guideKey: "EPO-4a5e17a8-d905-426f-bc35-08d8d1a6ede4",
            version: "1.0.0",
            renderTo: "preezie-widget-div-id-popup",
          },
        ])} */}
      </main>
      <footer className="App-footer">
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
