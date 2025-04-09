// Form
import { useState } from 'react';
import Form from './Form';

// react icon
import { AiFillDelete } from "react-icons/ai";

export default function Main({ articles }) {

    // articles list
    const [articlesList, setArticles] = useState(articles);
    // add new article
    const [newArticle, setNewArticle] = useState('');

    const addArticle = (e) => {

        e.preventDefault();

        // check if newArticle is empty
        if (newArticle === '') return

        const updateArticle = [...articlesList, newArticle];
        setArticles(updateArticle);

    }

    const delArticle = (index) => {

        const updateArticle = articlesList.filter((art, i) => {

            return index !== i;
        })

        setArticles(updateArticle);
    }

    return <div className='main-box'>
        <ul>
            {articlesList.map((art, i) => 
                <li key={i}>
                    {art} 
                    <button onClick={() => delArticle(i)}><AiFillDelete /></button>
                </li>)}
        </ul>

        <Form addArticle={addArticle} setNewArticle={setNewArticle} newArticle={newArticle} />
    </div>
}