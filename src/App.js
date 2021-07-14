import React, {useEffect,useState} from 'react';


const App = (props) => {
  const [state,setState] = useState(props)

  const {name, price} = state

  // DOMがレンダリングの後で実行される
  useEffect(() => {
    console.log("useEffecr is invoked.")
  })

  // 空の配列を第二引数で渡すと、
  useEffect(() => {
    console.log("useEffecr is invoked.(first time)")
  },[])
  
  // 特定のパラメータの描画時と変更時に実行された時の書き方
  useEffect(() => {
    console.log("This callback is for name only.")
  },[name])
  

  const renderPeriod =() => {
    console.log("renderPeriod renders period.")
    return '。';
  }

  return (
    <>
      <p>現在の{name}は、{price}円です。 </p>
      <button onClick = {() => setState({...state, price : price + 1})}>+1 </button>
      <button onClick = {() => setState({...state, price: price - 1})}>-1 </button>
      <button onClick ={() => setState(props)}>Reset </button>
      <input value={name}　onChange = {e => setState({...state, name : e.target.value})}/>
    </>
    )
  }



App.defaultProps = {
  name: "",
  price: 1000
}

export default App;
