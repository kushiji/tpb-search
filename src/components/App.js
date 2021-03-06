import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './styles/App.css';
import { setAjaxRequest, setImdbRequest, setNodeRequest, updateInput, checkResult, updateResult } from '../actions/actions.js';

export class App extends React.Component {
    handleInputChange(event) {
        this.props.updateInput(event.target.value)
    };
    
    componentDidMount() {
        document.body.id = this.props.theme;
        this.props.updateInput("");
        this.props.setAjaxRequest();
        this.props.checkResult(false);
        this.props.updateResult(null);
    };

    submitForm(event) {
        event.preventDefault();
        this.props.history.push('/result');
    };
    render() {
      return (
        <div className={`App ${this.props.theme}`}>
          <form onSubmit={this.submitForm.bind(this)}>
            <label htmlFor="input">Movie title:</label>
            <input id="input" type="text" name="movietitle" value={this.props.input} onChange={this.handleInputChange.bind(this)} required></input>
          <div className="radios">
                <label id="connectionTitle">Connection type:</label>
                <div className="item">
                    <label htmlFor="ajax" className="radioLabel">AJAX</label>
                    <input type="radio" id="ajax" name="connectionType" value="ajax" onChange={this.props.setAjaxRequest} checked={this.props.connection === 'ajax'}></input>
                </div>
                <div className="item">
                    <label htmlFor="imdb" className="radioLabel">AJAX + IMDB ID</label>
                    <input type="radio" id="imdb" name="connectionType" value="imdb" onChange={this.props.setImdbRequest} checked={this.props.connection === 'imdb'}></input>
                </div>
                <div className="item">
                    <label htmlFor="node" className="radioLabel">NODE.js + IMDB ID</label>
                    <input type="radio" id="node" name="connectionType" value="node" onChange={this.props.setNodeRequest} checked={this.props.connection === 'node'}></input>
                </div>
            </div>
            <input id="submitbtn" type="submit" value="Search"></input>
          </form>
        </div>
      );
    };
}

const mapStateToProps = (state) => {
    return {
        input: state.input,
        connection: state.connection,
        theme: state.theme,
        result: state.result,
        gotResult: state.gotResult
    }
};

const mapDispatchToProps = (dispatch) => ({
    setAjaxRequest: () => dispatch(setAjaxRequest()),
    setImdbRequest: () => dispatch(setImdbRequest()),
    setNodeRequest: () => dispatch(setNodeRequest()),
    updateInput: (input) => dispatch(updateInput(input)),
    checkResult: (value) => dispatch(checkResult(value)),
    updateResult: (result) => dispatch(updateResult(result))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
