import React,{useState} from 'react'
import '../CSS/style.css'
export default function Todo() {
    
    const[input,setInput]=useState("");
    const[item,setItem]=useState([])

    const addItem=()=>{
      if(!input)
      {

      }
      else{
      setItem([...item,input])
      setInput('')
      }
    }
    
    
    const delitem = (id) => {
      const updateditems = item.filter((elem,ind) => {
          return ind !== id;
      });

      setItem(updateditems);
  }

  //remove all
  const removeAll = ()=>{
    setItem([]);
  }

  return (

    <>
    <div className="main-div" >
      <div className="child-div">
     
                        
                    <div className="addItems">
                        <input type="text" placeholder="Add Items Here..."
                           value={input} 
                           onChange={(e) => setInput(e.target.value) }
                        />
                      <i className="fa fa-plus add-btn"  onClick={addItem}></i>
                    </div>


  
                    <div className="showItems">
      <div>
      {
        item.map((ele,ind)=>{
        return(
            <div className="eachItem" key={ind}>
              <h1>{ele}</h1>
              <i className="far fa-trash-alt add-btn" title='delete' onClick={() => delitem(ind)}></i>
              
            </div>
          )
        })
      }
</div>
         <button className="btn effect04" data-sm-link-text="REMOVE ALL" onClick={removeAll }><span>CHECK LIST</span></button>
      </div>
     
    </div>
    <div class="footer">
  
    <div>&#169;DEC -2022 to Learn React JS components by <a href="https://rakshitshetty.netlify.app"> &nbsp; Rakxit-Shetty</a></div>

</div>
      </div>
      
    </>
    
  )
}
