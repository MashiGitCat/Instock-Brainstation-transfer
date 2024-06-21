import InventoryList from '../components/warehouseInventoryList/warehouseInventoryList';
import WarehouseDetails from '../components/warehouseDetails/warehouseDetails';
import { useParams } from 'react-router-dom';
const WarehouseDetailsPage = () => {
    const { id } = useParams();
    
  return (
    <div>
     <WarehouseDetails id={id} />
     <InventoryList id={id} />
    </div>
  );
};

export default WarehouseDetailsPage;
