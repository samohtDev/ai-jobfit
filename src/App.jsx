import "./assets/Layout.css";
import "./assets/ComponentStyles.css";

import AppRoutes from "./routes/AppRoutes";


import app from "./firebase/firebaseConfig";

console.log(app);

function App() {
  return <AppRoutes />;
}

export default App;