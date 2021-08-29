const Product = require('./model/product')
class FakeDb{
    constructor(){
        this.products = [
        {
            coverImage: './assets/img/phone-cover.jpg',
            name: 'Phone XL',
            price: 799,
            description: 'A large phone with one of the best screens',
            heading1: 'heading 1 XL',
            heading2: 'heading 2 XL',
            heading3: 'heading 3 XL',
            headingtext1: 'This is a sample text for heading 1',
            headingtext2: 'This is a sample text for heading 2',
            headingtext3: 'This is a sample text for heading 3'
          },
          {
            coverImage: './assets/img/phone-cover.jpg',
            name: 'Phone Mini',
            price: 699,
            description: 'A great phone with one of the best cameras',
            heading1: 'heading 1 Mini',
            heading2: 'heading 2 Mini',
            heading3: 'heading 3 Mini',
            headingtext1: 'This is a sample text for heading 1',
            headingtext2: 'This is a sample text for heading 2',
            headingtext3: 'This is a sample text for heading 3'
          },
          {
            coverImage: './assets/img/phone-cover.jpg',
            name: 'Phone Standard',
            price: 299,
            description: 'NA',
            heading1: 'heading 1 Standard',
            heading2: 'heading 2 Standard',
            heading3: 'heading 3 Standard',
            headingtext1: 'This is a sample text for heading 1',
            headingtext2: 'This is a sample text for heading 2',
            headingtext3: 'This is a sample text for heading 3'
          },
          {
            coverImage: './assets/img/phone-cover.jpg',
            name: 'Phone Special',
            price: 999,
            description: 'NA',
            heading1: 'heading 1 Special',
            heading2: 'heading 2 Special',
            heading3: 'heading 3 Special',
            headingtext1: 'This is a sample text for heading 1',
            headingtext2: 'This is a sample text for heading 2',
            headingtext3: 'This is a sample text for heading 3'
          }
        ]
    }

    async initDb(){
      await this.cleanDb()
      this.pushProductsToDb()
    }
            

    async cleanDb(){
      await Product.deleteMany({})
    }
    
    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        );
    }

    seeDb() {
        this.pushProductsToDb()
    }

}

module.exports = FakeDb