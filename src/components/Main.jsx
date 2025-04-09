// Form
import { useState } from 'react';
import Form from './Form';

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

    return <div className='main-box'>
        <ul>
            {articlesList.map((art, i) => <li key={i}>{art}</li>)}
        </ul>

        <Form addArticle={addArticle} setNewArticle={setNewArticle} newArticle={newArticle} />
    </div>
}