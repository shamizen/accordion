import './App.css';
import data from './data';
import Content from './components/Content';

function App() {
  return (
    <main>
      <div className='container'>
        <h3>เครื่องมือพัฒนาเว็บไซต์ปี 2021</h3>
        <section>
          {data.map((element) => {
            return <Content key={element.id} {...element} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
