import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchContextProvider } from "./context/SearchContext.js";
import { AuthContextProvider } from "./context/AuthContext.js"
import { RegContextProvider } from './context/RegContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
		<RegContextProvider>
			<AuthContextProvider>
				<SearchContextProvider>
					<App />
				</SearchContextProvider>
			</AuthContextProvider>
		</RegContextProvider>
  </React.StrictMode>
);