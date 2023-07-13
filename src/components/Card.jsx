import PropTypes from 'prop-types';

export default function Card({ handleClick, active, item, index }) {
  return (
    <>
      <div
        key={item.id}
        onClick={() => handleClick(item, index)}
        className='card'
        style={{
          display: 'grid',
          height: index === active ? '17rem' : '12rem',
          width: index === active ? '16rem' : '8rem',
          border: '2px solid transparent',
          borderRadius: '7px',
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: index === active && '#3a4045'
        }}>
        <p className='icon' style={{ fontSize: '5rem', color: index === active ? '#1a84dd' : '#9ea6ac' }}>{item.icon}</p>
        <br />
        <h1 style={{ margin: '1px' }}>{item.title}</h1>
        <br />
        {index === active &&
          <p>{item.description}</p>
        }
      </div>
    </>
  )
}

Card.propTypes = {
  handleClick: PropTypes.func,
  active: PropTypes.number,
  item: PropTypes.object,
  index: PropTypes.number
}
