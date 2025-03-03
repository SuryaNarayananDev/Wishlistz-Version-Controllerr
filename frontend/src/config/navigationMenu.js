export const navigation = {
    categories: [
        
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              
              { name: 'Shirt', id: 'shirt' },
              { name: 'Dhothies', id:'dhothi'},
              { name: 'Mens Kurtas', id: 'mens_kurta' },
              { name: 'Men Jeans', id: 'men_jeans' },
              { name: 'Sweaters', id: 'sweaters' },
              { name: 'T-Shirt', id: 't-shirtm' },
              { name: 'Jackets', id: 'jacketsm' },
              { name: 'Activewear', id: 'activewear' },
            
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: '#' },
              { name: 'Wallets', id: '#' },
              { name: 'Bags', id: '#' },
              { name: 'Sunglasses', id: '#' },
              { name: 'Hats', id: '#' },
              { name: 'Belts', id: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Vignesh Handloom', id: 'vigneshhandloom' },
              { name: 'Nike', id: 'nike' },
              { name: 'Raymond', id: 'raymond' },
              { name: 'Zara', id: 'zara' },
            ],
          },
        ],
      },
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', id: 'tops' },
              { name: 'Dresses', id:"women_dress", href: '#' },
              { name: 'Sarees', id: 'saree' },
              { name: 'Gouns', id: 'gouns' },
              { name: 'Half Sarees', id: 'half_saree' },
              { name: 'Lengha Choli', id: 'lengha_choli' },
              { name: 'T-Shirt', id: 't-shirtg' },
              { name: 'Jackets', id: 'jacketg' },
           
              
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'watch' },
              { name: 'Wallets', id: 'wallet' },
              { name: 'Bags', id: 'bag' },
              { name: 'Sunglasses', id: 'sunglasse' },
              { name: 'Hats', id: 'hat' },
              { name: 'Belts', id: 'belt' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Significant Other', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'wishListz',
        name: 'Wishlistz',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', id:"tops", },
              { name: 'Dresses', id:"women_dress", href: '#' },
              { name: 'Sarees', id: 'saree' },
              { name: 'Gouns', id: 'gouns' },
              { name: 'Half Sarees', id: 'half_saree' },
              { name: 'Lengha Choli', id: 'lengha_choli' },
              { name: 'T-Shirt', id: 't-shirtg' },
              { name: 'Jackets', id: 'jacketg' },
           
              
            ],
          }
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }