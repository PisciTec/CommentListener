import React, {useState} from 'react';
import { MdPlayArrow, MdPlayForWork } from 'react-icons/md'
import './styles.css';

import api from '../../services/api';
 
import roboimg from '../../assets/robo.svg';

export default function Home() {
  const [comment, setComment] = useState('');
  async function handleCadastro(e) {
    e.preventDefault();
    
    const data = {
      comment,
    };
    try{
      const response = await api.post('', data)
      alert(response.data);
    } catch (e) {
      console.log(e);
      alert("Erro no cadastro, tente novamente mais tarde");
    }
  }
  return (
 <div className="home-container">
   <section className="home-form">
      <h1> Bem vindo<br/>ao seu<br/>leitor de<br/>comentários</h1>
      
      <form action="POST" onSubmit={handleCadastro}>
        <h4>Escreva seu comentário aqui</h4>
        <textarea placeholder="Escreva seu comentário para ser lido" value={comment} onChange={e => setComment(e.target.value)} maxLength="200" rows='5'></textarea>
        <button className="button"><MdPlayForWork size={22} color="#F9F9F9"/>Cadastrar</button>
      </form>     
   </section>
   <section className="comments-list">
      <h4>Comentários</h4>
        <ul className="list">
          <li className="comment">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <button className="button"><MdPlayArrow size={16} color="#F9F9F9"/>Ouvir</button>
          </li>
          <li className="comment">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <button className="button"><MdPlayArrow size={16} color="#F9F9F9"/>Ouvir</button>
          </li>
          <li className="comment">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <button className="button"><MdPlayArrow size={16} color="#F9F9F9"/>Ouvir</button>
          </li>
          <li className="comment">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <button className="button"><MdPlayArrow size={16} color="#F9F9F9"/>Ouvir</button>
          </li>
          <li className="comment">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <button className="button"><MdPlayArrow size={16} color="#F9F9F9"/>Ouvir</button>
          </li><li className="comment">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <button className="button"><MdPlayArrow size={16} color="#F9F9F9"/>Ouvir</button>
          </li><li className="comment">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <button className="button"><MdPlayArrow size={16} color="#F9F9F9"/>Ouvir</button>
          </li><li className="comment">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <button className="button"><MdPlayArrow size={16} color="#F9F9F9"/>Ouvir</button>
          </li><li className="comment">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <button className="button"><MdPlayArrow size={16} color="#F9F9F9"/>Ouvir</button>
          </li>
        </ul>
   </section>
 </div>
  );
}

