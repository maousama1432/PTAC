import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
  const [atividade, setAtividade] = useState("");
  const [Lista, setLista] = useState([]);
  const [id, setId] = useState(1);

  const salvar = (e) => {
    e.preventDefault();
    setLista([...Lista, {
      atividade:atividade,
      id:id
    }]);
    setId(id + 1);
    setAtividade("");
  };

  console.log(atividade.length);

  return (
    <div>
      <h1>Lista de Atividades</h1>
      <Link to="/">home</Link>
      <h1>Lista de Atividades</h1>
      <form onSubmit={salvar}>
        <input
          value={atividade}
          type="text"
          onChange={(e) => setAtividade(e.target.value)}
        />
        <button>ADD</button>
      </form>
      <div>
        {Lista.map((ativ) => (
          <p key={ativ.id}>{ativ.atividade}</p>
        ))}
      </div>
    </div>
  );
}