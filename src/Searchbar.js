import React from "react";

const Searchbar = (props) => {
    return (
        <div className="pa2">
            <input  className='pa3 ba b--blue bg-light-red'
                    type="search"
                    placeholder="insert player you want"

                    //  onChange�o��HTML�y�k�ѰO���ܽХh�j�M
                    //  �N��O�p�Ginput���e�����ܡA�N����=�᭱��function
                    onChange={props.inputchange}        
            />
        </div>
        
    );
}

export default Searchbar;