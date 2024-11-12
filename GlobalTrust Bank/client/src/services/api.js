// C:\Users\Sauraav\Desktop\new_poe\GlobalTrust Bank\client\src\services\api.js

const API_BASE_URL = 'https://localhost:3000/api';

export const fetchTransactions = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/overview/transactions`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch transactions');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
};

export const updateTransactionStatus = async (transactionId, status) => {
    try {
        const response = await fetch(`${API_BASE_URL}/overview/transactions/${transactionId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status }),
        });

        if (!response.ok) {
            throw new Error('Failed to update transaction');
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating transaction:', error);
        throw error;
    }
};