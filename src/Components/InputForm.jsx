import { useState, useEffect } from 'react';

function InputForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [inputs, setInputs] = useState({})

  function handleNameInput(e) {
    setName(e.target.value)
  }

  function handleDescInput(e) {
    setDescription(e.target.value)
  }

  function handleCatBtnInput(e) {
    setCategory(e.target.id)
  }

  function handleSubmit() {
    setInputs({ name: name, description: description, category: category })
    setName('')
    setDescription('')
  }

  useEffect(() => {
    function postInputs() {
      fetch('http://localhost:3001/inputcheats', {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
    if (inputs.name !== undefined) {
      postInputs()
    }
  }, [inputs])

  return (
    <div>
      <div class="form-holder row">
        <h1>Enter a CHEET:</h1>
        <form>

          <input class="form-control" onChange={handleNameInput} type='text' placeholder='Cheat Title...' value={name} />

          <input class="form-control mt-3" onChange={handleDescInput} type='text' placeholder='Description...' value={description} />

          <div className="col-md-12 mt-3" onChange={handleCatBtnInput}>
            <input type="radio" className="btn-check" name="category" id="react" />
            <label className="btn btn react" aria-pressed="true" for="react">react</label>

            <input type="radio" className="btn-check" name="category" id="git" />
            <label className="btn btn git" for="git">git</label>

            <input type="radio" className="btn-check" name="category" id="javascript" />
            <label className="btn btn javascript" for="javascript">javascript</label>

            <input type="radio" className="btn-check" name="category" id="html" />
            <label className="btn btn html" aria-pressed="true" for="html">html</label>

            <input type="radio" className="btn-check" name="category" id="styling" />
            <label className="btn btn styling" for="styling">styling</label>

            <input type="radio" className="btn-check" name="category" id="sql" />
            <label className="btn btn sql" for="sql">sql</label>

            <input type="radio" className="btn-check" name="category" id="other" />
            <label className="btn btn other" for="other">other</label>
          </div>

          <input type="button" value="Submit" onClick={handleSubmit} class="btn btn-dark mt-3" />
        </form>
      </div>
    </div>
  )
}

export default InputForm;

