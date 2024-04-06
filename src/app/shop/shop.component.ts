import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Product {
  productName: string,
  price: number,
  productImg: string,
  detailsLink?: string
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products: Product[] = [
    { productName: "Washing machine", price: 500, productImg: "https://www.realsimple.com/thmb/w9x-iijhPbGKGthpRLI9wIXfd0U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/washing-machine-temperature-GettyImages-1408980050-d2ee47ebf5e3419ea6baa1073a739129.jpg" },
    { productName: "Air fryer", price: 300, productImg: "https://s13emagst.akamaized.net/products/40103/40102975/images/res_fa6b098679e5c554c6812285ca930113.jpg" },
    { productName: "Dishwasher", price: 800, productImg: "https://m.media-amazon.com/images/I/61QjMIm6qXL._AC_UF894,1000_QL80_.jpg" }
  ]

  constructor() {
    this.addRouteLinkName();
  }

  addRouteLinkName() {
    for (let product of this.products) {
      (product as any).detailsLink = product.productName.toLowerCase().replace(' ', '-');
    }
    console.log(this.products);
  }

}