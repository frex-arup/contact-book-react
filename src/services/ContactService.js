import axios from 'axios';

export class ContactService {
    BASE_URL = "http://localhost:3006/contacts";

    async getContacts() {
        const response = await axios.get(this.BASE_URL);
        return response.data;
    }

    async addContact(contact) {
        const response = await axios.post(this.BASE_URL, contact);
        return response.data;
    }

    async deleteContact(id) {
        const response = await axios.delete(`${this.BASE_URL}/${id}`);
        return response.data;
    }

    async updateContact(contact) {
        const response = await axios.put(`${this.BASE_URL}/${contact.id}`, contact);
        return response.data;
    }

    async getContactById(id) {
        const response = await axios.get(`${this.BASE_URL}/${id}`);
        return response.data;
    }

    async searchContacts(searchTerm) {
        const response = await axios.get(`${this.BASE_URL}?q=${searchTerm}`);
        return response.data;
    }

    async getContactsByPage(page, limit) {
        const response = await axios.get(`${this.BASE_URL}?_page=${page}&_limit=${limit}`);
        return response.data;
    }

    async getContactsCount() {
        const response = await axios.get(`${this.BASE_URL}/count`);
        return response.data;
    }

    async getContactsByPageAndSearch(page, limit, searchTerm) {
        const response = await axios.get(`${this.BASE_URL}?q=${searchTerm}&_page=${page}&_limit=${limit}`);
        return response.data;
    }

    async getContactsCountBySearch(searchTerm) {
        const response = await axios.get(`${this.BASE_URL}/count?q=${searchTerm}`);
        return response.data;
    }

    async getContactsCountByPage(page, limit) {
        const response = await axios.get(`${this.BASE_URL}/count?_page=${page}&_limit=${limit}`);
        return response.data;
    }
}