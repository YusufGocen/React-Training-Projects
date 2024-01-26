import { useState } from "react";

function Search({search}) {
   const  [valueInput, setvalue] = useState('');

    const FormSubmit=(event) => {
      event.preventDefault();
      search(valueInput);
    }
    const Change=(event) => {
        setvalue(event.target.value);
    }
    return (  
        
        <div className="Search">
            <form onSubmit={FormSubmit} >
                <label>Search Picture</label>
                <input value={valueInput} onChange={Change}/>
            </form>
        </div>
    );
}

export default Search;