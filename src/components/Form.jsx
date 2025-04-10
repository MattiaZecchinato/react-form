export default function Form({ addArticle, setNewArticle, newArticle }) {

    return <form onSubmit={addArticle}>
        <input type="text" placeholder="Insert article title" onChange={e => { setNewArticle(e.target.value) }}/>
        <button className="add-btn">Add</button>
    </form>
}