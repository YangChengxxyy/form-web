<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="5">
        <v-card class="pa-6 my-16">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="username"
              prepend-inner-icon="mdi-account"
              :counter="10"
              :rules="nameRules"
              label="用户名"
              required
              clearable
              tabindex="1"
            />

            <v-text-field
              v-model="password"
              prepend-inner-icon="mdi-form-textbox-password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :counter="10"
              :rules="passwordRules"
              label="密码"
              :type="show ? 'text' : 'password'"
              required
              clearable
              tabindex="2"
              @click:append="show = !show"
              @keyup.enter="validate"
            />
            <v-row align="center" class="my-1">
              <v-col cols="12">
                <v-btn
                  block
                  :disabled="!valid"
                  color="success"
                  class="mr-6"
                  @click="validate"
                >
                  登录
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
export default {
  data: () => ({
    valid: true,
    username: '',
    nameRules: [
      v => !!v || '用户名是必填选项',
      v => (v && v.length <= 10) || '用户名需少于10个字符'
    ],
    password: '',
    passwordRules: [
      v => !!v || '密码是必填选项',
      v => (v && v.length <= 10) || '密码需少于10个字符'
    ],
    show: false
  }),

  methods: {
    validate() {
      if (this.$refs['form'].validate()) {
        this.$store.dispatch('user/login', { username: this.username, password: this.password }).then(
          () => {
            this.$router.push('/home')
          }
        ).catch(
          () => {
            // TODO:
          }
        )
      }
    },
    reset() {
      this.$refs['form'].reset()
    },
    resetValidation() {
      this.$refs['form'].resetValidation()
    }
  }
}
</script>
