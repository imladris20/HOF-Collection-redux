import React, {Component} from "react";
import { setSearchField, requestPlayers } from "../action";
import { connect } from "react-redux";

import Cardlist from "../components/Cardlist";
import Searchbar from "../components/Searchbar";
import Scroll from "../components/Scroll";
import Errorboundry from "../components/Errorboundry";

import './App.css';


const mapStateToProps = state => {
    return {
        searchField: state.searchPlayers.searchField,
        players: state.requestPlayers.players,
        isPending: state.requestPlayers.isPending,
        error: state.requestPlayers.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestPlayers: () => dispatch(requestPlayers( ))
    }
}

class App extends Component {
    
    componentDidMount(){
        this.props.onRequestPlayers();
    }
    
    render(){

        const {searchField, onSearchChange, players, isPending} = this.props;
        const filteredPlayers = players.filter( input => {
            return input.name.toLowerCase().includes(searchField.toLowerCase());  
        })

        return (
            <div className="tc">
                <h1 className="f1">Hall Of Fame Collection</h1>
                <Searchbar inputchange={onSearchChange} />
                <Scroll>
                    { isPending ? <h1>Loading...</h1>:
                        <Errorboundry>
                            <Cardlist players = {filteredPlayers} />
                        </Errorboundry>
                    }
                </Scroll>            
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);