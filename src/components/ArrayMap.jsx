const ArrayMap = () => {


    const products = [
        { id: 1, name: 'Apple iPhone', price: 999, onSale: false },
        { id: 2, name: 'Samsung Galaxy S21', price: 799, onSale: true },
        { id: 3, name: 'Google Pixel 5', price: 699, onSale: false },
        { id: 4, name: 'OnePlus 9 Pro', price: 899, onSale: true },
        { id: 5, name: 'AirPods Pro', price: 249, onSale: false },
        ];


        const productsList = products.map(({id, name, price}) => <li key={id}>{name} {price}</li>)

    return <div>
        {productsList}
    </div>
}

export default ArrayMap;