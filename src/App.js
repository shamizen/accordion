import './App.css';
import data from './data';
import { useState } from 'react';
import Content from './components/Content';

function App() {
  const [content, setContent] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>เครื่องมือพัฒนาเว็บไซต์ปี 2021</h3>
        <section>
          {content.map((data) => {
            return <Content key={data.id} {...data} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
