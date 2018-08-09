const Application = () => (
  <div className='application'>
    <div className='header'>
      <h1>Scoreboard</h1>
    </div>

    <div className='players'>
      <div className='player'>
        <div className='player-name'>
          Jim Hoskins
        </div>
        <div className='player-score'>
          <div className='counter'>
            <button className='counter-action decrement'> - </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(<Application/>, document.getElementById('container'));