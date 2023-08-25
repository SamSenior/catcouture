import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./index.css";
import App from "./App";
import Auth0ProviderWithHistory from "./components/Auth0ProviderWithHistory";
import reportWebVitals from "./reportWebVitals";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing:border-box;
}

.main-content {
  justify-content: center;
  margin: 0;
  padding-top: 2rem;
  padding-bottom: 0rem; 
  padding-left: 0rem;
  padding-right: 0rem;
  background-color: #29343F;
  list-style: none;
   display: grid;
    gap: 1.1rem;
  flex-grow:2;
}
.main-content h2, h3 {
  color: #8fa094;
  padding-top: 2rem;
}
.main-content h2 {
  font-size: 2rem;
  padding-top: 3rem;
}

.main-layout > * {  
  max-width:184rem;
}
.main-layout > *, .narrow-layout > * {   
  margin-left:auto;
  margin-right:auto;
} 
.page-padding {
  padding-left:1rem;
  padding-right:1rem;
}
.section-padding {
  padding: 0rem;
}
.half-width{
  max-width:42rem;
}
.left-align {
  text-align: left;
}
.right-align {
  text-align: right;
}
.table-container {
  margin-left: 2rem;
  margin-right: 2rem;
  padding-bottom: 5rem; 
}

@media only screen and (min-width: 50rem) {
  .main-content {
    margin-right: 0rem;
    grid-template-columns: auto auto;
    gap: 2rem; 
  }
  .main-content h2, h3 {
    text-align: center;
  }  
  .table-container {
    margin-right: 0rem;
    padding-bottom: 5rem; 
  }
}

@media only screen and (min-width: 80rem) {
  .main-content {  
    grid-template-columns: auto auto auto;
  }
  .table-container {
    margin-left: 4rem;
  }  
}   

@media only screen and (min-width: 115rem) {
  .main-content {
    grid-template-columns: auto auto auto auto;  
  } 
  .table-container {
    margin-left: 6rem;
  }
}
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <GlobalStyle />
        <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
