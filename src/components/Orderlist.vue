<template>
    <div class="q-pa-md">
        <!-- Bảng hiển thị đơn hàng -->
        <q-table title="Orders" :rows="filteredOrders" :columns="columns" row-key="name" :filter="filter" grid
            hide-header>
            <template v-slot:item="props">
                <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
                    <q-card bordered flat>
                        <q-card-section>
                            <q-btn v-if="props.row.status === 'pending'" label="Cancel" color="negative"
                                @click="rejectOrder(props.row._id)" class="q-ml-md" />
                            <h6>{{ props.row.userName }}</h6>
                        </q-card-section>
                        <q-separator />
                        <q-list dense>
                            <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                                <q-item-section>
                                    <q-item-label>{{ col.label }}</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-item-label caption>{{ col.value }}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-card>
                </div>
            </template>
        </q-table>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const columns = [
    {
        name: 'index',
        label: '#',
        field: 'index'
    },
    {
        name: 'userId',
        label: 'User ID',
        field: 'userId'
    },
    {
        name: 'lastName',
        label: 'User Name',
        field: 'lastName'
    },
    {
        name: 'bookName',
        label: 'Book Name',
        field: 'bookName'
    },
    {
        name: 'address',
        label: 'Address',
        field: 'address'
    },
    {
        name: 'status',
        label: 'Status',
        field: 'status'
    },
    {
        name: 'quantity',
        label: 'Quantity',
        field: 'quantity'
    },
    {
        name: 'startDate',
        label: 'Start Date',
        field: 'startDate'
    },
    {
        name: 'endDate',
        label: 'End Date',
        field: 'endDate'
    },
]

export default {
    setup() {
        const rows = ref([]);
        const filteredOrders = ref([]);
        let allOrders = [];

        onMounted(async () => {
        try {
          const token = localStorage.getItem('token');
          const id = JSON.parse(localStorage.getItem("user")).id;
          console.log(`http://localhost:3000/api/order/user?userId=${id}`);
          const response = await axios.get(`http://localhost:3000/api/order/user?userId=${id}`);
  
          allOrders = response.data.map((order, index) => ({
            ...order,
            index: index + 1
          }));
  
          // Mặc định hiển thị tất cả đơn hàng
          filteredOrders.value = allOrders;
        } catch (error) {
          console.error(error)
        }
      })

        // Phương thức lọc đơn hàng dựa trên trạng thái
        const filterOrders = (status) => {
            if (status === 'all') {
                filteredOrders.value = allOrders;
                filteredOrders.value.sort((a, b) => b.index - a.index);
            } else {
                filteredOrders.value = allOrders.filter(order => order.status === status);
                filteredOrders.value.sort((a, b) => b.index - a.index);
            }
        }

        // Phương thức xử lý khi hủy đơn hàng
        const rejectOrder = async (orderId) => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.put('http://localhost:3000/api/order/update', {
                    orderId: orderId,
                    status: 'rejected'
                }
                    //   , {
                    //     headers: {
                    //       token: `Bearer ${token}`
                    //     }
                    //   }
                );
                location.reload();
            } catch (error) {
                console.error(error);
            }
        }

        return {
            filterOrders,
            rejectOrder,
            columns,
            filteredOrders
        }
    }
}
</script>

<style lang="sass">

  </style>