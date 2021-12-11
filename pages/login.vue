<template>
  <div class="login-container neumorphism">
    <h2 class="headings">Login</h2>
    <p class="incorrect-message" v-if="incorrectAuth">
      Incorrect username or password entered!
    </p>
    <form @submit.prevent="login">
      <label for="user">User</label>
      <input v-model="username" type="text" id="name" />

      <label for="password">Password</label>
      <input v-model="password" type="password" id="password" name="password" />

      <input class="btn cta" type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      incorrectAuth: false,
    };
  },
  methods: {
    async login() {
      try {
        this.$auth.loginWith("local", {
          data: {
            username: this.username,
            password: this.password,
          },
        });
        this.$store.dispatch("login", {
          username: this.username,
          password: this.password,
        });

        await this.$router.push("/");
      } catch (e) {
        this.incorrectAuth = true;
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40rem;
  margin: 18rem auto 0;
}

.incorrect-message {
  color: var(--accent-color);
  font-size: 1.2rem;
  margin-top: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  padding: 2rem;
}

input.btn {
  margin: 0 auto;
}
</style>
