import logo from './logo.svg';
import './App.css';
import Item from './components/Item.js';

function App() {

  var array = [
    {
      id:1,
      title:"Membrana líquida",
      description:"Acrílica Impermeable Optima X 10 Kg",
      bottom:"$2340"
      
    },
    {id:2,
      title:"Membrana asfáltica autoadhesiva",
      description:"Optima 15cm x 10m",
      bottom:"$1600"
    },
    {id:3,
      title:"Barníz obra",
      description:"color sintético brillante interior 1l.",
      bottom:"$899"
    },
    {id:4,
      title:"Laca al agua",
      description:"EQ Kraft brillante x4l.",
      bottom:"$4500"
    },
    {id:5,
      title:"Esmalte triple acción",
      description:"Obra color 1 l.",
      bottom:"$1196"
      
    }
  ]


  return(
    <div className="container">
      <div className="row">
          <div className="col">
            <Item
            title={array[0].title}
            description={array[0].description}
            bottom={array[0].bottom}
            
            />
          </div>
          <div className="col">
              <Item
            title={array[1].title}
            description={array[1].description}
            bottom={array[1].bottom}
            
            />
        </div>
        <div className="col"></div>
            <Item
          title={array[2].title}
          description={array[2].description}
          bottom={array[2].bottom}
          
          />
       </div>
        <div className="col">
            <Item
          title={array[3].title}
          description={array[3].description}
          bottom={array[3].bottom}
          
          />
        </div>
        <div className="col">
          <Item
        title={array[4].title}
        description={array[4].description}
        bottom={array[4].bottom}
        
        />
     </div>
    </div>
   
  )

}

export default App;
