import React from 'react';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longetude">Longetude</label>
              <input name="longetude" id="longetude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/69882551?s=460&u=47780c46d493cfbcf5e86bbc5a3f2ea785177727&v=4"
                alt="Ana Berg"
              />
              <div className="user-info">
                <strong>Ana Berg</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Estudante de Sistemas da Informação e aficionada pelo mundo das
              artes e tecnologia.
            </p>
            <a href="https://github.com/AnaBerg">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/69882551?s=460&u=47780c46d493cfbcf5e86bbc5a3f2ea785177727&v=4"
                alt="Ana Berg"
              />
              <div className="user-info">
                <strong>Ana Berg</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Estudante de Sistemas da Informação e aficionada pelo mundo das
              artes e tecnologia.
            </p>
            <a href="https://github.com/AnaBerg">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/69882551?s=460&u=47780c46d493cfbcf5e86bbc5a3f2ea785177727&v=4"
                alt="Ana Berg"
              />
              <div className="user-info">
                <strong>Ana Berg</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Estudante de Sistemas da Informação e aficionada pelo mundo das
              artes e tecnologia.
            </p>
            <a href="https://github.com/AnaBerg">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/69882551?s=460&u=47780c46d493cfbcf5e86bbc5a3f2ea785177727&v=4"
                alt="Ana Berg"
              />
              <div className="user-info">
                <strong>Ana Berg</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Estudante de Sistemas da Informação e aficionada pelo mundo das
              artes e tecnologia.
            </p>
            <a href="https://github.com/AnaBerg">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
