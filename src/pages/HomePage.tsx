import { Button, Select } from "antd";
import { Header } from "../components/Header";
import { Card } from "../components/Card";

export const HomePage = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const locationOptions = [
    {
      value: "1",
      label: "Arequipa",
    },
    {
      value: "2",
      label: "Lima",
    },
    {
      value: "3",
      label: "Cusco",
    },
    {
      value: "4",
      label: "Moquegua",
    }
  ]

  const specialityOptions = [
    {
      value: "1",
      label: "Civil",
    },
    {
      value: "2",
      label: "Penal",
    },
    {
      value: "3",
      label: "Laboral",
    },
    {
      value: "4",
      label: "Familia",
    }
  ]
  return (
    <div className="w-full">
      <Header/>
      <section id="mainSearch" className="w-full h-72 relative">
        <img 
          className="w-full h-full object-cover"
          src="https://www.criminaldefencelawyers.com.au/wp-content/uploads/2020/02/Lawyer-behind-desk-with-gavel-1-scaled.jpg" alt="" />
        <div id="form-mainSearch" className="absolute top-1/2 right-1/2 flex gap-2 flex-col sm:flex-row" style={{transform: 'translate(50%, -50%)'}}>
          <Select
            style={{ width: 160 }}
            onChange={handleChange}
            options={locationOptions}
            placeholder="Ubicación"
          />
          <Select 
            options={specialityOptions}
            style={{ width: 160 }}
            onChange={handleChange}
            placeholder="Especialidad"
          />
          <Button type="primary">
            Buscar
          </Button>
        </div>
      </section>
      <section id="cards" className="p-4 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3">
        <Card/>
        <Card/>
        <Card/>
      </section>
      <footer>
        <p className="text-center p-4 bg-[#3396D3] text-white">© 2024 Derechos Reservados</p>
      </footer>
    </div>
  );
};
