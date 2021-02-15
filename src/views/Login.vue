<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card shaped class="pa-6">
          <v-form
              ref="form"
              v-model="valid"
              lazy-validation
          >
            <v-text-field
                v-model="username"
                :counter="10"
                :rules="nameRules"
                label="用户名"
                required
            ></v-text-field>

            <v-text-field
                v-model="password"
                :counter="10"
                :rules="passwordRules"
                label="密码"
                required
            ></v-text-field>
            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-6"
                @click="validate"
            >
              登录
            </v-btn>
            <v-btn
                color="error"

                @click="reset"
            >
              重置
            </v-btn>
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
      v => (v && v.length <= 10) || '用户名需少于10个字符',
    ],
    password: '',
    passwordRules: [
      v => !!v || '密码是必填选项',
      v => (v && v.length <= 10) || '密码需少于10个字符',
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
