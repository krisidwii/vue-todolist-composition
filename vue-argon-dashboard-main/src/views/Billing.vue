<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Planning Project</h3>
      <a href="#" class="btn btn-primary">CREATE</a>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th style="width: 10px">checklist</th>
            
            <th>name</th>
            <th style="width: 40px">Action</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td class="text-center"><input type="checkbox" name="" id=""></td>
            
            <td>
              Jakarta Presentation
            </td>
            <td>
              <a href="#" class="btn btn-success">UPDATE</a>
              <a href="#" class="btn btn-danger">REMOVE</a>
            </td>
          </tr>
  
          <tr>
            <td class="text-center"><input type="checkbox" name="" id=""></td>
            
            <td>
              Meeting
            </td>
            <td>
              <a href="#" class="btn btn-success">UPDATE</a>
              <a href="#" class="btn btn-danger">REMOVE</a>
            </td>
          </tr>
          <tr>
            <td class="text-center"><input type="checkbox" name="" id=""></td>
            
            <td>
              Expo Campus
            </td>
            <td>
              <a href="#" class="btn btn-success">UPDATE</a>
              <a href="#" class="btn btn-danger">REMOVE</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
</template>

<script>
import MasterCard from "@/examples/Cards/MasterCard.vue";
import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue";
import PaymentCard from "./components/PaymentCard.vue";
import InvoiceCard from "./components/InvoiceCard.vue";
import BillingCard from "./components/BillingCard.vue";
import TransactionCard from "./components/TransactionCard.vue";

export default {
  name: "Billing",
  components: {
    MasterCard,
    DefaultInfoCard,
    PaymentCard,
    InvoiceCard,
    BillingCard,
    TransactionCard,
  },
  data() {
    return {
      salary: {
        classIcon: "text-white fas fa-landmark",
        title: "Salary",
        desc: "Belong Interactive",
        price: "+$500",
      },
      paypal: {
        classIcon: "text-white fab fa-paypal",
        title: "Paypal",
        desc: "Freelance Payment",
        price: "$455.00",
      },
    };
  },
};
</script>
