import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Create = () => {
    return(
        // <div className="form">
        //     <form>
        //         <label for="title">
        //             <h2>Title</h2>
        //         </label>
        //         <br/>
        //         <input type="text" name="title" id="title" placeholder="Enter the title" />


        //         <label for="author">
        //             <h2>Author</h2>
        //         </label>
        //         <br/>
        //         <input type="text" name="author" id="author" placeholder="Enter Author's name" />


        //         <label for="body">
        //             <h2>Body</h2>
        //         </label>
        //         <br/>
        //         <input  className="bigger" type="text" name="body" id="body"/>
                

        //         <button type="submit">
        //             <h2>Save Blog</h2>
        //         </button>
        //     </form>
        // </div>

        <div className='content'>
                    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.controlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter your Title" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="exampleForm.controlInput1">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter Author" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.controlInput1">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea"  rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </div>

    )
}
export default Create;