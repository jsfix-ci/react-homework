import { Form } from "./components/Form/Form"
import { Layout } from "./components/Layout";
import { PostList, Title, Home } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DarkModeProvider } from "./components/Context/DarkMode";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/SignIn" element={<div><Form /></div>}></Route>
            <Route path="/Blog" element={<><div>{<Title />}</div><div><PostList /></div></>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
