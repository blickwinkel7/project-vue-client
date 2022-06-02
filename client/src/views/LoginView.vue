<script>
import { mapActions } from "pinia";
import "../assets/style.css";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      userInput: {
        userLogin: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["login"]),
    loginEvent(){
      this.login(this.userInput)
    }
  },
};
</script>

<template>
  <div class=".container" style="height: 100vh">
    <div class="row h-100">
      <div class="row align-items-center">
        <div class="col-2"></div>
        <div class="col-md-8">
          <div
            class="wrap d-md-flex"
            style="background-color: #154734; border: 20px"
          >
            <div
              class="img"
              style="
                background-image: url('https://images.unsplash.com/photo-1643101451839-fdd25ce0c0c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
              "
            ></div>
            <div class="login-wrap p-4 p-md-5">
              <div class="d-flex">
                <div class="w-100">
                  <h3 class="mb-4">Sign In</h3>
                </div>
              </div>
              <form class="signin-form" @submit.prevent="loginEvent">
                <div class="form-group mb-3">
                  <label class="label" for="email">User Name/ EMAIL</label>
                  <input
                    v-model="userInput.userLogin"
                    type="text"
                    class="form-control"
                    placeholder="write here..."
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Password</label>
                  <input
                    v-model="userInput.password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="form-control btn btn-primary rounded submit px-3"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <p class="text-center">
                Not a member?
                <router-link to="/register" data-toggle="tab"
                  >Sign Up</router-link
                >
              </p>
              <p class="text-center">
                <a data-toggle="tab" href="#">Back to home</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
    <footer
      class="text-center text-lg-start"
      style="background-color: #154734; width: 100vw"
    >
      <!-- Copyright -->
      <div class="text-center p-3">© 2022 KevinHutasuhut</div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<style>
body {
  background: #1f2022;
  color: #1f2022;
  font-family: "Lato", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  font-weight: normal;
}
</style>
