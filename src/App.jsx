import { useState } from 'react';
import Card from './components/Card';
import CardsArr from './Cards.jsx'

function App() {
  const cardsArr = CardsArr();
  const [active, setActive] = useState(2)

  const handleClick = (index) => {
    setActive(index);
  }

  return (
    <div>
      <div>
        <h1 style={{ marginTop: '2rem', textAlign: 'center' }}>Stack Overflow Cards</h1>
      </div>
      <br />
      <hr style={{ width: '50%', margin: 'auto' }} />
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', marginTop: '2rem' }}>
        {cardsArr.map((item, index) => (
          <div key={index}>
            <Card handleClick={handleClick} active={active} item={item} index={index} key={item.id} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
