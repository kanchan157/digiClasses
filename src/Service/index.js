import updateData from "./update_data_service";
import createData from "./create_data_service";
import deleteData from "./delete_data";
import {getData} from "./listing_service";
import getDirectData from "./get_direct_data_service";

const DataService = {
    getData,
    createData,
    updateData,
    deleteData,
    getDirectData
}
export default DataService;