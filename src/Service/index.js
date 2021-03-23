import updateData from "./update_data_service";
import createData from "./create_data_service";
import deleteData from "./delete_data";
import {getData} from "./listing_service";

const DataService = {
    getData,
    createData,
    updateData,
    deleteData
}
export default DataService;