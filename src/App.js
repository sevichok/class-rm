import React from 'react'
import axios from 'axios'
import './App.css';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characters: [], page: 1 }
    this.pageMinus = this.pageMinus.bind(this)
    this.pagePlus = this.pagePlus.bind(this)
  }
  componentDidMount() {
    this.fetchData(this.state.page)
  }

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchData(this.state.page)
    }
  }
  async fetchData(page) {
    await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => response.data.results)
      .then(data => {
        this.setState({ characters: [...data] })
      })
  }
  pagePlus() {
    this.setState({
      page: this.state.page + 1
    })
  }
  pageMinus() {
    this.setState((state) => ({
      page: state.page - 1
    }))
  }


  render() {

    return (
      <div className="App">
        <Header page={this.state.page} characters={this.state.characters} />
        <div className='btn-cont'>
          {this.state.page === 1 || <button onClick={this.pageMinus}>prev</button>}
          <button onClick={this.pagePlus}>next</button>
        </div>
        <div className='list'>
          {this.state.characters.map(el => <div key={el.id} className='elem'>
            <h4>{el.name}</h4>
            <p>{el.location.name}</p>
          </div>)}
        </div>
      </div>
    );
  }
}

export default App;
