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

        const updateArticle = [...articlesList, newArticle];
        setArticles(updateArticle);

    }

    return <>
        <ul>
            {articlesList.map((art, i) => <li key={i}>{art}</li>)}
        </ul>

        <Form addArticle={addArticle} setNewArticle={setNewArticle} />
    </>
}