import axios from "axios";

const ADMIN_API_BASE_URL = "https://tams.azurewebsites.net/api";

class AdminService {
    listAllOrders(token) {
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
        return axios.get(ADMIN_API_BASE_URL + "/orders/admin/get", config);
    }

    getOrderById(token, orderId) {
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
        return axios.get(`${ADMIN_API_BASE_URL}/orders/admin/get/${orderId}`, config);
    }

    getDashboardAdmin(token) {
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
        return axios.get(`${ADMIN_API_BASE_URL}/dashboard/admin`, config);
    }
}

export default new AdminService();