import React, {useReducer, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers'
import Event from './event'


//  1回目
const App = () => {
const[state,dispatch] = useReducer(reducer, [])
const [title, setTitle] = useState('')
const [body, setBody] = useState('')
const addEvent = (e) => {
  e.preventDefault()
  dispatch({
    type: 'CREATE_EVENT',
    title,
    body
  })

  setTitle("");
  setBody("");
}

const deleteALLEvents = e => {
 e.preventDefault()
 const result = window.confirm('全てのイベントを本当に削除しても良いですが？');
 if (result) {
   dispatch( { type: 'DELETE_ALL_EVENTS' })
 }
}

const uncreatable = title === '' || body ==='';

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className= "form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={ title } onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className= "form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={ body } onChange={e => setBody(e.target.value)} />
        </div>
        <button className = "btn btn-primary" onClick={addEvent} disabled={uncreatable}>イベントを作成する</button>
        <button className = "btn btn-danger" onClick={deleteALLEvents} disabled={state.length === 0}> 全てのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* {
            state.map((event, index) => {
              const id = event.id
              const handleClickDeleteButton =() => {
                dispatch({type: "DELETE_EVENT", id})
              }
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{event.title}</td>
                  <td>{event.body}</td>
                  <td><button type = "button" className = "btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
                </tr>
              )
            })
          } */}
          { state.map((event, index) => (<Event event={event} dispatch={dispatch}/>)) }
        </tbody>

      </table>

    </div>
  );
}

export default App;
