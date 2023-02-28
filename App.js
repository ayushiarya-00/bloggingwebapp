import { Provider } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import { BasicLayout } from "./routing/BasicLayout"
import store from "./utils/store"
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BasicLayout />
      </div>
    </Provider>
  )
}

export default App
