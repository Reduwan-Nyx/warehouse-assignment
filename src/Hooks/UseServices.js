const { useState, useEffect } = require("react");

const useServices = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch("https://mighty-tundra-48234.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  return [inventory, setInventory];
};

export default useServices;
