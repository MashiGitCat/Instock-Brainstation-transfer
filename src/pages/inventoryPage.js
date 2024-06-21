import Inventory from "../components/inventory/inventory";
import EditInventory from "../components/editInventory/editInventory";
import AddInventory from "../components/addInventory/addInventory";

const InventoryPage = () => {
  return (
    <div>
      {/* {" "}
      <Inventory />; */}
      <div>
        <EditInventory></EditInventory>
        {/* <AddInventory></AddInventory> */}
      </div>
    </div>
  );
};

export default InventoryPage;
