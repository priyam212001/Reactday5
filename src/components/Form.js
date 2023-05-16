import React from "react";
import './style.module.css';
export default function Form() {
  const [state, setState] = React.useState({
    firstName: "Saurabh",
    lastName: "Oza",
    about: "",
    level: "masters",
    technology: "java",
    freelancing: false
  });

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  return (
    <div className="app">
      <form>
        <h1>Welcome to Registration Page</h1>
       
          <div className="heading"> <label>First Name:  </label>
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
          </div><br/><br/>
        
       
          <div className="heading"> <label>Last Name:  </label>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </div><br/><br/>
       
          <div className="heading"> <label>About:  </label>
          <textarea name="about" value={state.about} onChange={handleChange} />
        </div><br/><br/>
        
          <div className="heading">Degree: 
          
            <input
              type="radio"
              name="level"
              value="bachelors"
              checked={state.level === "bachelors"}
              onChange={handleChange}
            /><label>
            Bachelors
            </label>
          
            <input
              type="radio"
              name="level"
              value="masters"
              checked={state.level === "masters"}
              onChange={handleChange}
            /><label>
            Masters
          </label>
        </div><br/><br/>
        
          <div className="heading"><label>Technology: </label>
          <select
            name="technology"
            onChange={handleChange}
            value={state.technology}>
            <option value="java">Java</option>
            <option value="dotnet">Dot Net</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
          </select>
          </div><br/><br/>
                 
          <div className="heading"><label>Interested in Freelancing? </label>
          <input
            type="checkbox"
            name="freelancing"
            checked={state.freelancing}
            onChange={handleChange}
          />
          </div>
        
       
      </form>
      <pre>{JSON.stringify(state, null, 3)}</pre>
    </div>
  );
}
