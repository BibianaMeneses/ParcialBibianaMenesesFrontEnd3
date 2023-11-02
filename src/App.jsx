import { useState } from "react";
import Card from "./Card";
import "./index.css";

function App() {
  const [formData, setFormData] = useState({ name: "", lastname: "" });
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrorMessage("");
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (formData.name.length < 3 || formData.name.startsWith(" ")) {
      setErrorMessage("Por favor chequea que la información sea correcta");
      return;
    }

    if (formData.lastname.length < 6) {
      setErrorMessage("Por favor chequea que la información sea correcta");
      return;
    }

    if (formData.name && formData.lastname) {
      const newItem = { ...formData };
      setItems([...items, newItem]);
      setFormData({ name: "", lastname: "" });
    }
  };

  return (
    <div className="App">
      <h1>Tu doctor según tu preferencia</h1>
      <p>Lista de doctores y especialidades</p>
      <form onSubmit={handleAddItem}>
        <div className="formClass">
          <input
            type="text"
            name="name"
            placeholder="Nombre doctor"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Especialidad"
            value={formData.lastname}
            onChange={handleInputChange}
          />
          <button type="submit">Revisar</button>
        </div>
      </form>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      <div className="container">
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
