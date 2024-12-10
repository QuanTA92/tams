import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8080/api";

class ProductService {
  // Fetch all products
  listAllProducts() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return axios.get(PRODUCT_API_BASE_URL + "/product/get", config);
  }

  // Fetch product by ID
  getProductById(productId) {
    return axios.get(`${PRODUCT_API_BASE_URL}/product/get/${productId}`);
  }

  // Fetch categories and subcategories
  listCategoriesAndSubcategories() {
    return axios.get(`${PRODUCT_API_BASE_URL}/categoriesAndSubcategories/get`);
  }

  // Fetch subcategories by category ID
  getSubcategoriesByCategory(categoryId) {
    return axios.get(
      `${PRODUCT_API_BASE_URL}/categoriesAndSubcategories/getById/${categoryId}`
    );
  }

  getProductBySubcategory(subcategoryId) {
    return axios.get(
      `${PRODUCT_API_BASE_URL}/product/get/subcategory/${subcategoryId}`
    );
  }

  // Fetch products by name
  findProductByName(name) {
    return axios.get(
      `${PRODUCT_API_BASE_URL}/product/get/name/${encodeURIComponent(name)}`
    );
  }

  findProductByMinMaxPrice(minPrice, maxPrice) {
    return axios.get(`${PRODUCT_API_BASE_URL}/product/get/price`, {
      params: {
        minPrice: minPrice,
        maxPrice: maxPrice,
      },
    });
  }
  // Add a new product
  addProduct(formData, token) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    return axios.post(`${PRODUCT_API_BASE_URL}/product/add`, formData, config);
  }

  // Delete a product
  deleteProduct(productId, token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return axios.delete(
      `${PRODUCT_API_BASE_URL}/product/delete/${productId}`,
      config
    );
  }
  // Fetch products by address (city, district, ward)
  findProductByAddress(cityName, districtName, wardName) {
    return axios.get(`${PRODUCT_API_BASE_URL}/product/get/address`, {
      params: {
        cityProduct: cityName,
        districtProduct: districtName,
        wardProduct: wardName,
      },
    });
  }
  
}

export default new ProductService();
