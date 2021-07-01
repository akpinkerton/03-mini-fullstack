import{useState, useEffect} from'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; //router is even though not used

function Home () {
const [list, setList] = useState([])

useEffect(() => {
function listCheats() {
  fetch('http://localhost:3001/')
  .then(res => res.json())
  .then(json => setList(json))
  }
  listCheats()
}, [])


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
                                <input type="radio" className="btn-check" name="category" id="react"/>
                                <label className="btn btn react" aria-pressed="true" for="react">react</label>

                                <input type="radio" className="btn-check" name="category" id="git"/>
                                <label className="btn btn-light git" for="git">git</label>

                                <input type="radio" className="btn-check" name="category" id="javascript"/>
                                <label className="btn btn-light javascript" for="javascript">javascript</label>

                                <input type="radio" className="btn-check" name="category" id="html"/>
                                <label className="btn btn-light html" aria-pressed="true" for="html">html</label>

                                <input type="radio" className="btn-check" name="category" id="styling"/>
                                <label className="btn btn-light styling" for="styling">styling</label>

                                <input type="radio" className="btn-check" name="category" id="sql"/>
                                <label className="btn btn-light sql" for="sql">sql</label>

                                <input type="radio" className="btn-check" name="category" id="other"/>
                                <label className="btn btn-light other" for="other">other</label>
                            </div>
                        </form>
                    </div>
            </div>
    </div>



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
                        <p className="card-text">{item.description}</p>
                        <input type="button" value="View Details" className="btn btn-outline-light"/>
                    </div>
                </div>
            </div>
            )}
        </div>
    </div>




   )
  }

  export default Home;


//   const cheatCards = () => {
//     let allCheats = list.map(item => {
//       console.log(item.name)
//       const react = item.category === 'react';
//       const git = item.category === 'git';
//       const javascript = item.category === 'javascript';
//       const html = item.category === 'html';
//       const styling = item.category === 'styling';
//       const sql = item.category === 'sql';
//       return (<>
//       <div className="col-sm-4 py-2">
//         <div className="card text-white"
//           style={{ backgroundColor:
//             react ? "#125D98" :
//             git ? "#52006A" :
//             javascript ? "rgb(255, 169, 0)" :
//             html ? "rgb(255, 118, 0)" :
//             styling ? "#F21170" :
//             sql ? "#CD113B" :
//              "#7952B3"}}>
//           <div className="card-body">
//               <h3 className="card-title cheat-card">{item.category}</h3>
//                 <p className="card-text">{item.name}</p>
//                 <p className="card-text">{item.description}</p>
//                 <input type="button" value="View Details" className="btn btn-outline-light"/>
//           </div>
//         </div>
//       </div>
//         </>)
//       })

//       return (<>{allCheats}</>) }


//     return (
//       <div className="container">
//         <h2>Home Page</h2>
//           <p>WE CANN ADD SEARCH STUFFF HERE</p>
//         allCheats
//       <h5>All cheats:</h5>
//       <div className="row">

//         {cheatCards()}

//       </div>
//   </div>
//  )


