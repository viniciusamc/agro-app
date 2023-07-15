import "./App.css";
import { api } from "./services/api";
import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);

  async function handleCreateNote(e) {
    e.preventDefault();

    if (!title || !description) {
      alert("Preencha todos os campos!");
      return;
    }

    api
      .post("/notes", { title, description })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        alert(error.response.data.statusCode);
      });
  }

  async function handleDeleteNote(id) {
    confirm("Tem certeza que deseja deletar essa nota?");
    api.delete(`/notes/${id}`).then((response) => {
      console.log(response.data);
    });
  }

  useEffect(() => {
    async function getNotes() {
      const response = await api.get("/notes");
      setNotes(response.data);
    }

    getNotes();
  });

  return (
    <>
      <h1>Agrofauna</h1>
      <form>
        <legend>Registre sua tarefa</legend>
        <div className="input-wrapper">
          <label>Título</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="input-wrapper">
          <label>Descrição</label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button onClick={handleCreateNote}> Criar tarefa </button>
      </form>

      {notes.length == 0 ? (
        <p>Não há tarefas cadastradas no momento.</p>
      ) : (
        <>
          <h2>Tarefas Pendentes</h2>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Descrição</th>
                <th>Status</th>
                <th>Deletar</th>
                <th>Concluir</th>
              </tr>
            </thead>
            <tbody>
              {notes
                .filter((note) => note.status === "Pendente")
                .map((note) => (
                  <tr key={note.id}>
                    <td>{note.title}</td>
                    <td>{note.description}</td>
                    <td>{note.status}</td>
                    <td>
                      {" "}
                      <button
                        className="btn-delete"
                        onClick={(e) => handleDeleteNote(note.id)}
                      >
                        Deletar
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-concluir"
                        onClick={() => api.put(`/notes/${note.id}`)}
                      >
                        Concluir
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
      {notes.length == 0 ? (
        <p>Não há tarefas concluídas até o momento.</p>
      ) : (
        <>
          <h2>Tarefas Concluidas</h2>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Descrição</th>
                <th>Status</th>
                <th>Deletar</th>
                <th>Concluir</th>
              </tr>
            </thead>
            <tbody>
              {notes
                .filter((note) => note.status == "Concluído")
                .map((note) => (
                  <tr key={note.id}>
                    <td>{note.title}</td>
                    <td>{note.description}</td>
                    <td>{note.status}</td>
                    <td>
                      {" "}
                      <button
                        className="btn-delete"
                        onClick={(e) => handleDeleteNote(note.id)}
                      >
                        Deletar
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-concluir"
                        onClick={() => api.put(`/notes/${note.id}`)}
                      >
                        Desmarcar
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default App;
