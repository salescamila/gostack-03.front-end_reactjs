import React from 'react';

// A props children é o conteúdo que a tag do componente recebeu dentro dela.
export default function Header({ title, children }) {
  return (
    <header>
      <h1>{title}</h1>

      {children}
    </header>
  )
}