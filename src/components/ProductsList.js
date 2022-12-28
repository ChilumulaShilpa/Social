import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductsList() {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    React.useEffect(()=>{
        fetch('http://localhost:3000/products').then((res)=>{
            return res.json();
    }).then((resp)=>{
        console.log(resp)
        setProducts(resp);
        
    })
        },[])

        
  const addtocart = (item) => {
    console.log(products);
    const cart2 = [...cart];
    if (!cart2.includes(item)) {
      cart2.push(item);
    }

    const index = cart2.indexOf(item);
    cart2[index].quantity++;
    setCart(cart2);
  };

  function increase(item) {
    let x = cart.map((i) => {
      if (item.id == i.id) {
        console.log('hola');
        i.quantity += 1;
      }
      return i;
    });
    setCart(x);
  }
  function decrease(item) {
    let x = cart.map((i) => {
      if (item.id == i.id && i.quantity > 1) {
        console.log('hola');
        i.quantity -= 1;
      }
      return i;
    });
    setCart(x);
  }
  function total() {
    let x = 0;
    cart.map((i) => {
      x += i.price * i.quantity;
    });
    return x;
  }

  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        {products.map((item) => (
          <div className="col-3" key={item.id}>
            <div className="card">
              {item.title}
              <img src={item.img_path} className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title">
                  $ {item.offeredPrice} - $ {item.originalPrice}
                </h6>
                {item.cart == false && (
                  <button
                    className="  button"
                    onClick={() => addtocart(item)}
                    disabled={item.quantity > item.stockQuantity - 1}
                  >
                    {' '}
                    {item.quantity < item.stockQuantity - 1
                      ? 'Add to cart'
                      : 'Product Unavailable'}
                  </button>
                )}
                {item.cart == true && (
                  <button
                    className="btn btn-success"
                    onClick={() => addtocart(item)}
                  >
                    Added
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row mt-3">
        <table className="table  text-center">
          <thead>
            <tr>
              <th scope="col">Sno</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((i, index) => (
              <tr key={i.id}>
                <th scope="row">{index + 1}</th>
                <th scope="row">
                  <img src={i.img_path} style={{ width: '4rem' }} />
                </th>
                <td>{i.title}</td>
                <td>{i.offeredPrice}</td>
                <td>
                  <button
                    onClick={() => decrease(i)}
                    className="btn btn-primary btn-sm"
                  >
                    -
                  </button>
                  {i.quantity}
                  {i.quantity < i.stockQuantity ? '' : ''}

                  <button
                    onClick={() => increase(i)}
                    disabled={i.quantity > i.stockQuantity}
                    className="btn btn-primary btn-sm demo"
                    size="sm"
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}