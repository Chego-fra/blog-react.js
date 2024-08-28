const Create = () => {
    return(
        <div className="form">
            <form>
                <label for="title">
                    <h2>Title</h2>
                </label>
                <br/>
                <input type="text" name="title" id="title" placeholder="Enter the title" />


                <label for="author">
                    <h2>Author</h2>
                </label>
                <br/>
                <input type="text" name="author" id="author" placeholder="Enter Author's name" />


                <label for="body">
                    <h2>Body</h2>
                </label>
                <br/>
                <input  className="bigger" type="text" name="body" id="body"/>
                

                <button type="submit">
                    <h2>Save Blog</h2>
                </button>
            </form>
        </div>
    )
}
export default Create;