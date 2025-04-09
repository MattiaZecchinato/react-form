export default function Main({ articles }) {

    return <ul>
        {articles.map(art => <li>{art.title}</li>)}
    </ul>
}