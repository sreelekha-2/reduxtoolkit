
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {increment,decrement,incrementByAmount} from "./redux/counter"
import {getPosts} from "./redux/posts"

function App() {

  const count=useSelector(state=>state.counter.count)
  const posts=useSelector(state=>state.posts.posts)
  const dispatch=useDispatch()
  return (
    <div className="">
      
      <h2>The count is {count}</h2>
      <input type="button" value="increment" onClick={()=>dispatch(increment())}/>
      <input type="button" value="decrement" onClick={()=>dispatch(decrement())}/>
      <input type="button" value="incrementByAmount" onClick={()=>dispatch(incrementByAmount(20))}/>
      <input type="button" value="Posts" onClick={()=>dispatch(getPosts())}/>
      <ul>
          {posts.map(post=><li>{post.title}</li>)}
      </ul>
     
    </div>
  );
}

export default App;
