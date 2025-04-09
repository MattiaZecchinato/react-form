export default function Form({ addArticle, setNewArticle }) {

    return <form onSubmit={addArticle}>
    <input type="text" onChange={e => { setNewArticle(e.target.value) }}/>
    <button>Add</button>
</form>
}