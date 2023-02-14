const ArrayReduce = () => {

    const products = [
        { id: 1, name: 'Apple iPhone', price: 999, onSale: false },
        { id: 2, name: 'Samsung Galaxy S21', price: 799, onSale: true },
        { id: 3, name: 'Google Pixel 5', price: 699, onSale: false },
        { id: 4, name: 'OnePlus 9 Pro', price: 899, onSale: true },
        { id: 5, name: 'AirPods Pro', price: 249, onSale: false },
        ];


    const totalCost = products.reduce((counter, product) => {
        return counter + product.price;
    }, 0);

    const productNames = products.reduce((counter, product, i, products) => {
        return `
            ${counter}
            ${i === 0 ? '' : ', '}
            ${i === products.length - 1 ? 'and ' : ''}
            ${product.name}`;
    }, '');


    return  <div>
                <p className="text-center">products total cost is ${totalCost} dollars.</p>
                <p className="text-center">The products, by the way are {productNames}</p>
            </div>
}

export default ArrayReduce;