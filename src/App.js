import logo from './logo.svg';
import img1 from './assets/benz.jpg';
import img2 from './assets/gclass.jpg'
import './App.css';
import MyForm from './components/MyForm';
import Counter from './components/Counter';

function App() { 
  const expenses = [
    { expense_date: '01-Maret-2022',
      description: 'Bayar Angsuran Motor',
      total: 'Rp.1.200.000'
    },
    { expense_date: '11-Maret-2022',
      description: 'Bayar Air',
      total: 'Rp.300.000'
    }
  ]

  const productLists = [
    {
      title: 'GL Class',
      description: 'This is our product desctiption GL Class',
      year: 2020,
      image: img1
    },
    {
      title: 'G Class',
      description: 'This is our product desctiption G Class',
      year: 2022,
      image: img2
    }
  ]

  return (
    <div className="App">
      <div>
        <h2>My Expenses</h2>
        {expenses.map((expense)=>{
          return (
            <>
            <p>{expense.expense_date}</p>
            <p>{expense.description}</p>
            <p>{expense.total}</p>
            </>
          )
        })}
      </div>
      <div className='card'>
          <div className='card-detail'>
            <div className='card-title'>
            {productLists.map((product)=>{
              return (
                <div>
                  <img src={product.image} alt="" width={300} />
                  <p>{product.title}</p>
                  <p>{product.description}</p>
                  <p>{product.year}</p> 
                  <span>
                    {product.year > 2020 ? 'New' : 'Stock Sale '}
                  </span> <br />
                  <span>
                    <button>Detail</button>
                  </span> <hr />
                </div>
              )
            })}
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
