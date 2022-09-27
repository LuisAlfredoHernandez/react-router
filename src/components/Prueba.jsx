

function Prueba(props) {  
  const handleclick = ()=>{
     const {history} = props;  
      history.push('./invoices'); 
      console.log('Li')
    }

  return(
      <div onClick={handleclick}>This is the main</div>
    ); 
}

export default Prueba;
