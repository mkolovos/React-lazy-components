import React, { Component, lazy, Suspense, memo } from "react";

import "./App.css";

const MyLazy = lazy(() => import("./components/MyLazy.js"));
const MyCarousel = lazy(() => import("./components/MyCarousel.js"));

const Placeholder = memo(() => <strong>Loading...</strong>);

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Placeholder />}>
        <div className="App">
          <section>
            <h1>React Suspense with Lazy</h1>

            <Suspense fallback={<Placeholder />}>
              <p>Take a look at MyCarousel Component with element-react:</p>
              <section>
                <MyCarousel imageList={[ 
                  "https://loremflickr.com/800/600/brazil,curitiba", 
                  "https://loremflickr.com/800/600/brazil,mar", 
                  "https://loremflickr.com/800/600/brazil,cataratas", 
                  "https://loremflickr.com/800/600/brazil,paisagem", 
                  "https://picsum.photos/800/600/?random" 
                ]} />
              </section>
            </Suspense>

            <Suspense maxDuration={300} fallback={<Placeholder />}>
              <p>Take a look at MyLazy Component:</p>
              <section>
                <MyLazy img="https://picsum.photos/800/600" />
              </section>
            </Suspense>

            
          </section>
                
        </div>
      </Suspense>
    );
  }
}

export default App;
