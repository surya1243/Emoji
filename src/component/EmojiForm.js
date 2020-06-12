import React from 'react';

export default function EmojiForm(props) {


    return (
        <div>

            <label htmlFor="idInputTag">Emoji Tags: </label>
            <input type="text" name="inputTag" id="idInputTag"/>
            <button type="submit" id="idSubmitTag"> Submit </button>


        </div>
    );
    
}