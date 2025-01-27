import  { useState } from "react";
import {useNavigate} from 'react-router-dom';
const App = () => {
  const navigate = useNavigate();
  const [menus] = useState([
    { name: "Menu 1", image: "src/components/ayamgeprek.jpg" },
    { name: "Menu 2", image: "https://via.placeholder.com/150/00FF00" },
    { name: "Menu 3", image: "https://via.placeholder.com/150/0000FF" },
    { name: "Menu 4", image: "https://via.placeholder.com/150/FFFF00" },
    { name: "Menu 5", image: "https://via.placeholder.com/150/FF00FF" },
    { name: "Menu 6", image: "https://via.placeholder.com/150/00FFFF" },
    { name: "Menu 7", image: "https://via.placeholder.com/150/000000" },
    { name: "Menu 8", image: "https://via.placeholder.com/150/FFFFFF" },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Nomor Meja */}
      <div className="mb-6">
        <div className="text-lg font-bold absolute inset-x-3 top-3 h-16">Nomor Meja: 12</div>
      </div>

      <div className="border rounded-lg p-10 bg-white shadow-md  ">
        {/* Form Nama dan ID Pelanggan dengan List Pesanan dan Tombol */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 ">
          <div className="flex flex-col space-y-4 ">
            <input
              type="text"
              placeholder="Nama"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="ID Pelanggan"
              className="input input-bordered w-full"
            />
          </div>
          <div className="border p-4 rounded-lg bg-gray-50">
            <h2 className="text-lg font-semibold mb-2">List Pesanan</h2>
            <div className="flex space-x-2">
              <button 
              onClick={() => navigate('/menu/makanan')}
              className="btn btn-primary">Buat Pesanan</button>
              <button className="btn btn-secondary">Tambah Catatan</button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Pilihan */}
      <div className="mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {menus.map((menu, index) => (
            <div key={index} className="border rounded-lg p-2 bg-white">
              <img
                src={menu.image}
                alt={menu.name}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <div className="text-center font-medium">{menu.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
