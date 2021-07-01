import{useState, useEffect, useCallback} from'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; //router is even though not used


function Home () {
const [list, setList] = useState([])
const [categories, setCategories] = useState(
  {
    react: false,
    git: false,
    javascript: false,
    html: false,
    styling: false,
    sql: false,
    other: false
  }
)

//react,git,javascript,html,styling, sql, other
const [currentList, setCurrentList] = useState(false);

let cards = document.querySelector('.all-cards');

function listCheats() {
  fetch('http://localhost:3001/')
  .then(res => res.json())
  .then(json => setList(json))
}

useEffect(() => {
listCheats()
}, [categories])

useEffect(() => {
  listCheats()
  // console.log(cards.classList);
}, [currentList])

useEffect(() => {
  setCurrentList(false)
}, [list]) // TOOK OUT list to stop infinite rerender

const deleteItem = (id) => {
  fetch('http://localhost:3001/', {
    method: 'DELETE',
    body: JSON.stringify({id: id}),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  setCurrentList(true)
}



function RenderFullList() {
  return(
  <div>
    <h5>All cheats:</h5>
      <div className="row">
        {list.map(item =>
          <div className="col-sm-4 py-2">
          <div className="card text-white" style={{ backgroundColor:
          item.category === 'react' ? "#125D98" :
          item.category === 'git' ? "#52006A" :
          item.category === 'javascript' ? "rgb(255, 169, 0)" :
          item.category === 'html' ? "rgb(255, 118, 0)" :
          item.category === 'styling' ? "#F21170" :
          item.category === 'sql' ? "#CD113B" :
            "#7952B3"}}>
              <div className="card-body">
                <h3 className="card-title cheat-card">{ item.category ? item.category : 'Other'}</h3>
                  <p className="card-text">{item.name}</p>
                  <p className={`card-text description${item.id} hidden`}>{item.description}</p>
                  <div className="container d-flex justify-content-between">
                    <button className={`btn btn-outline-light box${item.id} fa`} type="checkbox" key={item.id} onClick={() => {
                      document.querySelector(`.description${item.id}`).classList.toggle(`hidden`)
                    }
                    }>
                        {item ? <span><i className="fas fa-eye-slash"></i></span> : <span><i className="far fa-eye"></i></span>}
                    </button>
                    {/* <button className="btn btn-outline-light" type="checkbox" key={item.id} onClick={() => setDisplay}>{display ? <span><i className="fas fa-rocket"></i></span> : <span><i className="fas fa-heart-broken"></i></span>}</button> */}
                    <button className="btn btn-outline-light" onClick={(() => deleteItem(item.id))}><i className="fa fa-trash"></i></button>
                  </div>
              </div>
          </div>
      </div>
      )}
      </div>
      </div>
  )
}

function RenderPartialList() {
  return (
    <div>
      <h5>All cheats:</h5>
        <div className="row">
         {list.filter(item => categories[item.category] === true)
            .map(item =>
          <div className="col-sm-4 py-2">
            <div className="card text-white" style={{ backgroundColor:
            item.category === 'react' ? "#125D98" :
            item.category === 'git' ? "#52006A" :
            item.category === 'javascript' ? "rgb(255, 169, 0)" :
            item.category === 'html' ? "rgb(255, 118, 0)" :
            item.category === 'styling' ? "#F21170" :
            item.category === 'sql' ? "#CD113B" :
              "#7952B3"}}>
                <div className="card-body">
                  <h3 className="card-title cheat-card">{ item.category ? item.category : 'Other'}</h3>
                    <p className="card-text">{item.name}</p>
                    <p className={`card-text description${item.id} hidden`}>{item.description}</p>
                    <div className="container d-flex justify-content-between">
                      <button className={`btn btn-outline-light box${item.id} fa`} type="checkbox" key={item.id} onClick={() => {
                        document.querySelector(`.description${item.id}`).classList.toggle(`hidden`)
                      }
                      }>
                          {item ? <span><i className="fas fa-eye-slash"></i></span> : <span><i className="far fa-eye"></i></span>}
                      </button>
                      {/* <button className="btn btn-outline-light" type="checkbox" key={item.id} onClick={() => setDisplay}>{display ? <span><i className="fas fa-rocket"></i></span> : <span><i className="fas fa-heart-broken"></i></span>}</button> */}
                      <button className="btn btn-outline-light" onClick={(() => deleteItem(item.id))}><i className="fa fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )}
        </div>
        </div>
)
}



  return (
    <div className="container">
        <div className="row">
            <div className="form-holder">
                <div className="form-items">
                    <form>
                        <div className="col-md-12">
                            <select className="form-select mt-3">
                                  <option selected disabled value="">Category</option>
                                  <option value="react">React</option>
                                  <option value="git">Git</option>
                                  <option value="javascript">JavaScript</option>
                                  <option value="html">HTML</option>
                                  <option value="styling">Styling</option>
                                  <option value="sql">SQL</option>
                            </select>
                        </div>

                        <div className="col-md-12 mt-3">
                            <input type="checkbox" className="btn-check" name="category" onChange={() => {
                              setCategories({...categories, react: !categories.react})
                            }}id="react"/>
                            <label className="btn btn react" aria-pressed="true" for="react">react</label>

                            <input type="checkbox" className="btn-check" onChange={() => {
                              setCategories({...categories, react: !categories.git})
                              }} name="category" id="git"/>
                            <label className="btn btn-light git" for="git">git</label>

                            <input type="checkbox" className="btn-check" onChange={() => {
                              setCategories({...categories, react: !categories.javascript})
                              }} name="category" id="javascript"/>
                            <label className="btn btn-light javascript" for="javascript">javascript</label>

                            <input type="checkbox" className="btn-check" onChange={() => {
                              setCategories({...categories, react: !categories.html})
                              }} name="category" id="html"/>
                            <label className="btn btn-light html" aria-pressed="true" for="html">html</label>

                            <input type="checkbox" className="btn-check" onChange={() => {
                              setCategories({...categories, react: !categories.styling})
                              }} name="category" id="styling"/>
                            <label className="btn btn-light styling" for="styling">styling</label>

                            <input type="checkbox" className="btn-check" name="category" id="sql"/>
                            <label className="btn btn-light sql" for="sql">sql</label>

                            <input type="checkbox" className="btn-check" name="category" id="other"/>
                            <label className="btn btn-light other" for="other">other</label>
                        </div>
                    </form>
                </div>
        </div>
    </div>


  <div className="all-cards">
  {Object.values(categories).some(value => value === true) ? <RenderPartialList /> : <RenderFullList />}
            </div>
        </div>
   )
  }

  export default Home;