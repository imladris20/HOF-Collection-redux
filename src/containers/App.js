import React from "react";
import Cardlist from "../components/Cardlist";
import Searchbar from "../components/Searchbar";
import {players} from "../players";
import Scroll from "../components/Scroll";
import Errorboundry from "../components/Errorboundry";
import './App.css';
import { setSearchField } from "../action";
import { connect } from "react-redux";

/*  以下7-15行內容等同於18-51行的基底內容 */
// const App = () => {
//     return (
//         <div className="tc">
//             <h1>Your Hall-Of-Fame Collection</h1>
//             <Searchbar />
//             <Cardlist players = {players} />
//         </div>
//     );
// }

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends React.Component {
    
    //  以下的this都是指class APP 這個scope
    //  忘記constructor請去看筆記的instantiation part
    constructor() {
        //  透過super()，constructor才能取用this
        super();
        this.state = {
            //  通常不會把初始state設定有內容
            players: []
        }
        // console.log("Part constructor runs.");
    }

    componentDidMount(){
        console.log("What is store?", this.props.store);
        console.log("What is store.getState?", this.props.store.getState());
        this.setState( { players: players } );
        // console.log("Part componentDidMount runs.");
    }
    
    render(){

        const {players} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredPlayers = players.filter( input => {
            return input.name.toLowerCase().includes(searchField.toLowerCase());  
        })
        // console.log(filteredPlayers); --> 用來確認filter後是否沒問題，OK就可以把filteredPlayers反映到cardlist的props裡面

        // console.log("Part render runs.");

        if (!players.length){
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Hall Of Fame Collection</h1>
                    {/* Searchbar 加上inputchange這個props之後，Searchbar.js就能夠取用 */}
                    <Searchbar inputchange={onSearchChange} />
                    <Scroll>
                        <Errorboundry>
                            <Cardlist players = {filteredPlayers} />
                        </Errorboundry>
                    </Scroll>            
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);