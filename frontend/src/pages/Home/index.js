import React, {useState, useEffect} from 'react';
import { MdPlayForWork } from 'react-icons/md'
import './styles.css';

import Comment from './componets/Comment'

import api from '../../services/api';
 
import roboimg from '../../assets/robo.svg';

export default function Home() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(false);
  useEffect(()=> {
    api.get('').then(response => {
      setComments(response.data);
    })
  }, [newComment]);
  async function handleCadastro(e) {
    e.preventDefault();
    
    const data = {
      comment,
    };
    try{
      const response = await api.post('', data)
      setNewComment(!newComment);
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
      <img src={roboimg} alt="Robozinho Ilustrativo" className="robo"/>
      <form action="POST" onSubmit={handleCadastro}>
        <h4>Escreva seu comentário aqui</h4>
        <textarea placeholder="Escreva seu comentário para ser lido" value={comment} onChange={e => setComment(e.target.value)} maxLength="200" rows='5'></textarea>
        <button className="button"><MdPlayForWork size={22} color="#F9F9F9"/>Cadastrar</button>
      </form>     
   </section>
   <section className="comments-list">
      <h4>Comentários</h4>
      <audio></audio>
        <ul className="list">
          {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
   </section>
 </div>
  );
}

