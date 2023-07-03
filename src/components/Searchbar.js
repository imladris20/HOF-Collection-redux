import React from "react";

const Searchbar = (props) => {
    return (
        <div className="pa2">
            <input  className='pa3 ba b--blue bg-white-90'
                    type="search"
                    placeholder="insert player you want"

                    //  onChange這個HTML語法忘記的話請去搜尋
                    //  意思是如果input內容有改變，就執行=後面的function
                    onChange={props.inputchange}        
            />
        </div>
        
    );
}

export default Searchbar;