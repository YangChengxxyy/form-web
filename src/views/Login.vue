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
import { login } from '@/api/user'

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
        login({
          username: this.username,
          password: this.password
        }).then((res) => {
          console.log(res.data)
        })
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
