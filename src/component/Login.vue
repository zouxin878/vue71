<template>
 <div class="login">
     <div class="title">FREEDOM 平台</div>
   <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
    <el-form-item label="账号:" prop="user">
        <el-input v-model.number="ruleForm.user"></el-input>
    </el-form-item>
    <el-form-item label="密码:" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
    </el-form-item>
    </el-form>
    <ul>
      <li v-for="item in footerList" :key="item" @click='handleHelp(item)'>
      {{item}}
      </li>
    </ul>
 </div>
</template>

<script>
export default {
  data () {
    var checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能空'))
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('密码不能为空'))
      }
      callback()
    }
    return {
      ruleForm: {
        pass: '',
        user: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        user: [
          { validator: checkUser, trigger: 'blur' }
        ]
      },
      footerList: ['忘记密码', '注册', '修改密码', '自助服务']
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('dd', this.ruleForm)
          // alert('submit!')
          if (this.ruleForm.user === 'admin' && this.ruleForm.pass === '123456') {
            sessionStorage.setItem('cook', '12334445555')
            this.$router.push('/home')
          } else {
            return this.$message('账号或密码错误')
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleHelp (value) {
      switch (value) {
        case '忘记密码':
          console.log(value)
          break
        case '注册':
          console.log(value)
          break
        case '修改密码':
          console.log(value)
          break
        case '自助服务':
          console.log(value)
          break
        default:
          console.log('over')
      }
      window.open(value, '_black')
    }
  }
}
</script>

<style lang='sass'>
.login
    background-color: #f8f8f8
    position: absolute
    box-shadow: 5px 0px 4px #ccc
    left: 50%
    top: 50%
    transform: translate(-50%,-50%)
    width: 356px
    height: 324px
    border-radius: 10px
    padding: 20px
    .title
        margin-bottom: 50px
        font-weight: 700
        font-size: 22px
        text-align: center
    .el-button
        width: 100%
        margin-top: 10px
        background-image: linear-gradient(-32deg, #1c51e0 36%,#55bfeb)
    ul
        display: flex
        margin-top: 60px
        padding: 0
        text-align: center
        li
            flex: 1
            color: #666
            cursor: pointer
            &:hover
                color: #000
</style>
