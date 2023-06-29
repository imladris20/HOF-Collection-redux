import React from "react";
import Cardlist from "./Cardlist";
import Searchbar from "./Searchbar";
import {players} from "./players";

/*  以下7-15行內容等同於17-27行 */
// const App = () => {
//     return (
//         <div className="tc">
//             <h1>Your Hall-Of-Fame Collection</h1>
//             <Searchbar />
//             <Cardlist players = {players} />
//         </div>
//     );
// }


class App extends React.Component {
    
    //  以下的this都是指class APP 這個scope
    //  忘記constructor請去看筆記的indantation part
    constructor() {
        //  透過super()，constructor才能取用this
        super();
        this.state = {
            players: players,
            searchfield: ''
        }
    }

    inputChange = (event) => {

        //  setState()是react的常用methods，在括號內你會執行對state的內容做什麼變更
        this.setState({searchfield: event.target.value})
    }
    
    render(){
        
        const filteredPlayers = this.state.players.filter( input => {
            return input.name.toLowerCase().includes(this.state.searchfield.toLowerCase());  
        })
        // console.log(filteredPlayers); --> 用來確認filter後是否沒問題，OK就可以把filteredPlayers反映到cardlist的props裡面

        return (
            <div className="tc">
                <h1>Your Hall-Of-Fame Collection</h1>
                {/* Searchbar 加上inputchange這個props之後，Searchbar.js就能夠取用 */}
                <Searchbar inputchange={this.inputChange} />
                <Cardlist players = {filteredPlayers} />
            </div>
        );
    }
}

export default App;