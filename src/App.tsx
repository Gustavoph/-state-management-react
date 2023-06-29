import { Provider } from "react-redux";
import { store } from "./store";

export function App() {
  return (
    <Provider store={store}>
       <h1>Hello World</h1>
    </Provider>
  )
}

