import React, { useState , useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

/**
 * Componente: Funções JavaScript que aceitam entradas arbritárias
 *            (chamadas "props") e retornam elementos React que
 *            descrevem o que deve aparecer na tela.
 * Propriedade: É qualquer informação passada de um componente pai para um
 *              componente filho.
 * Estado: propriedade do componente onde colocamos dados que, quando mudados,
 *         devem causar uma nova renderização
 * Imutabilidade: Não é permitido alterar uma variável, é preciso sempre recriar.
 *                É um conceito utilizado no React para garantir performance
 *                mesmo em aplicações que contenham muitos dados.
 */

function App() {
  // useState retorna um array com 2 posições
  //
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, [projects]);

  async function handleAddProject() {
    //setProjects([...projects, `Novo projeto ${Date.now()}`]);

    const reponse = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Camila Sales"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;