import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import Characters from '../Characters'
import './index.css'

class CharacterCounter extends Component {
  state = {
    nameInput: '',
    characterList: [],
  }

  onChangeInput = event => {
    this.setState({nameInput: event.target.value})
  }

  submitButton = event => {
    event.preventDefault()

    const {nameInput} = this.state
    const count = nameInput.length

    const newCharacterCounter = {
      id: uuidV4(),
      name: nameInput,
      count,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, newCharacterCounter],
      nameInput: '',
    }))
  }

  render() {
    const {nameInput, characterList} = this.state
    const countsLength = characterList.length

    return (
      <div className="app-container">
        <div className="character-count-card">
          <div className="counts-card">
            <h1 className="heading">Count the characters like a Boss...</h1>
            <ul className="ul-counter">
              {countsLength > 0 ? (
                characterList.map(each => (
                  <Characters key={each.id} details={each} />
                ))
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="image"
                />
              )}
            </ul>
          </div>
          <div className="characters-inputs-card">
            <h1 className="characters-heading">Character Counter</h1>
            <form className="input-card" onSubmit={this.submitButton}>
              <input
                type="text"
                placeholder="Enter the Characters Here"
                value={nameInput}
                onChange={this.onChangeInput}
                className="input"
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
