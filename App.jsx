import React from "react";
import './App.css'

function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    // preventDefault impede o comportamento padrão de recarregar a página ao clicar no botão

  alert(`Nome: ${nome}, Email: ${email}, Senha: ${senha},`)
  // alert manda mensagem de 'erro'
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Forms</h1>

      <label htmlFor="nome">Nome:</label>
      <input type="text" name="nome" id="nome" value={nome}
      onChange={(e) => setNome(e.target.value)} />
      <br />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" value={email}
      onChange={(e) => setEmail(e.target.value)} />
      <br />

      <label htmlFor="senha">Senha:</label>
      <input type="password" name="senha" id="senha" value={senha}
      onChange={(e) => setSenha(e.target.value)} />
      <br />

      <div className="check">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Você aceita os termos de uso?</label>
      </div>

      <button type="submit">Enviar</button>



    </form>
    );

}

export default App;