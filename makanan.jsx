
const MenuCard = ({ title, description, price, image }) => {
  
  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 ">
      <figure>
        <img src={image} alt={title} className="h-40 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold ">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-primary font-bold">{price} IDR</span>
          <button className="btn btn-primary btn-sm" >Tambah</button>
        </div>
      </div>
    </div>
  );
};

const makanan = () => {
  
  const menuItems = [
    {
      title: "Ayam Krispy",
      description: "Ayam goreng krispy khas Mr Suprek, pilihan tepat untuk kamu!",
      category: "makanan",
      price: "27.000",
      image: "https://www.masakapahariini.com/wp-content/uploads/2023/03/shutterstock_1949306203.jpg",
    },
    {
      title: "Ayam Geprek Sambal Roa",
      description: "Sensasi makanan khas Manado, Ayam Geprek dengan topping sambal roa.",
      price: "34.000",
      image: "https://img.kurio.network/pMnl46Wq4LpRzdHy9_4YTXKQn7Y=/440x440/filters:quality(80)/https://kurio-img.kurioapps.com/21/12/17/d6b0125d-cba9-414a-99aa-35cb3cfd83fc.jpe",
    },
    {
      title: "Ayam Geprek Mozzarella",
      description: "Keju Mozzarella dilelehkan di atas ayam geprek, lengkap dengan nasi.",
      price: "34.000",
      image: "https://www.masakapahariini.com/wp-content/uploads/2023/03/shutterstock_1949306203.jpg",
    },
    {
      title: "Ayam Geprek Telur Asin",
      description: "Ayam geprek dengan topping saus telur asin asli, lengkap dengan nasi.",
      price: "35.000",
      image: "src/assets/ayamgeprek.jpg",
    },
    {
      title: "bakso borak",
      description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
      price: "50.000",
      image: "src/assets/ayamgeprek.jpg",
    },
    {
        title: "bakso bokep",
        description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
        price: "22.000",
        image: "src/assets/ayamgeprek.jpg",
      },
      {
        title: "Jamur Telur Kemul",
        description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
        price: "22.000",
        image: "src/assets/ayamgeprek.jpg",
      },
      {
        title: "Jamur Telur Kemul",
        description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
        price: "22.000",
        image: "src/assets/ayamgeprek.jpg",
      },
      {
        title: "Jamur Telur Kemul",
        description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
        price: "22.000",
        image: "src/assets/ayamgeprek.jpg",
      },
      {
          title: "Jamur Telur Kemul",
          description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
          price: "22.000",
          image: "src/assets/ayamgeprek.jpg",
        },
        {
          title: "Jamur Telur Kemul",
          description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
          price: "22.000",
          image: "src/assets/ayamgeprek.jpg",
        },
        {
          title: "Jamur Telur Kemul",
          description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
          price: "22.000",
          image: "src/assets/ayamgeprek.jpg",
        },
        {
          title: "Jamur Telur Kemul",
          description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
          price: "22.000",
          image: "src/assets/ayamgeprek.jpg",
        },
        {
            title: "Jamur Telur Kemul",
            description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
            price: "22.000",
            image: "src/assets/ayamgeprek.jpg",
          },
          {
            title: "Jamur Telur Kemul",
            description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
            price: "22.000",
            image: "src/assets/ayamgeprek.jpg",
          },
          {
            title: "Jamur Telur Kemul",
            description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
            price: "22.000",
            image: "src/assets/ayamgeprek.jpg",
          },
          {
            title: "Jamur Telur Kemul",
            description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
            price: "22.000",
            image: "src/assets/ayamgeprek.jpg",
          },
          {
              title: "Jamur Telur Kemul",
              description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
              price: "22.000",
              image: "src/assets/ayamgeprek.jpg",
            },
            {
              title: "Jamur Telur Kemul",
              description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
              price: "22.000",
              image: "src/assets/ayamgeprek.jpg",
            },
            {
              title: "Jamur Telur Kemul",
              description: "Jamur krispy digeprek bareng telur, varian baru untuk kamu!",
              price: "22.000",
              image: "src/assets/ayamgeprek.jpg",
            },
  ];

  return (
    <div className="container mx-auto px-3 py-4 h-screen ">
      <h1 className="text-2xl font-bold mb-6 text-center ">Menu</h1>
      <div className="grid grid-cols-10 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {menuItems.map((item, index) => (
          <MenuCard
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
      
    </div>
  );
};

export default makanan;
